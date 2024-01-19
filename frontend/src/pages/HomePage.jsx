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
            slidesPerView={3}
            navigation={true}
            modules={[Autoplay, Navigation]}
          >
            <SwiperSlide>
              <div className='currently-card'>
                <p className='card-title'>Playing</p>
                <p className='card-subtitle'>Doom Eternal</p>
                <hr className='card-hr' />
                <div>
                  <img className='card-img' src={Game} />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='currently-card'>
                <p className='card-title'>Playing</p>
                <p className='card-subtitle'>Doom Eternal</p>
                <hr className='card-hr' />
                <div>
                  <img className='card-img' src={Game} />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='currently-card'>
                <p className='card-title'>Reading</p>
                <p className='card-subtitle'>True Believer</p>
                <hr className='card-hr' />
                <div>
                  <img className='card-img' src={Book} />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='currently-card'>
                <p className='card-title'>Reading</p>
                <p className='card-subtitle'>True Believer</p>
                <hr className='card-hr' />
                <div>
                  <img className='card-img' src={Book} />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='currently-card'>
                <p className='card-title'>Reading</p>
                <p className='card-subtitle'>True Believer</p>
                <hr className='card-hr' />
                <div>
                  <img className='card-img' src={Book} />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='currently-card'>
                <p className='card-title'>Playing</p>
                <p className='card-subtitle'>Doom Eternal</p>
                <hr className='card-hr' />
                <div>
                  <img className='card-img' src={Game} />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* 
        <div className='currently-card-container-parent'>
          <div className='currently-card-container-child'>
            <div className='currently-card-container'>
              <div className='currently-card'>
                <p className='card-title'>Playing</p>
                <p className='card-subtitle'>Doom Eternal</p>
                <hr className='card-hr' />
                <div>
                  <img className='card-img' src={Game} />
                </div>
              </div>
              <div className='currently-card'>
                <p className='card-title'>Reading</p>
                <p className='card-subtitle'>True Believer</p>
                <hr className='card-hr' />
                <div>
                  <img className='card-img' src={Book} />
                </div>
              </div>
              <div className='currently-card'>
                <p className='card-title'>Playing</p>
                <p className='card-subtitle'>Doom Eternal</p>
                <hr className='card-hr' />
                <div>
                  <img className='card-img' src={Game} />
                </div>
              </div>
              <div className='currently-card'>
                <p className='card-title'>Reading</p>
                <p className='card-subtitle'>True Believer</p>
                <hr className='card-hr' />
                <div>
                  <img className='card-img' src={Book} />
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </section>
      <section className='section-latest'>
        {/* <h2 className='latest-h2'>Latest</h2>
        <div className='article-section'>
          <Link className='article-container'>
            <div className='article-img-container'>
              <img className='article-img' src={Game} />
            </div>
            <div className='article-text-container'>
              <h1>Death Stranding Surprised Me</h1>
              <time dateTime='2001-05-15T19:00'>May 15</time>
              <p className='article-p'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna Lorem ipsum
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna Lorem ipsum dolor
                sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna
              </p>
              <hr className='article-link-hr' />
              <p className='article-link'>READ MORE</p>
              <hr className='article-link-hr' />
            </div>
          </Link>
          <Link className='article-container'>
            <div className='article-img-container'>
              <img className='article-img' src={Book} />
            </div>
            <div className='article-text-container'>
              <h1>Death Stranding Surprised Me</h1>
              <time dateTime='2001-05-15T19:00'>May 15</time>
              <p className='article-p'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna Lorem ipsum
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna Lorem ipsum dolor
                sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna
              </p>
              <hr className='article-link-hr' />
              <p className='article-link'>READ MORE</p>
              <hr className='article-link-hr' />
            </div>
          </Link>
        </div> */}
      </section>
    </main>
  )
}

export default HomePage
