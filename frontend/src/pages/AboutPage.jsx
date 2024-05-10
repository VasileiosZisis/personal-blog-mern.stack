import './AboutPage.css'

const AboutPage = () => {
  return (
    <main>
      <section className='about-image'>
        <img src='https://res.cloudinary.com/dmdbza74n/image/upload/v1715279602/MyBlog/gallery_tkhsi3.webp' />
      </section>
      <article className='article-about'>
        <p className='article-p-about'>
          QUICK AND HONEST is a place where I express my thoughts on some of the
          things that I enjoy to spend my time on: games, anime, TV shows and
          books.
          <br />
          <br />
          If you like to get in touch with me: vasil.zisis@gmail.com
        </p>
      </article>
    </main>
  )
}

export default AboutPage
