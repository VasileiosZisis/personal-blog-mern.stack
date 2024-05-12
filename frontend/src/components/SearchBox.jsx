import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'
import './SearchBOx.css'

const SearchBox = ({ inputclass, buttonclass }) => {
  const navigate = useNavigate()

  const schema = Joi.object({
    q: Joi.string().required()
  })

  const { register, handleSubmit } = useForm({
    resolver: joiResolver(schema)
  })

  const onFormSubmit = async data => {
    if (data) {
      navigate(`/blog/search/${data.q.trim()}`)
    } else {
      navigate('/')
    }
  }

  return (
    <div className='search-container'>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <input type='text' {...register('q')} />
        <button type='submit'>SEARCH</button>
      </form>
    </div>
  )
}

export default SearchBox
