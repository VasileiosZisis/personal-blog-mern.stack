import { Helmet } from 'react-helmet-async'

const MetaTags = ({ metatitle, metadescription, metaurl }) => {
  return (
    <Helmet>
      <title>{`${metatitle} | Quick and Honest`}</title>
      <meta name='description' content={metadescription} />
      <link rel='canonical' href='https://www.quickandhonest.com/blog/' />
      <meta property='og:title' content={metatitle} />
      <meta property='og:description' content={metadescription} />
      <meta
        property='og:url'
        content={`https://www.quickandhonest.com/blog/${metaurl}`}
      />
      <meta
        property='og:image'
        content='https://res.cloudinary.com/dmdbza74n/image/upload/v1715795746/MyBlog/new_tkhsi3_moizxx.webp'
      />
      <meta property='og:image:type' content='image/webp' />
      <meta property='og:image:width' content='900' />
      <meta property='og:image:height' content='296' />
    </Helmet>
  )
}

export default MetaTags
