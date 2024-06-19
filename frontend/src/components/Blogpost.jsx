import { Link } from 'react-router-dom'
import './Blogpost.css'

const Blogpost = ({ _id, image, title, subtitle, createdAt }) => {
  const date = new Date(createdAt).toLocaleDateString()

  return (
    <div className='blogpost-card'>
      <div className='blogcard-img-container'>
        <img className='blogpost-card-img' src={image.url} />
        <hr className='blogpost-hr' />
      </div>
      <div className='blogcard-text-container'>
        <p className='blogpost-title'>{title}</p>
        <p className='blogpost-subtitle'>{subtitle}</p>
        <time className='blogpost-time'>{date}</time>
        <div className='blogpost-link-container'>
          <Link className='blogpost-link' to={`/blog/${_id}`}>
            <button>READ MORE</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Blogpost
