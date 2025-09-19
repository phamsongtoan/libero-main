import React from 'react'
import cn from 'classnames'
import styles from './styles.module.scss'
import Link from 'next/link'
import ImgHover from '../../ComponentsInner/ImgHover'

const RelativeItem = ({ data, project, type, className }) => {
  if (!data) return null

  return (
    <div className={cn(styles.relativeItem, className, 'text-center pb-3')}>
      <Link href={`/project/${data.slug}`}>
        <figure>
          <ImgHover data={data.thumbnail.responsiveImage}/>
        </figure>
        <h4 className="text-20 fw-bold text-uppercase mt-4">{project}</h4>
        <span className="fst-italic text-secondpage">{type}</span>
      </Link>
    </div>
  )
}

export default RelativeItem
