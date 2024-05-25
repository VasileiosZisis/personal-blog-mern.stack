import { Oval } from 'react-loader-spinner'

const Loader = () => {
  return (
    <div
      style={{ display: 'grid', placeContent: 'center', marginBlock: '2rem' }}
    >
      <Oval
        visible={true}
        height='80'
        width='80'
        color='#212529'
        secondaryColor='#212529'
        ariaLabel='oval-loading'
        wrapperStyle={{ display: 'block', margin: 'auto' }}
        wrapperClass=''
      />
    </div>
  )
}

export default Loader
