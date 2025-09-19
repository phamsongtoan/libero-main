import React, { useRef } from 'react'
import cn from 'classnames'

import styles from './styles.module.scss'
import Link from 'next/link'
import Information from './Information'
import FormSubmit from '../ComponentsInner/FormSubmit'
import Slider from 'react-slick'
import { Image } from 'react-datocms'
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai'
import GMap from '../GMap/index'

const PageContactUs = (props) => {
  const { contactSetting } = props
  console.log(contactSetting, 'contactSetting')
  const isContact2 = contactSetting?.workingTimeTwo || contactSetting?.addressTwo || contactSetting?.phoneNumberTwo
  const isContact = contactSetting?.workingTime || contactSetting?.address || contactSetting?.phoneNumber

  const RenderInfo = () => {
    return <Information {...contactSetting} />
  }
  const RenderInfo2 = () => {
    return <Information workingTime={contactSetting?.workingTimeTwo} address={contactSetting?.addressTwo} phoneNumber={contactSetting?.phoneNumberTwo}/>
  }

  const slider = useRef(null)

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: '60px'
  }
  const buttonNext = () => {
    slider.current.slickNext()
  }
  const buttonPrevious = () => {
    slider.current.slickPrev()
  }
  return (
  // <LayoutPage {...props}>
      <div className={cn(styles.pageContactUs, 'text-16 pb-5 mb-5')}>
        <div
          className='data-map pb-5 mb-5'
          data-aos='flip-left'
          data-aos-duration='1000'
        >
          <GMap location={contactSetting.location} />
        </div>
        <div className='container' data-aos='fade-up'>
          <div className='contact-information' data-aos='fade-up'>
            <div className='row align-items-center d-flex g-5'>
              <div className='col-lg-5'>
                <div className='information-slider'>
                  <div className='position-relative'>
                    <div
                      className=' button-arrow button-arrow--left'
                      onClick={buttonNext}
                    >
                      {' '}
                      <AiOutlineLeft />{' '}
                    </div>
                    <Slider
                      className='slider-main'
                      ref={(c) => (slider.current = c)}
                      {...settings}
                    >
                      {contactSetting.gallery.map((it, index) => {
                        return (
                          <div key={index}>
                            <figure className='mb-0'>
                              <Image data={it.responsiveImage} alt='' />
                            </figure>
                          </div>
                        )
                      })}
                    </Slider>
                    <div
                      className=' button-arrow button-arrow--right'
                      onClick={buttonPrevious}
                    >
                      {' '}
                      <AiOutlineRight />{' '}
                    </div>
                  </div>
                </div>
              </div>
              {(isContact || isContact2) &&
                <div className='col-lg-7'>
                  <div className='infor-right'>
                    <h2 className='text-uppercase text-40 fw-bold mb-5 pb-4'>
                      WHERE TO FIND US <br />& HOW TO CONTACT US
                    </h2>
                    <div className='infor-right__detail'>
                      <div className='row g-5 g-md-0'>
                        {isContact &&
                        <div className='col-md-6'>
                          <div className='detail-inner'>
                            <h3 className='text-uppercase fw-bold mb-5'>
                              ADRESS ONE
                            </h3>
                            <div>
                              <RenderInfo />
                            </div>
                          </div>
                        </div>
                        }
                        {isContact2 &&
                        <div className='col-md-6'>
                          <div className='detail-inner'>
                            <h3 className='text-uppercase fw-bold mb-5'>
                              ADRESS TWO
                            </h3>
                            <div>
                              <RenderInfo2 />
                            </div>
                          </div>
                        </div>
                        }
                      </div>
                    </div>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
        <div className='contact-about py-5 my-5'>
          <div className='container'>
            <div className='contact-about__inner d-flex justify-content-between align-items-center'>
              <span className='text-uppercase'>
                {contactSetting?.callForActionText}
              </span>
              <button>
                <Link href='/about'>
                  <span>Read More</span>
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className='container'>
          <FormSubmit {...props} />
        </div>
      </div>
  // </LayoutPage>
  )
}

export default PageContactUs
