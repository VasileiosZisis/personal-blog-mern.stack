import FormContainer from '../components/FormContainer'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { joiResolver } from '@hookform/resolvers/joi'
import { toast } from 'react-toastify'
import Joi from 'joi'
import {
  useUpdateBlogpostMutation,
  useGetBlogpostDetailsQuery
} from '../slices/blogpostsApiSlice'
import Loader from '../components/Loader'
import { useEffect } from 'react'

const schema = Joi.object({
  blogpostId: Joi.string().hex().length(24),
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
const BlogpostEdit = () => {
  const { id: blogpostId } = useParams()

  const {
    data: blogpostData,
    isLoading,
    refetch,
    error
  } = useGetBlogpostDetailsQuery(blogpostId)

  const [updateBlogpost, { isLoading: loadingUpdate }] =
    useUpdateBlogpostMutation()

  useEffect(() => {
    if (blogpostData) {
      setValue('blogpostId', blogpostId)
      setValue('image', blogpostId.image)
      setValue('title', blogpostData.title)
      setValue('subtitle', blogpostData.subtitle)
      setValue('content', blogpostData.content)
      setValue('category', blogpostData.category)
      console.log(blogpostData)
    }
  }, [blogpostData])

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: joiResolver(schema)
  })

  const navigate = useNavigate()

  const onFormSubmit = async data => {
    try {
      const response = await updateBlogpost(data).unwrap()
      // navigate('/blog')
      toast.success('Blogpost has been updated')
      refetch()
    } catch (err) {
      toast.error(err?.data?.message || err.error)
    }
  }

  return (
    <FormContainer>
      {loadingUpdate && <Loader />}

      {isLoading ? (
        <Loader />
      ) : error ? (
        <p>{error.data.message}</p>
      ) : (
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <label htmlFor='image' name='image'>
            Title
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
        </form>
      )}
    </FormContainer>
  )
}

export default BlogpostEdit
