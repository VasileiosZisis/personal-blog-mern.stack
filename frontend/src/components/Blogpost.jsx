import { Link } from 'react-router-dom'
import './Blogpost.css'

const Blogpost = ({ _id, image, title, subtitle, createdAt }) => {
  const date = new Date(createdAt).toLocaleDateString()

  return (
    <div className='blogpost-card'>
      <img className='blogpost-card-img' src={image.url} />
      <hr className='blogpost-hr' />
      <p className='blogpost-title'>{title}</p>
      <p className='blogpost-subtitle'>{subtitle}</p>
      <time className='blogpost-time'>{date}</time>
      <div className='blogpost-link-container'>
        <Link className='blogpost-link' to={`/blog/${_id}`}>
          <button>READ MORE</button>
        </Link>
      </div>
    </div>
  )
}

export default Blogpost
