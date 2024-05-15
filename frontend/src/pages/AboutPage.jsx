import './AboutPage.css'
import { Helmet } from 'react-helmet-async'

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <meta
          name='description'
          content='QUICK AND HONEST is a place where I express my opinion on some of the
          things that I enjoy to spend my time on: games, anime, TV shows and
          books.'
        />
        <link rel='canonical' href='https://www.quickandhonest.com/about' />
        <title>About | Quick and Honest</title>
        <meta property='og:title' content='Quick and Honest' />
        <meta
          property='og:description'
          content='QUICK AND HONEST is a place where I express my opinion on some of the
          things that I enjoy to spend my time on: games, anime, TV shows and
          books.'
        />
        <meta
          property='og:url'
          content='https://www.quickandhonest.com/about'
        />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/dmdbza74n/image/upload/v1715795746/MyBlog/new_tkhsi3_moizxx.webp'
        />
        <meta property='og:image:type' content='image/webp' />
        <meta property='og:image:width' content='900' />
        <meta property='og:image:height' content='296' />
      </Helmet>
      <main>
        <section className='about-image'>
          <img src='https://res.cloudinary.com/dmdbza74n/image/upload/v1715279602/MyBlog/gallery_tkhsi3.webp' />
        </section>
        <article className='article-about'>
          <p className='article-p-about'>
            QUICK AND HONEST is a place where I express my opinion on some of
            the things that I enjoy to spend my time on: games, anime, TV shows
            and books.
            <br />
            <br />
            If you like to get in touch with me: vasil.zisis@gmail.com
          </p>
        </article>
      </main>
    </>
  )
}

export default AboutPage
