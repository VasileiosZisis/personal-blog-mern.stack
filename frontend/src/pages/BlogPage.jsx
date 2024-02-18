import Blogpost from '../components/Blogpost'
import { useEffect, useState } from 'react'
import axios from 'axios'
import './BlogPage.css'

const BlogPage = () => {
  const [posts, setPosts] = useState({})

  useEffect(() => {
    // fetch('http://localhost:3000/blog').then(response => {
    //   response.json().then(posts => {
    //     setPosts(posts)
    //   })
    // })
    const fetchPosts = async () => {
      const { data } = await axios.get('http://localhost:3000/blog/')
      setPosts(data)
    }
    fetchPosts()
  }, [])

  return (
    <section className='section-blogpost'>
      <div className='blogpost-card-container'>
        {posts.length > 0 &&
          posts.map(post => <Blogpost key={post._id} {...post} />)}
      </div>
    </section>
  )
}

export default BlogPage
