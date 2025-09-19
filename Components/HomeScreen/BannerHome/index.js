import Image from 'next/image'
import React from 'react'
import Slider from 'react-slick'
import cn from 'classnames'
import styles from './styles.module.scss'
const BannerHome = ({ className }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  return (
    <div data-aos="fade-down" className={cn(styles.bannerHome, className)}>
      <figure className='banner-logo'>
        <Image src={require('../../../assets/LIBERO-STUDIO-LOGO.gif')} />
      </figure>
      <Slider className='banner-slick' {...settings}>
        <div className='slick-item'>
          <figure>
            <Image src={require('../../../assets/projects/banner.jpeg')} />
          </figure>
        </div>
        <div className='slick-item'>
          <figure>
            <Image src={require('../../../assets/projects/banner.jpeg')} />
          </figure>
        </div>
        <div className='slick-item'>
          <figure>
            <Image src={require('../../../assets/projects/banner.jpeg')} />
          </figure>
        </div>
        <div className='slick-item'>
          <figure>
            <Image src={require('../../../assets/projects/banner.jpeg')} />
          </figure>
        </div>
      </Slider>
    </div>
  )
}

export default BannerHome
