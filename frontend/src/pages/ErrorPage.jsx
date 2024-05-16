import SearchBox from '../components/SearchBox'
import { useNavigate } from 'react-router-dom'
import './ErrorPage.css'
import { Helmet } from 'react-helmet-async'

const ErrorPage = () => {
  let navigate = useNavigate()

  const submitHandler = e => {
    e.preventDefault()
    navigate(-1)
  }

  return (
    <>
      <Helmet>
        <meta
          name='description'
          content='QUICK AND HONEST is a place where I express my opinion on some of the
      things that I enjoy to spend my time on: games, anime, TV shows and
      books.'
        />
        <link rel='canonical' href='https://www.quickandhonest.com/error' />
        <title>Error | Quick and Honest</title>
        <meta property='og:title' content='Error | Quick and Honest' />
        <meta
          property='og:description'
          content='QUICK AND HONEST is a place where I express my opinion on some of the
      things that I enjoy to spend my time on: games, anime, TV shows and
      books.'
        />
        <meta
          property='og:url'
          content='https://www.quickandhonest.com/error'
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
        <div className='errorpage-h1'>
          <h1>The page does not exist</h1>
        </div>
        <div className='errorpage-p'>
          <p>Make a new search</p>
        </div>
        <SearchBox />
        <div className='errorpage-p'>
          <p>or</p>
        </div>
        <div className='errorpage-button'>
          <button onClick={submitHandler}>Go Back</button>
        </div>
      </main>
    </>
  )
}

export default ErrorPage
