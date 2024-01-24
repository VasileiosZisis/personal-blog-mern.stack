import './HomePage.css'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/navigation'
import { Autoplay, Navigation } from 'swiper/modules'
import Gallery from '../assets/gallery.webp'
import Game from '../assets/ar6dy.png'
import Book from '../assets/true.jpg'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

const HomePage = () => {
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
        <div className='article-card-container'>
          <div className='article-card'>
            <img className='article-card-img' src={Game} />
            <hr className='article-hr' />
            <p className='article-title'>Death Stranding Surprised Me</p>
            <p className='article-subtitle'>and I know it shouldn't</p>
            <div className='article-link-container'>
              <Link href='/' className='article-link'>
                <button>READ MORE</button>
              </Link>
            </div>
          </div>
          <div className='article-card'>
            <img className='article-card-img' src={Book} />
            <hr className='article-hr' />
            <p className='article-title'>Death Stranding Surprised Me</p>
            <p className='article-subtitle'>and I know it shouldn't</p>
            <div className='article-link-container'>
              <Link href='/' className='article-link'>
                <button>READ MORE</button>
              </Link>
            </div>
          </div>
          <div className='article-card'>
            <img className='article-card-img' src={Game} />
            <hr className='article-hr' />
            <p className='article-title'>Death Stranding Surprised Me</p>
            <p className='article-subtitle'>and I know it shouldn't</p>
            <div className='article-link-container'>
              <Link href='/' className='article-link'>
                <button>READ MORE</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default HomePage
