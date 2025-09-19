import React from 'react'
import cn from 'classnames'
import styles from './styles.module.scss'
import ImgHover from '../../../ComponentsInner/ImgHover'
import Link from 'next/link'

const PostItem = ({ data, project, type, className, isDetailPage }) => {
  return (
    <div className={cn(styles.postItem, className)}>
       <Link href={'blog/213'} >
      <ImgHover className={'size-img'} /></Link>
      <div className="mt-4">
         <Link href={'blog/213'} >
          <h2 className='fw-bold'>New Design</h2>
        </Link>
        <span className="sub">by admin | November 6, 2017 | Commmercial</span>
        {!isDetailPage &&
        <p className="mt-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
          nesciunt fuga laborum voluptates at iusto similique qui vero est
          deleniti maxime illum minus asperiores vitae provident aspernatur
          magni, temporibus accusamus.
        </p>}
      </div>
      {!isDetailPage &&
      <button className="mt-2">
        <Link href={'blog/213'} >
          <span>
            Read More
          </span>
        </Link>
      </button>
      }
    </div>
  )
}

export default PostItem
