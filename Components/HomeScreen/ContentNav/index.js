import React from 'react'
import cn from 'classnames'
import styles from './styles.module.scss'
import Link from 'next/link'
import ImgHover from '../../ComponentsInner/ImgHover'

const ContentNav = ({ projects }) => {
  return (
    <div className={cn(styles.contentNav)} data-aos="fade-up" data-aos-delay="1300" >
      <div className="content-wrapper">
        {projects.map((proj) => (
          <div
            key={proj.id}
            className={cn('content-item', {
              'content-item--large': proj.thumbnailSize === 'large',
              'content-item--long': proj.thumbnailSize === 'long'
            })}
          >
            <Link href={`/project/${proj.slug}`}>
                <ImgHover data={proj.thumbnail.responsiveImage}/>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ContentNav
