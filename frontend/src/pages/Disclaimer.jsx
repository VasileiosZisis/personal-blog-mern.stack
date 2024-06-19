import './Disclaimer.css'
import { Helmet } from 'react-helmet-async'

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Disclaimer | Quick and Honest</title>
        <meta name='robots' content='noindex' />
      </Helmet>
      <section className='disclaimer-section'>
        <h1 className='disclaimer-h1'>Quick and Honest - DISCLAIMER</h1>
        <p>
          All the images used for the blogposts are the property of their
          respective owners. We do not claim ownership of any of the images
          posted on our website. If you are the owner of an image and would like
          it to be removed from our website, please contact us at
          vasil.zisis@gmail.com with a link to the image and proof of ownership.
          We will remove the image as soon as possible. We respect the
          intellectual property rights of others. If you believe that your work
          has been copied in a way that constitutes copyright infringement,
          please contact us at vasil.zisis@gmail.com and we will take
          appropriate action.
        </p>
      </section>
    </>
  )
}

export default PrivacyPolicy
