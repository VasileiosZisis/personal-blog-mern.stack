import BlogpostShow from '../blogposts/BlogpostShow'
import { useEffect, useState } from 'react'

const BlogPage = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/blog').then(response => {
      response.json().then(posts => {
        setPosts(posts)
      })
    })
  }, [])

  return (
    <>{posts.length > 0 && posts.map(post => <BlogpostShow {...post} />)}</>
  )
}

export default BlogPage
