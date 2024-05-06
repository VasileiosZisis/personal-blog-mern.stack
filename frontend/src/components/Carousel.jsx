import { useGetUpcomingQuery } from '../slices/upcomingApiSlice'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/navigation'
import { Autoplay, Navigation } from 'swiper/modules'
import Loader from '../components/Loader'
import UpcomingCard from '../components/UpcomingCard'
import './Carousel.css'

const Carousel = () => {
  const { data: cardData, isLoading, error } = useGetUpcomingQuery()
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <div>{error?.data?.message || error.error}</div>
      ) : (
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
          {cardData.map(upcoming => (
            <SwiperSlide key={upcoming._id}>
              <UpcomingCard {...upcoming} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  )
  //   return (
  //     <Swiper
  //       className='mySwiper'
  //       autoplay={{
  //         delay: 2500,
  //         disableOnInteraction: false
  //       }}
  //       spaceBetween={20}
  //       loop={true}
  //       slidesPerView={1}
  //       navigation={true}
  //       breakpoints={{
  //         700: {
  //           slidesPerView: 2,
  //           spaceBetween: 20
  //         },
  //         1000: {
  //           slidesPerView: 3,
  //           spaceBetween: 20
  //         }
  //       }}
  //       modules={[Autoplay, Navigation]}
  //     >
  //     </Swiper>
  //   )
}

export default Carousel
