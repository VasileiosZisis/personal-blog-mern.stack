import { Link } from 'react-router-dom'
import Game from '../assets/ar6dy.png'
import Book from '../assets/true.jpg'
import { formatISO9075 } from 'date-fns'
import './Blogpost.css'

const Blogpost = ({ _id, title, subtitle, createdAt }) => {
  return (
    <div className='blogpost-card'>
      <img className='blogpost-card-img' src={Game} />
      <hr className='blogpost-hr' />
      <p className='blogpost-title'>{title}</p>
      <p className='blogpost-subtitle'>{subtitle}</p>
      <time className='blogpost-time'>
        {formatISO9075(new Date(createdAt), { representation: 'date' })}
      </time>
      <div className='blogpost-link-container'>
        <Link className='blogpost-link' to={`/blog/${_id}`}>
          <button>READ MORE</button>
        </Link>
      </div>
    </div>
  )
}

export default Blogpost
