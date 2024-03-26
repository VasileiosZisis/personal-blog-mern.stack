import { useParams } from 'react-router-dom'
import { useGetBlogpostDetailsQuery } from '../slices/blogpostsApiSlice'
import Game from '../assets/ar6dy.png'
import './BlogpostPage.css'
import Loader from '../components/Loader'

const BlogpostPage = () => {
  const { id: blogpostId } = useParams()

  const {
    data: blogpost,
    isLoading,
    error
  } = useGetBlogpostDetailsQuery(blogpostId)

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <div>{error?.data?.message || error.error}</div>
      ) : (
        <article className='article'>
          <img className='article-img' src={Game} />
          <h1 className='article-h1'>{blogpost.title}</h1>
          <h2 className='article-h2'>{blogpost.subtitle}</h2>
          <time className='article-time'>{blogpost.createdAt}</time>
          <hr className='article-hr' />
          <p className='article-p'>{blogpost.content}</p>
        </article>
      )}
    </>
  )
}

export default BlogpostPage
