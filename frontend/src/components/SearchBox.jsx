import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'
import './SearchBOx.css'

const SearchBox = () => {
  const navigate = useNavigate()

  const schema = Joi.object({
    q: Joi.string()
      .required()
      .pattern(/^[a-zA-Z]+$/)
      .messages({
        'string.empty': 'You need to add a keyword',
        'string.pattern.base': 'Only letters A-Z are allowed'
      })
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: joiResolver(schema)
  })

  const onFormSubmit = async data => {
    if (data) {
      navigate(`/blog/search/${data.q.trim()}`)
    } else {
      navigate('/error')
    }
  }

  return (
    <div className='searchbox'>
      <div className='search-container'>
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <input type='text' {...register('q')} />
          <button type='submit'>SEARCH</button>
        </form>
      </div>
      <div className='search-p'>
        <p>{errors.q?.message}</p>
      </div>
    </div>
  )
}

export default SearchBox
