import './BlogpostNew.css'
import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'

const schema = Joi.object({
  title: Joi.string()
    .required()
    .messages({ 'string.empty': 'This field is required' }),
  content: Joi.string()
    .required()
    .messages({ 'string.empty': 'This field is required' })
})

const BlogpostNew = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: joiResolver(schema) })

  console.log(errors)

  return (
    <main className='form-container'>
      <form
        className='form'
        onSubmit={handleSubmit(data => {
          console.log(data)
        })}
      >
        <label className='label' htmlFor='title'>
          Title
        </label>
        <input type='text' {...register('title')} />
        <p>{errors.title?.message}</p>
        <label className='label' htmlFor='content'>
          Content
        </label>
        <textarea rows='10' cols='100' type='text' {...register('content')} />
        <p>{errors.content?.message}</p>
        <button className='form-button' type='submit'>
          Submit
        </button>
      </form>
    </main>
  )
}

export default BlogpostNew
