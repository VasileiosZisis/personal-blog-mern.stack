import Blogpost from '../components/Blogpost'
import { useParams, useNavigate } from 'react-router-dom'
import { useGetBookBlogpostsQuery } from '../slices/blogpostsApiSlice'
import Loader from '../components/Loader'
import './BlogPage.css'
import '../components/Paginate.css'
import ReactPaginate from 'react-paginate'
import { Helmet } from 'react-helmet-async'

const AnimeBlogPage = () => {
  const { pageNumber } = useParams()
  const { data, isLoading, error } = useGetBookBlogpostsQuery({
    pageNumber
  })

  let navigate = useNavigate()

  const handlePageClick = e => {
    navigate(`/blog/books/page/${e.selected + 1}`)
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
        <link
          rel='canonical'
          href='https://www.quickandhonest.com/blog/books'
        />
        <title>Books | Quick and Honest</title>
        <meta property='og:title' content='Books | Quick and Honest' />
        <meta
          property='og:description'
          content='QUICK AND HONEST is a place where I express my opinion on some of the
      things that I enjoy to spend my time on: games, anime, TV shows and
      books.'
        />
        <meta
          property='og:url'
          content='https://www.quickandhonest.com/blog/books'
        />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/dmdbza74n/image/upload/v1715795746/MyBlog/new_tkhsi3_moizxx.webp'
        />
        <meta property='og:image:type' content='image/webp' />
        <meta property='og:image:width' content='900' />
        <meta property='og:image:height' content='296' />
      </Helmet>
      <head>
        {/* Google tag (gtag.js) */}
        <script
          async
          src='https://www.googletagmanager.com/gtag/js?id=G-MYB663Q6FK'
        ></script>
        <script>
          window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'G-MYB663Q6FK');
        </script>
      </head>
      <main>
        {isLoading ? (
          <Loader />
        ) : error ? (
          <div>{error?.data?.message || error.error}</div>
        ) : data.blogpostDocs.length === 0 ? (
          <div className='not-found'>
            <p>NOTHING FOUND</p>
          </div>
        ) : (
          <section className='section-blogpost'>
            <div className='blogpost-card-container'>
              {data.blogpostDocs.length > 0 &&
                data.blogpostDocs.map(blogpost => (
                  <Blogpost key={blogpost._id} {...blogpost} />
                ))}
            </div>
            {data.pages > 1 && (
              <ReactPaginate
                breakLabel='...'
                nextLabel='>'
                pageRangeDisplayed={9}
                marginPagesDisplayed={1}
                onPageChange={handlePageClick}
                pageCount={data.pages}
                previousLabel='<'
                renderOnZeroPageCount={null}
                containerClassName='paginate-container'
                pageClassName='paginate-li'
                pageLinkClassName='paginate-a'
                previousLinkClassName='paginate-prev'
                nextLinkClassName='paginate-next'
                activeLinkClassName='paginate-active'
                breakClassName='paginate-dots'
                disabledClassName='paginate-disabled'
              />
            )}
          </section>
        )}
      </main>
    </>
  )
}

export default AnimeBlogPage
