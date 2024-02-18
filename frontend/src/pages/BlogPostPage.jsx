import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Game from '../assets/ar6dy.png'
import './BlogPostPage.css'
import { format } from 'date-fns'

const BlogPostPage = () => {
  const { id: postId } = useParams()
  const [post, setPost] = useState({})

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`http://localhost:3000/blog/${postId}`)
      setPost(data)
    }
    fetchProduct()
  }, [postId])

  return (
    <article className='article'>
      <img className='article-img' src={Game} />
      <h1 className='article-h1'>{post.title}</h1>
      <h2 className='article-h2'>{post.subtitle}</h2>
      <time className='article-time'>{post.createdAt}</time>
      <hr className='article-hr' />
      <p className='article-p'>{post.content}</p>
    </article>
  )
}

export default BlogPostPage
