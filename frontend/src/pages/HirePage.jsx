import './HirePage.css'
import { Helmet } from 'react-helmet-async'

const HirePage = () => {
  return (
    <>
      <Helmet>
        <meta
          name='description'
          content='I am a web developer and if you like this website then you can check
          more of my work at my online portfolio: https://www.vasiliszisis.me/'
        />
        <link rel='canonical' href='https://www.quickandhonest.com/hire-me' />
        <title>Hire Me | Quick and Honest</title>
        <meta property='og:title' content='Hire Me | Quick and Honest' />
        <meta
          property='og:description'
          content='I am a web developer and if you like this website then you can check
          more of my work at my online portfolio: https://www.vasiliszisis.me/'
        />
        <meta
          property='og:url'
          content='https://www.quickandhonest.com/hire-me'
        />
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
        <section className='hire-image'>
          <img src='https://res.cloudinary.com/dmdbza74n/image/upload/v1715279602/MyBlog/gallery_tkhsi3.webp' />
        </section>
        <article className='article-hire'>
          <p className='article-p-hire'>
            I am a web developer and if you like this website then you can check
            more of my work at my online portfolio:{' '}
            <a
              className='link-hire'
              href='https://www.vasiliszisis.me/'
              target='_blank'
            >
              www.vasiliszisis.me
            </a>
            <br />
            <br />
            Or contact me directly at: vasil.zisis@gmail.com
          </p>
        </article>
      </main>
    </>
  )
}

export default HirePage
