// import './BlogpostNew.css'
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
    console.log(data)
    try {
      await login(data).unwrap()
      dispatch(setCredentials(data))
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
    <main className='form-container'>
      <form className='form' onSubmit={handleSubmit(onFormSubmit)}>
        <label className='label' htmlFor='email' name='email'>
          Email
        </label>
        <input className='input' type='email' {...register('email')} />
        <p>{errors.email?.message}</p>
        <label className='label' htmlFor='password' name='password'>
          Password
        </label>
        <input className='input' type='password' {...register('password')} />
        <p>{errors.password?.message}</p>
        <button className='form-button' type='submit'>
          Submit
        </button>
      </form>
    </main>
  )
}

export default LoginPage
