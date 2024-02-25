import Blogpost from '../components/Blogpost'
import { useGetBlogpostsQuery } from '../slices/blogpostsApiSlice'
// import { useEffect, useState } from 'react'
// import axios from 'axios'
import './BlogPage.css'

const BlogPage = () => {
  // const [posts, setPosts] = useState({})

  // useEffect(() => {
  // fetch('http://localhost:3000/blog').then(response => {
  //   response.json().then(posts => {
  //     setPosts(posts)
  //   })
  // })
  //   const fetchPosts = async () => {
  //     const { data } = await axios.get('/blog')
  //     setPosts(data)
  //   }
  //   fetchPosts()
  // }, [])

  const { data: blogposts, isLoading, error } = useGetBlogpostsQuery()

  return (
    <>
      {isLoading ? (
        <h2>Loading...</h2>
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
    </>
  )
}

export default BlogPage
