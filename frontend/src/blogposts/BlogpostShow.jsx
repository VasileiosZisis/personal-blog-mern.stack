import Game from '../assets/ar6dy.png'
import Book from '../assets/true.jpg'
import { formatISO9075 } from 'date-fns'
import './BlogpostShow.css'

const BlogpostShow = ({ _id, title, subtitle, createdAt, content }) => {
  return (
    <article>
      <img className='blogpost-img' src={Game} />
      <h1 className='blogpost-h1'>{title}</h1>
      <h2 className='blogpost-h2'>{subtitle}</h2>
      <time className='blogpost-time'>
        {formatISO9075(new Date(createdAt), { representation: 'date' })}
      </time>
      <hr className='blogpost-hr' />
      <p className='blogpost-p'>{content}</p>
    </article>
  )
}

export default BlogpostShow
