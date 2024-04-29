import Blogpost from '../components/Blogpost'
import { useParams, useNavigate } from 'react-router-dom'
import { useGetBookBlogpostsQuery } from '../slices/blogpostsApiSlice'
import Loader from '../components/Loader'
import './BlogPage.css'
import '../components/Paginate.css'
import ReactPaginate from 'react-paginate'

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
    <main>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <div>{error?.data?.message || error.error}</div>
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
  )
}

export default AnimeBlogPage
