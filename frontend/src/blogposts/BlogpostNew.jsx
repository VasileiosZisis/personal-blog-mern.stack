import FormContainer from '../components/FormContainer'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { joiResolver } from '@hookform/resolvers/joi'
import { toast } from 'react-toastify'
import Joi from 'joi'
import { useCreateBlogpostMutation } from '../slices/blogpostsApiSlice'
import Loader from '../components/Loader'

const schema = Joi.object({
  image: Joi.any().required(),
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
    .messages({ 'string.empty': 'Choose an option' })
})

const BlogpostNew = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
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
    <FormContainer>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <label htmlFor='image' name='image'>
          Image
        </label>
        <input type='file' {...register('image')} />
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
        <textarea rows='10' cols='100' type='text' {...register('content')} />
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
  )
}

export default BlogpostNew
