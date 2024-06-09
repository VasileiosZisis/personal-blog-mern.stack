import { useParams, useNavigate, Link } from 'react-router-dom'
import {
  useGetBlogpostDetailsQuery,
  useDeleteBlogpostMutation
} from '../slices/blogpostsApiSlice'
import './BlogpostPage.css'
import './ErrorPage.css'
import Loader from '../components/Loader'
import { toast } from 'react-toastify'
import MetaTags from '../components/MetaTags'
import SearchBox from '../components/SearchBox'

const BlogpostPage = () => {
  const prodErr = import.meta.env.PROD

  const { id } = useParams()

  const navigate = useNavigate()

  const submitHandler = e => {
    e.preventDefault()
    navigate(-1)
  }

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
        prodErr ? (
          <main>
            <div className='errorpage-h1'>
              <h1>The page does not exist</h1>
            </div>
            <div className='errorpage-p'>
              <p>Make a new search</p>
            </div>
            <SearchBox />
            <div className='errorpage-p'>
              <p>or</p>
            </div>
            <div className='errorpage-button'>
              <button onClick={submitHandler}>Go Back</button>
            </div>
          </main>
        ) : (
          <div>{error?.data?.message || error.error}</div>
        )
      ) : (
        <>
          <MetaTags
            metatitle={blogpost.title}
            metadescription={blogpost.title + ' ' + blogpost.subtitle}
            metaurl={id}
          />

          <main>
            <article className='article'>
              <img className='article-img' src={blogpost.image.url} />
              <h1 className='article-h1'>{blogpost.title}</h1>
              <h2 className='article-h2'>{blogpost.subtitle}</h2>
              <time className='article-time'>{blogpost.createdAt}</time>
              <hr className='article-hr' />
              <div className='article-p-container'>
                <p
                  className='article-p'
                  dangerouslySetInnerHTML={{ __html: blogpost.content }}
                ></p>
              </div>
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
        </>
      )}
    </>
  )
}

export default BlogpostPage
