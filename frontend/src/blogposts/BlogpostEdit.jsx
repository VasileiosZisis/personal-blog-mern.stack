import FormContainer from '../components/FormContainer'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { joiResolver } from '@hookform/resolvers/joi'
import { toast } from 'react-toastify'
import Joi from 'joi'
import {
  useUpdateBlogpostMutation,
  useGetBlogpostDetailsQuery,
  useUploadBlogpostMutation
} from '../slices/blogpostsApiSlice'
import Loader from '../components/Loader'
import { useEffect } from 'react'

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
const BlogpostEdit = () => {
  const { id } = useParams()

  const {
    data: blogpostData,
    isLoading,
    refetch,
    error
  } = useGetBlogpostDetailsQuery(id)

  const [updateBlogpost, { isLoading: loadingUpdate }] =
    useUpdateBlogpostMutation()

  const [uploadBlogpost, { isLoading: loadingImageUpdate }] =
    useUploadBlogpostMutation()

  useEffect(() => {
    if (blogpostData) {
      setValue('image', blogpostData.image)
      setValue('title', blogpostData.title)
      setValue('subtitle', blogpostData.subtitle)
      setValue('content', blogpostData.content)
      setValue('category', blogpostData.category)
    }
  }, [blogpostData])

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: joiResolver(schema) })

  const navigate = useNavigate()

  const onFormSubmit = async data => {
    if (data.image[0]) {
      const formData = new FormData()
      formData.append('_id', id)
      formData.append('image', data.image[0])
      data = { ...data, image: data.image[0].name }
      formData.append('image', data.image)
      formData.append('title', data.title)
      formData.append('subtitle', data.subtitle)
      formData.append('content', data.content)
      formData.append('category', data.category)
      try {
        await uploadBlogpost(formData).unwrap()
        navigate(`/blog/${id}`)
        toast.success('Blogpost has been updated')
        refetch()
      } catch (err) {
        toast.error(err?.data?.message || err.error)
      }
    } else {
      try {
        await updateBlogpost({ ...data, _id: id }).unwrap()
        navigate(`/blog/${id}`)
        toast.success('Blogpost has been updated')
        refetch()
      } catch (err) {
        toast.error(err?.data?.message || err.error)
      }
    }
  }

  return (
    <FormContainer>
      {loadingUpdate && <Loader />}
      {loadingImageUpdate && <Loader />}

      {isLoading ? (
        <Loader />
      ) : error ? (
        <p>{error.data.message}</p>
      ) : (
        <>
          <img src={blogpostData.image.url} style={{ width: '150px' }} />
          <form onSubmit={handleSubmit(onFormSubmit)}>
            <label htmlFor='image' name='image'>
              image
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
            <textarea
              rows='10'
              cols='100'
              type='text'
              {...register('content')}
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
          </form>
        </>
      )}
    </FormContainer>
  )
}

export default BlogpostEdit
