import './UpcomingCard.css'

const UpcomingCard = ({ id, title, subtitle, image, isForm, onClick }) => {
  if (isForm)
    return (
      <div className='currently-card'>
        <button className='upcoming-button delete' onClick={onClick}>
          X
        </button>
        <p className='card-title'>{title}</p>
        <p className='card-subtitle'>{subtitle}</p>
        <hr className='card-hr' />
        <img className='card-img' src={image.url} />
      </div>
    )
  return (
    <div className='currently-card'>
      <p className='card-title'>{title}</p>
      <p className='card-subtitle'>{subtitle}</p>
      <hr className='card-hr' />
      <img className='card-img' src={image.url} />
    </div>
  )
}

export default UpcomingCard
