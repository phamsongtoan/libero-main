import React from 'react'
import BannerHome from './BannerHome'
import NavBar from './Navbar'
import cn from 'classnames'
import LayoutPage from '../LayoutPage'
import styles from './styles.module.scss'

const HomeScreen = ({ allCategories, allProjects, _site, contactSetting }) => {
  return (
    <LayoutPage title={_site.globalSeo?.siteName} contactSetting={contactSetting}>
      <div className={cn(styles.homePageScreen)}>
         <BannerHome className={'mb-3'} />
        <NavBar categories={allCategories} projects={allProjects} />
    </div>
    </LayoutPage>
  )
}

export default HomeScreen
