import FormContainer from '../components/FormContainer'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { joiResolver } from '@hookform/resolvers/joi'
import { toast } from 'react-toastify'
import Joi from 'joi'
import { useCreateUpcomingMutation } from '../slices/upcomingApiSlice'
import Loader from '../components/Loader'
import { Helmet } from 'react-helmet-async'

const schema = Joi.object({
  image: Joi.object().custom((value, helpers) => {
    if (value[0]) {
      let allowedExtensions = [
        'image/jpeg',
        'image/jpg',
        'image/png',
        'image/webp'
      ]
      let imageType = value[0].type
      if (allowedExtensions.indexOf(imageType) > -1) {
        {
          return value
        }
      } else {
        return helpers.message('Image must be of type jpeg, jpg, png or webp')
      }
    } else {
      return helpers.message('Image is required')
    }
  }),
  title: Joi.string()
    .valid('Reading', 'Watching', 'Playing')
    .required()
    .messages({ 'string.empty': 'This field is required' }),
  subtitle: Joi.string()
    .required()
    .messages({ 'string.empty': 'This field is required' })
})

const UpcomingNew = () => {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors }
  } = useForm({
    resolver: joiResolver(schema)
  })

  const [createUpcoming, { isLoading }] = useCreateUpcomingMutation()

  const onFormSubmit = async data => {
    const formData = new FormData()
    formData.append('image', data.image[0])
    data = { ...data, image: data.image[0].name }
    formData.append('image', data.image)
    formData.append('title', data.title)
    formData.append('subtitle', data.subtitle)
    try {
      await createUpcoming(formData).unwrap()
      navigate('/')
      toast.success('Card has been created')
    } catch (err) {
      toast.error(err?.data?.message || err.error)
    }
  }

  return (
    <>
      <Helmet>
        <title>New Upcoming | Quick and Honest</title>
        <meta name='robots' content='noindex' />
      </Helmet>
      <FormContainer>
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <label htmlFor='image' name='image'>
            Image
          </label>
          <input
            type='file'
            {...register('image', {
              onChange: e => {
                if (!e.target.value.match(/\.(jpg|jpeg|webp|png)$/)) {
                  setError('image', {
                    type: 'invalid',
                    message: 'Not a valid image format'
                  })
                  return false
                } else {
                  setError(null)
                  clearErrors('image')
                }
              }
            })}
          />
          <p>{errors.image?.message}</p>
          <label htmlFor='title' name='title'>
            Title
          </label>
          <input type='text' {...register('title')} />
          <p>{errors.title?.message}</p>
          <label htmlFor='subtitle' name='subtitle'>
            Subtitle
          </label>
          <input type='text' {...register('subtitle')} />
          <p>{errors.subtitle?.message}</p>
          <button className='btn-submit' type='submit'>
            Submit
          </button>
          {isLoading && <Loader />}
        </form>
      </FormContainer>
    </>
  )
}

export default UpcomingNew
