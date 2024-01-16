import './HomePage.css'
import Gallery from '../assets/gallery.webp'
import Game from '../assets/ar6dy.png'

const HomePage = () => {
  return (
    <main>
      <section className='gallery-image'>
        <img src={Gallery} />
      </section>
      <section className='section-currently'>
        <h2 className='currently-h2'>Currently</h2>
        <div className='currently-card-container-parent'>
          <div className='currently-card-container-child'>
            <div className='currently-card-container'>
              <div className='currently-card'>
                <p>Playing</p>
                <p>Doom Eternal</p>
                <hr className='card-hr' />
                <div className='card-img-container'>
                  <img className='card-img' src={Game} />
                </div>
              </div>
              <div className='currently-card'>
                <p>Playing</p>
                <p>Doom Eternal</p>
                <hr className='card-hr' />
                <div className='card-img-container'>
                  <img className='card-img' src={Game} />
                </div>
              </div>
              <div className='currently-card'>
                <p>Playing</p>
                <p>Doom Eternal</p>
                <hr className='card-hr' />
                <div className='card-img-container'>
                  <img className='card-img' src={Game} />
                </div>
              </div>
              <div className='currently-card'>
                <p>Playing</p>
                <p>Doom Eternal</p>
                <hr className='card-hr' />
                <div className='card-img-container'>
                  <img className='card-img' src={Game} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default HomePage
