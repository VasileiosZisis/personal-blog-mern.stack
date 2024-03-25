import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store.js'
import App from './App.jsx'
import PrivateRoute from './components/PrivateRoute.jsx'
import HomePage from './pages/HomePage.jsx'
import BlogPage from './pages/BlogPage.jsx'
import BlogpostNew from './blogposts/BlogpostNew.jsx'
import UpdateProfile from './users/UpdateProfile.jsx'
import BlogpostPage from './pages/BlogPostPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index path='/' element={<HomePage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/profile' element={<UpdateProfile />} />
      <Route path='/new' element={<BlogpostNew />} />
      <Route path='/blog/' element={<BlogPage />} />
      <Route path='/blog/:id' element={<BlogpostPage />} />

      <Route path='' element={<PrivateRoute />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
