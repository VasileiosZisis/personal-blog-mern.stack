import FormContainer from '../components/FormContainer'
import { useForm } from 'react-hook-form'
import Joi from 'joi'
import { joiResolver } from '@hookform/resolvers/joi'
import { useDispatch, useSelector } from 'react-redux'
import { Oval } from 'react-loader-spinner'
import { useProfileMutation } from '../slices/usersApiSlice'
import { setCredentials } from '../slices/authSlice'
import { toast } from 'react-toastify'

const schema = Joi.object({
  name: Joi.string().messages({
    'string.empty': 'This field is required'
  }),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .messages({
      'string.empty': 'This field is required',
      'string.email': 'Not a valid email format'
    }),
  password: Joi.string().allow('')
})

const UpdateProfile = () => {
  const dispatch = useDispatch()

  const { userInfo } = useSelector(state => state.auth)

  const [profile, { isLoading }] = useProfileMutation()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: joiResolver(schema),
    defaultValues: {
      name: userInfo.name,
      email: userInfo.email
    }
  })

  const onFormSubmit = async data => {
    try {
      const response = await profile(data).unwrap()
      dispatch(setCredentials(response))
      toast.success('Your profile is updated')
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
        <input type='text' {...register('name')} />
        <p>{errors.email?.message}</p>
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
        {isLoading && (
          <Oval
            visible={true}
            height='80'
            width='80'
            color='#212529'
            secondaryColor='#212529'
            ariaLabel='oval-loading'
            wrapperStyle={{ display: 'block', margin: 'auto' }}
            wrapperClass=''
          />
        )}
      </form>
    </FormContainer>
  )
}

export default UpdateProfile
