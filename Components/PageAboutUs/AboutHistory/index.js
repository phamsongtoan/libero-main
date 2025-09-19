import React from 'react'
import cn from 'classnames'
import styles from './styles.module.scss'
import { Image } from 'react-datocms'
import { Accordion } from 'react-bootstrap'
import { AiOutlinePlus } from 'react-icons/ai'

const AboutHistory = ({ aboutUsConfig }) => {
  // const isCurrentEventKey = eventKey
  return (
    <div className={cn(styles.aboutHistory)}>
      <Accordion defaultActiveKey='0'>
        {aboutUsConfig?.accordion.map((item, index) => {
          return (
            <Accordion.Item eventKey={index} key={index}>
              <div className='container'>
                <Accordion.Header>
                  <span className='text-uppercase text-20 fw-bold'>
                    {item.title}
                  </span>
                  <div className='icon-plus'>
                  <AiOutlinePlus/>
                  </div>
                </Accordion.Header>
              </div>
              <Accordion.Body>
                <div className='container'>
                  <div className='accordion-content'>
                    <div className='row px-4'>
                      <div className='col-md-8'>
                        <div className='content-main'>
                          <div
                            className='content-quote text-28 fw-bold'
                            dangerouslySetInnerHTML={{
                              __html: item.mainLine
                            }}
                          ></div>
                          <p className='mt-4'>
                            {item.description}
                          </p>
                        </div>
                      </div>
                      <div className='col-md-4'>
                        <figure>
                          <Image
                            data={item.image.responsiveImage}
                            className='img-fluid'
                          />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          )
        })}
      </Accordion>
    </div>
  )
}

export default AboutHistory
