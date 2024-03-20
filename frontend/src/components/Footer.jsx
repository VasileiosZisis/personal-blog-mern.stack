import { Link } from 'react-router-dom'
import './Footer.css'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useLogoutMutation } from '../slices/usersApiSlice.js'
import { logout } from '../slices/authSlice.js'

const Footer = () => {
  const { userInfo } = useSelector(state => state.auth)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [logoutApiCall] = useLogoutMutation()

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap()
      dispatch(logout())
      navigate('/')
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <footer>
      <ul>
        {userInfo ? (
          <>
            <li>{userInfo.name}</li>
            <li onClick={logoutHandler}>Logout</li>
          </>
        ) : (
          <>
            <li>
              <Link to='/register'>Register</Link>
            </li>
            <li>
              <Link to='/login'>Login</Link>
            </li>
          </>
        )}
      </ul>
    </footer>
  )
}

export default Footer
