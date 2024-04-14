import { useParams, useNavigate, Link } from 'react-router-dom'
import {
  useGetBlogpostDetailsQuery,
  useDeleteBlogpostMutation
} from '../slices/blogpostsApiSlice'
import './BlogpostPage.css'
import Loader from '../components/Loader'
import { toast } from 'react-toastify'

const BlogpostPage = () => {
  const { id } = useParams()

  const navigate = useNavigate()

  const { data: blogpost, isLoading, error } = useGetBlogpostDetailsQuery(id)

  const [deleteBlogpost, { isLoading: loadingDelete }] =
    useDeleteBlogpostMutation()

  const deleteHandler = async id => {
    if (window.confirm('Are you sure?')) {
      try {
        await deleteBlogpost(id)
        navigate(`/blog`)
        toast.success('Blogpost has been deleted')
      } catch (err) {
        toast.error(err?.data?.message || err.error)
      }
    }
  }

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <div>{error?.data?.message || error.error}</div>
      ) : (
        <main>
          <article className='article'>
            <img className='article-img' src={blogpost.image.url} />
            <h1 className='article-h1'>{blogpost.title}</h1>
            <h2 className='article-h2'>{blogpost.subtitle}</h2>
            <time className='article-time'>{blogpost.createdAt}</time>
            <hr className='article-hr' />
            <p className='article-p'>{blogpost.content}</p>
          </article>
          <div className='button-container'>
            <Link to={`/blog/${id}/edit`} className='article-link'>
              <button className='article-button edit'>Edit</button>
            </Link>
            <button
              className='article-button delete'
              onClick={() => deleteHandler(id)}
            >
              Delete
            </button>
          </div>
          {loadingDelete && <Loader />}
        </main>
      )}
    </>
  )
}

export default BlogpostPage
