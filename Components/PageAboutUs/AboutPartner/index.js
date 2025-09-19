import React from 'react'
import cn from 'classnames'
import styles from './styles.module.scss'
import Slider from 'react-slick'
import { Image } from 'react-datocms'

const AboutPartner = ({ aboutUsConfig = {}, className }) => {
  const { partner = [] } = aboutUsConfig
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerPadding: '60px',
    responsive: [{
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    ]
  }
  return (
    <div data-aos="fade-up" className={cn(styles.aboutPartner, className)}>
      <div className="container">
        <Slider {...settings}>
          {partner?.map((it, index) => {
            return (
              <div key={index}>
          <figure>
            <Image
              data={it.responsiveImage}
              alt=""
            />
          </figure>
        </div>
            )
          })}
      </Slider>
      </div>
    </div>
  )
}

export default AboutPartner
