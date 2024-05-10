import './HirePage.css'

const HirePage = () => {
  return (
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
  )
}

export default HirePage
