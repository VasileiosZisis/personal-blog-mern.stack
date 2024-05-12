import SearchBox from '../components/SearchBox'
import { useNavigate } from 'react-router-dom'
import './ErrorPage.css'

const ErrorPage = () => {
  let navigate = useNavigate()

  const submitHandler = e => {
    e.preventDefault()
    navigate(-1)
  }

  return (
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
  )
}

export default ErrorPage
