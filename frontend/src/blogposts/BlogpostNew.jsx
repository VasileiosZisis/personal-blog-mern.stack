import './BlogpostNew.css'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'

const schema = Joi.object({
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
  } = useForm({ resolver: joiResolver(schema) })

  const onFormSubmit = async data => {
    console.log(data)
    try {
      const response = await fetch('/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      const responseData = await response.json()
      console.log(responseData)
      // navigate('/')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <main className='form-container'>
      <form className='form' onSubmit={handleSubmit(onFormSubmit)}>
        <label className='label' htmlFor='title' name='title'>
          Title
        </label>
        <input className='input' type='text' {...register('title')} />
        <label className='label' htmlFor='subtitle' name='subtitle'>
          Subtitle
        </label>
        <input className='input' type='text' {...register('subtitle')} />
        <p>{errors.title?.message}</p>
        <label className='label' htmlFor='content' name='content'>
          Content
        </label>
        <textarea rows='10' cols='100' type='text' {...register('content')} />
        <p>{errors.content?.message}</p>
        <label htmlFor='category'>Choose a category:</label>
        <select className='select' name='category' {...register('category')}>
          <option value='' name=''></option>
          <option value='game'>Game</option>
          <option value='tv'>TV</option>
          <option value='anime'>Anime</option>
          <option value='book'>Book</option>
        </select>
        <p>{errors.category?.message}</p>
        <button className='form-button' type='submit'>
          Submit
        </button>
      </form>
    </main>
  )
}

export default BlogpostNew
