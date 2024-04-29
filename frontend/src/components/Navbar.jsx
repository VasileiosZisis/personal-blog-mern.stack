import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import './Navbar.css'
import Logo from '../assets/Header-Title.png'

const Navbar = () => {
  const [toggleOpen, setToggleOpen] = useState(false)

  const handleOpen = e => {
    setToggleOpen(!toggleOpen)
    if (!toggleOpen) {
      e.currentTarget.setAttribute('aria-expanded', 'true')
    } else {
      e.currentTarget.setAttribute('aria-expanded', 'false')
    }
  }
  const toggle = () => setToggleOpen(!toggleOpen)

  return (
    <header>
      <nav>
        <div className='nav-img-div'>
          <NavLink to='/' onClick={toggle}>
            <img className='nav-img' src={Logo} />
          </NavLink>
          <button
            onClick={e => handleOpen(e)}
            aria-expanded='false'
            className={`hamburger ${toggleOpen ? 'active' : ''}`}
          >
            <span className='bar' aria-hidden='true'></span>
            <span className='bar' aria-hidden='true'></span>
            <span className='bar' aria-hidden='true'></span>
            <span className='screen-reader-text'>Menu</span>
          </button>
        </div>
        <div>
          <ul className={`nav-ul ${toggleOpen ? 'show' : ''}`}>
            <li className='nav-li'>
              <NavLink className='navlink' to='/about' onClick={toggle}>
                ABOUT
              </NavLink>
            </li>
            <li className='nav-li'>
              <NavLink className='navlink' to='/blog' onClick={toggle}>
                BLOG
              </NavLink>
            </li>
            <li className='nav-li'>
              <NavLink className='navlink' to='/blog/games' onClick={toggle}>
                GAMES
              </NavLink>
            </li>
            <li className='nav-li'>
              <NavLink className='navlink' to='/blog/anime' onClick={toggle}>
                ANIME
              </NavLink>
            </li>
            <li className='nav-li'>
              <NavLink className='navlink' to='/blog/books' onClick={toggle}>
                BOOKS
              </NavLink>
            </li>
            <li className='nav-li'>
              <NavLink className='navlink' to='/blog/tv' onClick={toggle}>
                TV
              </NavLink>
            </li>
            <li className='nav-li'>
              <NavLink className='navlink' to='/hire-me' onClick={toggle}>
                HIRE ME
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
