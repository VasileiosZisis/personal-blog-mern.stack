import FormContainer from '../components/FormContainer'
import { useForm, Controller } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { joiResolver } from '@hookform/resolvers/joi'
import { toast } from 'react-toastify'
import Joi from 'joi'
import { useCreateBlogpostMutation } from '../slices/blogpostsApiSlice'
import Loader from '../components/Loader'
import { Helmet } from 'react-helmet-async'
import TextEditor from '../components/TextEditor'

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
    .required()
    .messages({ 'string.empty': 'This field is required' }),
  subtitle: Joi.string()
    .required()
    .messages({ 'string.empty': 'This field is required' }),
  content: Joi.string()
    .required()
    .messages({ 'string.empty': 'This field is required' }),
  category: Joi.string()
    .required()
    .valid('game', 'tv', 'book', 'anime')
    .messages({
      'string.empty': 'Choose an option',
      'any.only': 'Not a valid option'
    })
})

const BlogpostNew = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    control,
    formState: { errors }
  } = useForm({
    resolver: joiResolver(schema)
  })

  const [createBlogpost, { isLoading, refetch }] = useCreateBlogpostMutation()

  const onFormSubmit = async data => {
    const formData = new FormData()
    formData.append('image', data.image[0])
    data = { ...data, image: data.image[0].name }
    formData.append('image', data.image)
    formData.append('title', data.title)
    formData.append('subtitle', data.subtitle)
    formData.append('content', data.content)
    formData.append('category', data.category)
    try {
      await createBlogpost(formData).unwrap()
      navigate('/blog')
      toast.success('Blogpost has been created')
      refetch()
    } catch (err) {
      toast.error(err?.data?.message || err.error)
    }
  }

  return (
    <>
      <Helmet>
        <title>New Blogpost | Quick and Honest</title>
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
          <label htmlFor='content' name='content'>
            Content
          </label>
          {/*<textarea rows='10' cols='100' type='text' {...register('content')} /> */}
          <Controller
            control={control}
            name='content'
            render={({ field: { onChange, value } }) => (
              <TextEditor onChange={onChange} value={value} />
            )}
          />
          <p>{errors.content?.message}</p>
          <label htmlFor='category'>Choose a category:</label>
          <select name='category' {...register('category')}>
            <option value=''></option>
            <option value='game'>Game</option>
            <option value='tv'>TV</option>
            <option value='anime'>Anime</option>
            <option value='book'>Book</option>
          </select>
          <p>{errors.category?.message}</p>
          <button type='submit'>Submit</button>
          {isLoading && <Loader />}
        </form>
      </FormContainer>
    </>
  )
}

export default BlogpostNew
