import React from 'react'
import cn from 'classnames'
import styles from './styles.module.scss'
import LayoutPage from '../LayoutPage'
import SideBar from './SideBar'
import BlogContent from './BlogContent'

const PageBlog = ({ isDetail, props }) => {
  return (
    <LayoutPage {...props} title="About Us">
      <div className={cn(styles.pageBlog)}>
        {!isDetail &&
        <div className="blog-banner text-center" data-aos="fade-down">
          <h2 className="text-uppercase fw-bold text-100 mb-4">Blog</h2>
        </div>
        }
        <div className="py-5 my-5">
          <div className="container ">
            <div className="row gx-5">
              <div className="col-md-3">
                <SideBar isDetail={isDetail}/>
              </div>
              <div className="col-md-9">
                <BlogContent isDetail={isDetail}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutPage>
  )
}

export default PageBlog
