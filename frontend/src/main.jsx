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
import AdminRoute from './components/AdminRoute.jsx'
import HomePage from './pages/HomePage.jsx'
import BlogPage from './pages/BlogPage.jsx'
import BlogpostNew from './blogposts/BlogpostNew.jsx'
import UpdateProfile from './users/UpdateProfile.jsx'
import BlogpostPage from './pages/BlogpostPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import BlogpostEdit from './blogposts/BlogpostEdit.jsx'
import AnimeBlogPage from './pages/AnimeBlogPage.jsx'
import BookBlogPage from './pages/BookBlogPage.jsx'
import GameBlogPage from './pages/GameBlogPage.jsx'
import TvBlogPage from './pages/TvBlogPage.jsx'
import UpcomingNew from './upcoming/UpcomingNew.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index path='/' element={<HomePage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/blog/' element={<BlogPage />} />
      <Route path='/blog/anime/' element={<AnimeBlogPage />} />
      <Route path='/blog/anime/page/:pageNumber' element={<AnimeBlogPage />} />
      <Route path='/blog/books/' element={<BookBlogPage />} />
      <Route path='/blog/books/:pageNumber' element={<BookBlogPage />} />
      <Route path='/blog/games/' element={<GameBlogPage />} />
      <Route path='/blog/games/:pageNumber' element={<GameBlogPage />} />
      <Route path='/blog/tv/' element={<TvBlogPage />} />
      <Route path='/blog/tv/:pageNumber' element={<TvBlogPage />} />
      <Route path='/blog/page/:pageNumber' element={<BlogPage />} />
      <Route path='/blog/:id' element={<BlogpostPage />} />

      <Route path='' element={<PrivateRoute />}>
        <Route path='/profile' element={<UpdateProfile />} />
      </Route>

      <Route path='' element={<AdminRoute />}>
        <Route path='/new' element={<BlogpostNew />} />
        <Route path='/blog/:id/edit' element={<BlogpostEdit />} />
        <Route path='/new-upcoming' element={<UpcomingNew />} />
      </Route>
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
