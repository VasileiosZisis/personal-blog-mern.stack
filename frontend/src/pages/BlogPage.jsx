import Blogpost from '../components/Blogpost'
import { useGetBlogpostsQuery } from '../slices/blogpostsApiSlice'
import Loader from '../components/Loader'
import './BlogPage.css'

const BlogPage = () => {
  const { data: blogposts, isLoading, error } = useGetBlogpostsQuery()

  return (
    <main>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <div>{error?.data?.message || error.error}</div>
      ) : (
        <section className='section-blogpost'>
          <div className='blogpost-card-container'>
            {blogposts.length > 0 &&
              blogposts.map(blogpost => (
                <Blogpost key={blogpost._id} {...blogpost} />
              ))}
          </div>
        </section>
      )}
    </main>
  )
}

export default BlogPage
