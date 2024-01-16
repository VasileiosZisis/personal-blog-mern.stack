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
          <NavLink to='/' onClick={toggle} className='nav-img-a'>
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
          <hr className='navbar-hr' />
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
              <NavLink className='navlink' to='/games' onClick={toggle}>
                GAMES
              </NavLink>
            </li>
            <li className='nav-li'>
              <NavLink className='navlink' to='/tv-anime' onClick={toggle}>
                TV/ANIME
              </NavLink>
            </li>
            <li className='nav-li'>
              <NavLink className='navlink' to='/books' onClick={toggle}>
                BOOKS
              </NavLink>
            </li>
            <li className='nav-li'>
              <NavLink className='navlink' to='/hire-me' onClick={toggle}>
                HIRE ME
              </NavLink>
            </li>
          </ul>
          <hr className='navbar-hr' />
        </div>
      </nav>
    </header>
  )
}

export default Navbar
