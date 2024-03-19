import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { joiResolver } from '@hookform/resolvers/joi'
import { useDispatch } from 'react-redux'
import { useRegisterMutation } from '../slices/usersApiSlice'
import { setCredentials } from '../slices/authSlice'
import Joi from 'joi'
import { toast } from 'react-toastify'

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
  const [register] = useRegisterMutation()
  const navigate = useNavigate()
  const {
    register: regForm,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: joiResolver(schema) })

  const onFormSubmit = async data => {
    try {
      await register(data).unwrap()
      dispatch(setCredentials(data))
      //   navigate('/')
    } catch (err) {
      toast.error(err?.data?.message || err.error)
    }
    // try {
    //   const response = await fetch('/register', {
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
        <label className='label' htmlFor='nane' name='name'>
          Name
        </label>
        <input className='input' type='text' {...regForm('name')} />
        <p>{errors.email?.message}</p>
        <label className='label' htmlFor='email' name='email'>
          Email
        </label>
        <input className='input' type='email' {...regForm('email')} />
        <p>{errors.email?.message}</p>
        <label className='label' htmlFor='password' name='password'>
          Password
        </label>
        <input className='input' type='password' {...regForm('password')} />
        <p>{errors.password?.message}</p>
        <button className='form-button' type='submit'>
          Submit
        </button>
      </form>
    </main>
  )
}

export default RegisterPage
