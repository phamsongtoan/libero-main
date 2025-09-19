import React from 'react'
import cn from 'classnames'
import styles from './styles.module.scss'
import Link from 'next/link'
import QuickPost from './QuickPost'

const SideBar = ({ isDetail }) => {
  return (
    <div className={cn(styles.sideBar)}>
      <h3 className="text-uppercase fw-bold">Categories</h3>
      <ul className="mt-4 categories">
        <li>
          <Link href={''}>Housing</Link>
        </li>
        <li>
          <Link href={''}>Lifestyle</Link>
        </li>
      </ul>
      {isDetail &&
      <div className="mt-5">
        <h3 className="text-uppercase fw-bold">Popular Posts</h3>
        <ul className="mt-4 quick-post">
          <li>
            <QuickPost />
          </li>
          <li>
            <QuickPost />
          </li>
        </ul>
      </div>
      }
    </div>
  )
}

export default SideBar
