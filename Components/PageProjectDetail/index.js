import React from 'react'
import cn from 'classnames'
import { Image } from 'react-datocms'
import styles from './styles.module.scss'
import RelativeItem from './RelativeItem'
import LayoutPage from '../LayoutPage'
import dayjs from 'dayjs'
import HeadingPage from '../ComponentsInner/HeadingPage'
// import ReactImageGallery from 'react-image-gallery'
// import Lightbox from 'react-image-lightbox'
const localizedFormat = require('dayjs/plugin/localizedFormat')
dayjs.extend(localizedFormat)

const HEADING = 'PRIVATE RESIDENCE'

// const desAuthor = [
//   {
//     label: 'ARCHITECT',
//     des: 'Sophia Thomas'
//   },
//   {
//     label: 'CATEGORY',
//     des: 'City'
//   },
//   {
//     label: 'DATE',
//     des: 'November 21, 2017'
//   },
//   {
//     label: 'TAGS',
//     des: 'Homestyle Urban'
//   }
// ]
// const dataRelative = [
//   {
//     images: '../../../assets/projects/banan.jpeg',
//     project: 'modern',
//     type: 'Villas'
//   },
//   {
//     images: '../../../assets/projects/banan.jpeg',
//     project: 'modern',
//     type: 'Villas'
//   },
//   {
//     images: '../../../assets/projects/banan.jpeg',
//     project: 'modern',
//     type: 'Villas'
//   }
// ]

// const images = [
//   '//placekitten.com/1500/500',
//   '//placekitten.com/4000/3000',
//   '//placekitten.com/800/1200',
//   '//placekitten.com/1500/1500',
// ]

const PageProjectDetail = ({ data, relative, ...props }) => {
  const project = data?.project || {}
  const relativeProjects = relative?.allProjects || []
  // const [isOpen, setIsopen] = useState(false)
  // const [photoIndex, setPhotoIndex] = useState(0)

  return (
    <LayoutPage title={data?._site?.globalSeo?.siteName} hideNav {...props}>
      <div className={cn(styles.pageProjectDetail)}>
        <HeadingPage heading={project.name || HEADING} />
        <div className='detail-content mb-5 pb-5'>
          {/* <button type='button' onClick={() => setIsopen(!isOpen)}>
            Open Lightbox
          </button>
          {isOpen && (
            <Lightbox
              mainSrc={images[photoIndex]}
              nextSrc={images[(setPhotoIndex + 1) % images.length]}
              prevSrc={
                images[(setPhotoIndex + images.length - 1) % images.length]
              }
              onCloseRequest={() => setIsopen(false)}
              onMovePrevRequest={() =>
                setPhotoIndex((photoIndex + images.length - 1) % images.length)
              }
              onMoveNextRequest={() =>
                setPhotoIndex((photoIndex + 1) % images.length)
              }
            />
          )} */}
          <div className='container'>
            <div className='row gx-5' data-aos='fade-up' data-aos-delay='1000'>
              <div className='col-md-6 col-xl-8'>
                <div className='content-img'>
                  <figure>
                    {data?.project?.assets.map((asset) => (
                      <Image key={Math.random()} data={asset.responsiveImage} />
                    ))}
                  </figure>
                </div>
              </div>
              <div className='col-md-6 col-xl-4'>
                <div className='content-des'>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className='my-5 py-5'>
                    <span className='custom-divider'></span>
                  </div>
                  <div className='content-author'>
                    <ul>
                      {project.architect && (
                        <li>
                          <div className='d-flex align-items-center gap-3'>
                            <h5 className='text-uppercase text-16'>
                              Architect:
                            </h5>
                            <span className='fst-italic'>
                              {project.architect}
                            </span>
                          </div>
                        </li>
                      )}
                      <li>
                        <div className='d-flex align-items-center gap-3'>
                          <h5 className='text-uppercase text-16'>
                            Type of service:
                          </h5>
                          <span className='fst-italic'>
                            {project.service?.map((it) => it.name).join(', ')}
                          </span>
                        </div>
                      </li>
                      <li>
                        <div className='d-flex align-items-center gap-3'>
                          <h5 className='text-uppercase text-16'>
                            Categories:
                          </h5>
                          <span className='fst-italic'>
                            {project.projectType
                              ?.map((it) => it.name)
                              .join(', ')}
                          </span>
                        </div>
                      </li>
                      <li>
                        <div className='d-flex align-items-center gap-3'>
                          <h5 className='text-uppercase text-16'>Date:</h5>
                          <span className='fst-italic'>
                            {dayjs(project.date).format('LL')}
                          </span>
                        </div>
                      </li>
                      {/*
                      {desAuthor.map((it, index) => {
                        return (
                          <li key={index}>
                            <div className="d-flex align-items-center gap-3">
                              <h5 className="text-uppercase text-16">
                                {it.label}:
                              </h5>
                              <span className="fst-italic">{it.des}</span>
                            </div>
                          </li>
                        )
                      })} */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className='my-5 py-5'>
              <span className='custom-divider'></span>
            </div>
            <div className='detail-relative' data-aos='fade-up'>
              <h2 className='text-uppercase fw-bold text-48 text-center my-5 pb-5'>
                RELATED PROJECTS
              </h2>
              <div className='row'>
                {relativeProjects.slice(0, 3).map((item, index) => {
                  return (
                    <div className='col-md-4' key={index}>
                      <RelativeItem data={item} />
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutPage>
  )
}

export default PageProjectDetail
