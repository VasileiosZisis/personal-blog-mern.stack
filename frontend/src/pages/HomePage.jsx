import './HomePage.css'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/navigation'
import { Autoplay, Navigation } from 'swiper/modules'
import Blogpost from '../components/Blogpost'
import Loader from '../components/Loader'
import { useGetBlogpostsQuery } from '../slices/blogpostsApiSlice'
import { useParams } from 'react-router-dom'
import Gallery from '../assets/gallery.webp'
import Game from '../assets/ar6dy.png'
import Book from '../assets/true.jpg'

const HomePage = () => {
  const { pageNumber } = useParams()
  const { data, isLoading, error } = useGetBlogpostsQuery({ skip: pageNumber })

  return (
    <main>
      <section className='gallery-image'>
        <img src={Gallery} />
      </section>
      <section className='section-currently'>
        <h2 className='currently-h2'>Currently</h2>
        <div className='swiper-container'>
          <Swiper
            className='mySwiper'
            autoplay={{
              delay: 2500,
              disableOnInteraction: false
            }}
            spaceBetween={20}
            loop={true}
            slidesPerView={1}
            navigation={true}
            breakpoints={{
              700: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              1000: {
                slidesPerView: 3,
                spaceBetween: 20
              }
            }}
            modules={[Autoplay, Navigation]}
          >
            <SwiperSlide>
              <div className='currently-card'>
                <p className='card-title'>Playing</p>
                <p className='card-subtitle'>Doom Eternal</p>
                <hr className='card-hr' />
                <img className='card-img' src={Game} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='currently-card'>
                <p className='card-title'>Playing</p>
                <p className='card-subtitle'>Doom Eternal</p>
                <hr className='card-hr' />
                <img className='card-img' src={Game} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='currently-card'>
                <p className='card-title'>Reading</p>
                <p className='card-subtitle'>True Believer</p>
                <hr className='card-hr' />
                <img className='card-img' src={Book} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='currently-card'>
                <p className='card-title'>Reading</p>
                <p className='card-subtitle'>True Believer</p>
                <hr className='card-hr' />
                <img className='card-img' src={Book} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='currently-card'>
                <p className='card-title'>Reading</p>
                <p className='card-subtitle'>True Believer</p>
                <hr className='card-hr' />
                <img className='card-img' src={Book} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='currently-card'>
                <p className='card-title'>Playing</p>
                <p className='card-subtitle'>Doom Eternal</p>
                <hr className='card-hr' />
                <img className='card-img' src={Game} />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
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
