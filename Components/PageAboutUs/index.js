import React from 'react'
import cn from 'classnames'
import styles from './styles.module.scss'
import LayoutPage from '../LayoutPage'
import AboutListProject from './AboutListProject'
import AboutHistory from './AboutHistory'
import { Image } from 'react-datocms'
import PageContactUs from '../PageContactUs'

const PageAboutUs = (props) => {
  const { aboutUsConfig } = props
  return (
    <LayoutPage {...props} title="About Us">
      <div className={cn(styles.pageAboutUs)} >
        <div className="about-banner text-center" data-aos="fade-down">
          <h2 className="text-uppercase fw-bold text-100 mb-4">{aboutUsConfig?.title}</h2>
          <span className="text-uppercase text-16">
          {aboutUsConfig?.subTitle}
          </span>
        </div>
        <div className="py-5 my-5">
          <div className="container">
            <div className="about-ourservices">
              <div className="row gx-5">
                <div className="col-md-3">
                  <figure data-aos="fade-right">
                    <Image data={aboutUsConfig?.sectionThumbnail.responsiveImage} />
                  </figure>
                </div>
                <div className="col-md-9">
                  <div className="ourservices-content">
                    <h3 data-aos="fade-right" className="text-uppercase text-40 fw-bold mb-5" dangerouslySetInnerHTML={{ __html: aboutUsConfig?.sectionTitle.replaceAll('\n', '<br/>') }}/>
                    <ul className="ourservices-nav">
                      {aboutUsConfig?.serviceBlocks.map((block, index) => {
                        return <li data-aos="fade-right" data-aos-delay={index * 400} key={JSON.stringify(block)}>
                          <b>{block?.serviceName}</b>
                        </li>
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-5 my-5">
          <div className="container">
            <AboutListProject aboutUsConfig={aboutUsConfig}/>
          </div>
        </div>
        <div className="py-5 my-5">
          <AboutHistory aboutUsConfig={aboutUsConfig}/>
        </div>
        {/* <div className="py-5 my-5">
          <div className="container">
          <FormSubmit contactSetting={contactSetting}/>
          </div>
        </div> */}
        {/* <div className="py-5 my-5">
          <AboutPartner aboutUsConfig={aboutUsConfig}/>
          </div> */}
          <div className="py-5 my-5" id="contact">
            <PageContactUs {...props}/>
          </div>
      </div>
    </LayoutPage>
  )
}

export default PageAboutUs
