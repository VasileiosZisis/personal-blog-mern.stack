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
            <li>
              <b>{userInfo.name}</b>
            </li>
            <li>
              <Link to='/profile'>profile</Link>
            </li>
            {userInfo.isAdmin && (
              <>
                <li>
                  <Link to='/new'>create blog</Link>
                </li>
                <li>
                  <Link to='/new-upcoming'>create cards</Link>
                </li>
                <li>
                  <Link to='/show-upcoming'>Show cards</Link>
                </li>
              </>
            )}
            <li className='logout' onClick={logoutHandler}>
              logout
            </li>
          </>
        ) : (
          <>
            {/* <li>
              <Link to='/register'>register</Link>
            </li> */}
            <li>
              <Link to='/login'>login</Link>
            </li>
          </>
        )}
      </ul>
      <div className='footer-div-mid'>
        <div>
          <Link to='/privacy-policy'>Privacy Policy</Link>
        </div>
        <p>
          Created by&nbsp;
          <a href='https://www.vasiliszisis.me/' target='_blank'>
            Vasilis Zisis
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
