import {
  useGetUpcomingQuery,
  useDeleteUpcomingMutation
} from '../slices/upcomingApiSlice'
import UpcomingCard from '../components/UpcomingCard'
import Loader from '../components/Loader'
import './UpcomingShow.css'
import { toast } from 'react-toastify'
import { Helmet } from 'react-helmet-async'

const UpcomingShow = () => {
  const { data, isLoading, error, refetch } = useGetUpcomingQuery()

  const [deleteUpcoming, { isLoading: loadingDelete }] =
    useDeleteUpcomingMutation()

  const deleteHandler = async id => {
    if (window.confirm('Are you sure?')) {
      try {
        await deleteUpcoming(id)
        toast.success('Card has been deleted')
        refetch()
      } catch (err) {
        toast.error(err?.data?.message || err.error)
      }
    }
  }

  return (
    <>
      <Helmet>
        <title>Upcoming | Quick and Honest</title>
        <meta name='robots' content='noindex' />
      </Helmet>
      <main id='upcoming-show-page'>
        {isLoading ? (
          <Loader />
        ) : error ? (
          <div>{error?.data?.message || error.error}</div>
        ) : (
          <div className='upcoming-card-container'>
            {data.length > 0 &&
              data.map(upcoming => (
                <UpcomingCard
                  key={upcoming._id}
                  title={upcoming.title}
                  subtitle={upcoming.subtitle}
                  image={upcoming.image}
                  isForm={true}
                  onClick={() => deleteHandler(upcoming._id)}
                />
              ))}
          </div>
        )}
        {loadingDelete && <Loader />}
      </main>
    </>
  )
}

export default UpcomingShow
