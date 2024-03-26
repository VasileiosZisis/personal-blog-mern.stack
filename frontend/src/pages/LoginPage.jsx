import FormContainer from '../components/FormContainer'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { joiResolver } from '@hookform/resolvers/joi'
import { useDispatch } from 'react-redux'
import { useLoginMutation } from '../slices/usersApiSlice'
import { setCredentials } from '../slices/authSlice'
import Joi from 'joi'
import { toast } from 'react-toastify'
import Loader from '../components/Loader'

const schema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.empty': 'This field is required',
      'string.email': 'Not a valid email'
    }),
  password: Joi.string()
    .required()
    .messages({ 'string.empty': 'This field is required' })
})

const LoginPage = () => {
  const dispatch = useDispatch()
  const [login, { isLoading }] = useLoginMutation()

  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: joiResolver(schema) })

  const onFormSubmit = async data => {
    try {
      const res = await login(data).unwrap()
      dispatch(setCredentials(res))
      navigate('/')
      toast.success('Logged in successfully')
    } catch (err) {
      toast.error(err?.data?.message || err.error)
    }
  }

  return (
    <FormContainer>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <label htmlFor='email' name='email'>
          Email
        </label>
        <input type='email' {...register('email')} />
        <p>{errors.email?.message}</p>
        <label htmlFor='password' name='password'>
          Password
        </label>
        <input type='password' {...register('password')} />
        <p>{errors.password?.message}</p>
        <button type='submit'>Submit</button>
        {isLoading && <Loader />}
      </form>
    </FormContainer>
  )
}

export default LoginPage
