import { ToastContainer } from 'react-toastify'
import AOS from 'aos'

import '../styles/globals.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'aos/dist/aos.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'react-toastify/dist/ReactToastify.css'
import 'react-image-gallery/styles/css/image-gallery.css'
import 'react-image-lightbox/style.css'
import { useEffect } from 'react'
import { request } from '../libs/dato'

const FOOTER_QUERY = `query ContactInfoQuery {
  contactSetting {
    gallery {
      url
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
    location {
      latitude
      longitude
    }
    phoneNumber
    phoneNumberTwo
    workingTime
    workingTimeTwo
    callForActionText
    contactPreline
    address
    addressTwo
    email
  }
}
`
function MyApp ({ Component, pageProps, ...props }) {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-cubic',
      once: false,
      offset: 50,
      duration: 800
    })
  }, [])
  return (
    <>
      <Component {...{ ...pageProps, ...props }} />
      <ToastContainer position="bottom-right"/>
    </>
  )
}

MyApp.getInitialProps = async (ctx) => {
  const { contactSetting } = await request({
    query: FOOTER_QUERY
  })

  return {
    contactSetting
  }
}

export default MyApp
