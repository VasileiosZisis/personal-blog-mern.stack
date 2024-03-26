import { Oval } from 'react-loader-spinner'

const Loader = () => {
  return (
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
  )
}

export default Loader
