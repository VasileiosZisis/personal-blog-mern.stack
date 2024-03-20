import FormContainer from '../components/FormContainer'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { joiResolver } from '@hookform/resolvers/joi'
import { useDispatch } from 'react-redux'
import { useLoginMutation } from '../slices/usersApiSlice'
import { setCredentials } from '../slices/authSlice'
import Joi from 'joi'
import { toast } from 'react-toastify'

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
  const [login] = useLoginMutation()

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
      //   navigate('/')
    } catch (err) {
      toast.error(err?.data?.message || err.error)
    }
    // try {
    //   const response = await fetch('/login', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(data)
    //   })
    //   const responseData = await response.json()
    //   console.log(responseData)
    //   navigate('/')
    // } catch (err) {
    //   console.log(err)
    // }
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
      </form>
    </FormContainer>
  )
}

export default LoginPage
