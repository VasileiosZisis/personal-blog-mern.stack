import FormContainer from '../components/FormContainer'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { joiResolver } from '@hookform/resolvers/joi'
import { useDispatch } from 'react-redux'
import { useRegisterMutation } from '../slices/usersApiSlice'
import { setCredentials } from '../slices/authSlice'
import Joi from 'joi'
import { toast } from 'react-toastify'
import Loader from '../components/Loader'

const schema = Joi.object({
  name: Joi.string().required().messages({
    'string.empty': 'This field is required'
  }),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.empty': 'This field is required',
      'string.email': 'Not a valid email format'
    }),
  password: Joi.string()
    .required()
    .messages({ 'string.empty': 'This field is required' })
})

const RegisterPage = () => {
  const dispatch = useDispatch()
  const [register, { isLoading }] = useRegisterMutation()
  const navigate = useNavigate()
  const {
    register: regForm,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: joiResolver(schema) })

  const onFormSubmit = async data => {
    try {
      const res = await register(data).unwrap()
      dispatch(setCredentials(res))
      navigate('/')
      toast.success('You are now registered')
    } catch (err) {
      toast.error(err?.data?.message || err.error)
    }
  }

  return (
    <FormContainer>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <label htmlFor='nane' name='name'>
          Name
        </label>
        <input type='text' {...regForm('name')} />
        <p>{errors.email?.message}</p>
        <label htmlFor='email' name='email'>
          Email
        </label>
        <input type='email' {...regForm('email')} />
        <p>{errors.email?.message}</p>
        <label htmlFor='password' name='password'>
          Password
        </label>
        <input type='password' {...regForm('password')} />
        <p>{errors.password?.message}</p>
        <button type='submit'>Submit</button>
        {isLoading && <Loader />}
      </form>
    </FormContainer>
  )
}

export default RegisterPage
