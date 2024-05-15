import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/Navbar'
import './index.css'
import Footer from './components/Footer'
import { HelmetProvider } from 'react-helmet-async'

function App () {
  return (
    <HelmetProvider>
      <Navbar />
      <Outlet />
      <Footer />
      <ToastContainer transition:Slide draggable={false} />
    </HelmetProvider>
  )
}

export default App
