import React from 'react'
import cn from 'classnames'
import styles from './styles.module.scss'
import HeaderStore from '../HeaderStore'
import FooterPage from '../FooterPage'
import Head from 'next/head'

const LayoutPage = ({ children, title, hideNav, isNoFooter, contactSetting }) => {
  return (
    <>
    <Head>
      <title>{title}</title>
    </Head>
    <div className={cn(styles.layoutPage)}>
        <HeaderStore hideNav={hideNav} />
        {children}
        {
          isNoFooter ? '' : <FooterPage contactSetting={contactSetting}/>
        }
    </div>
    </>
  )
}

export default LayoutPage
