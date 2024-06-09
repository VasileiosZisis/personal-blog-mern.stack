import './HomePage.css'
import Blogpost from '../components/Blogpost'
import Loader from '../components/Loader'
import { useGetLatestBlogpostsQuery } from '../slices/blogpostsApiSlice'
import Carousel from '../components/Carousel'
import { Helmet } from 'react-helmet-async'

const HomePage = () => {
  const { data, isLoading, error } = useGetLatestBlogpostsQuery()
  return (
    <>
      <Helmet>
        <meta
          name='description'
          content='QUICK AND HONEST is a place where I express my opinion on some of the
          things that I enjoy to spend my time on: games, anime, TV shows and
          books.'
        />
        <link rel='canonical' href='https://www.quickandhonest.com/' />
        <title>Quick and Honest</title>
        <meta property='og:title' content='Quick and Honest' />
        <meta
          property='og:description'
          content='QUICK AND HONEST is a place where I express my opinion on some of the
          things that I enjoy to spend my time on: games, anime, TV shows and
          books.'
        />
        <meta property='og:url' content='https://www.quickandhonest.com/' />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/dmdbza74n/image/upload/v1715795746/MyBlog/new_tkhsi3_moizxx.webp'
        />
        <meta property='og:image:type' content='image/webp' />
        <meta property='og:image:width' content='900' />
        <meta property='og:image:height' content='296' />
      </Helmet>
      <head>
        {/* Google tag (gtag.js) */}
        <script
          async
          src='https://www.googletagmanager.com/gtag/js?id=G-MYB663Q6FK'
        ></script>
        <script>
          window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'G-MYB663Q6FK');
        </script>
      </head>
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
                {data.length > 0 &&
                  data.map(blogpost => (
                    <Blogpost key={blogpost._id} {...blogpost} />
                  ))}
              </div>
            </div>
          )}
        </section>
      </main>
    </>
  )
}

export default HomePage
