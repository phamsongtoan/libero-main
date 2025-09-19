import React from 'react'
import PageAboutUs from '../Components/PageAboutUs'
import { request } from '../libs/dato'

export const HOMEPAGE_QUERY = `query AboutUsConfig {
  aboutUsConfig {
    title
    subTitle
    sectionTitle
    section2Title
    section2Description
    sectionThumbnail {
      responsiveImage(imgixParams: { fit: crop, w: 2400, h: 2000, auto: format }) {
        sizes
        src
        width
        height
        alt
        title
        base64
      }
    }
    serviceBlocks {
      serviceName
    }
    accordion {
      id
      image {
        responsiveImage(imgixParams: { fit: crop, w: 2400, h: 2000, auto: format }) {
          sizes
          src
          width
          height
          alt
          title
          base64
        }
      }
      mainLine
      title
      description,

    }
    partner{
      responsiveImage(imgixParams: { fit: crop, w: 2400, h: 2000, auto: format }) {
        sizes
        src
        width
        height
        alt
        title
        base64
      }
    }
  }
}
`

export const getStaticProps = async () => {
  const data = await request({
    query: HOMEPAGE_QUERY
  })

  return {
    props: data,
    revalidate: 1
  }
}

const AboutUs = (props) => {
  return (
    <PageAboutUs {...props}/>
  )
}

export default AboutUs
