// import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useGetBlogpostDetailsQuery } from '../slices/blogpostsApiSlice'
// import axios from 'axios'
import Game from '../assets/ar6dy.png'
import './BlogpostPage.css'

const BlogpostPage = () => {
  const { id: blogpostId } = useParams()

  const {
    data: blogpost,
    isLoading,
    error
  } = useGetBlogpostDetailsQuery(blogpostId)
  // const [post, setPost] = useState({})

  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     const { data } = await axios.get(`/blog/${postId}`)
  //     setPost(data)
  //   }
  //   fetchProduct()
  // }, [postId])

  // const date = new Date(blogpost.createdAt)

  // const newDate = date.toLocaleDateString()

  return (
    <>
      {isLoading ? (
        <h2>Loading...</h2>
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
