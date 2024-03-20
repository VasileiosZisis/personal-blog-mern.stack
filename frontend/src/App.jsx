import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/Navbar'
import './index.css'
import Footer from './components/Footer'

function App () {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <ToastContainer />
    </>
  )
}

export default App
