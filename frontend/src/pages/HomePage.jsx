import './HomePage.css'
import Blogpost from '../components/Blogpost'
import Loader from '../components/Loader'
import { useGetBlogpostsQuery } from '../slices/blogpostsApiSlice'
import { useParams } from 'react-router-dom'
import Gallery from '../assets/gallery.webp'
import Carousel from '../components/Carousel'

const HomePage = () => {
  const { pageNumber } = useParams()
  const { data, isLoading, error } = useGetBlogpostsQuery({ skip: pageNumber })

  return (
    <main>
      <section className='gallery-image'>
        <img src='https://res.cloudinary.com/dmdbza74n/image/upload/v1715279602/MyBlog/gallery_tkhsi3.webp' />
      </section>
      <section className='section-currently'>
        <h2 className='currently-h2'>Currently</h2>
        <Carousel />
      </section>
      <section className='section-latest'>
        <h2 className='latest-h2'>Latest</h2>
        {isLoading ? (
          <Loader />
        ) : error ? (
          <div>{error?.data?.message || error.error}</div>
        ) : (
          <div className='section-blogpost'>
            <div className='blogpost-card-container'>
              {data.blogpostDocs.length > 0 &&
                data.blogpostDocs.map(blogpost => (
                  <Blogpost key={blogpost._id} {...blogpost} />
                ))}
            </div>
          </div>
        )}
      </section>
    </main>
  )
}

export default HomePage
