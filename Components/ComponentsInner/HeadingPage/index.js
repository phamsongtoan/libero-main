import React from 'react'
import cn from 'classnames'
import styles from './styles.module.scss'

const HeadingPage = ({ heading = 'gallery', allCategories, tabActive, setTabActive }) => {
  const checkCate = typeof allCategories === 'undefined'
  const changeTab = (item) => () => {
    setTabActive(item)
  }
  return (
    <div className={cn(styles.headingPage)} data-aos="fade-up" data-aos-delay="300" >
      <div className='container'>
        <div className='d-flex justify-content-between align-items-center flex-column flex-md-row'>
          <h2 data-aos="fade-right" data-aos-delay="1000" className='text-uppercase fw-bold text-48'>{heading}</h2>
          <div className='list-project' data-aos="fade-left" data-aos-delay="1000">
            <ul>
              {!checkCate && (
                <li onClick={changeTab('all')} className={cn({ 'li-active': tabActive === 'all' })}>
                  <span>All</span>
                </li>
              )}
              {allCategories?.map((item, index) => {
                return (
                  <li
                    onClick={changeTab(item)}
                    key={item.id}
                    className={cn({ 'li-active': tabActive.id === item.id })}
                  >
                    <span>{item.name}</span>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeadingPage
