import React from 'react'
import cn from 'classnames'
import styles from './styles.module.scss'
import Link from 'next/link'
import ImgHover from '../../../ComponentsInner/ImgHover'

const QuickPost = ({ data, project, type, className }) => {
  // if (!data) return null

  return (
    <Link href={'/blog/123'} className={cn(styles.quickPost, className, ' pb-3')}>
       <ImgHover className={'thumb-post'}/>
      <div className='title-blog'>
        <h3 className='fw-bold'>
          ART
        </h3>
        <span>
        November 6, 2017
        </span>
      </div>
    </Link>
  )
}

export default QuickPost
