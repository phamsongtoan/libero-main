import React, { useState } from 'react'
import cn from 'classnames'
import styles from './styles.module.scss'
import Burger from '../ComponentsInner/Burger'
import Image from 'next/image'
import MenuFixed from '../ComponentsInner/MenuFixed'
import Link from 'next/link'

const HeaderStore = ({ hideNav, className }) => {
  const [showMenu, setShowMenu] = useState(false)
  const handleShowMenu = () => {
    setShowMenu(!showMenu)
  }

  if (hideNav) {
    return null
  }

  return (
    <div data-aos="fade-down" className={cn(styles.headerStore, 'py-4', className)}>
      <Burger className={'header-burger'} isCheck={showMenu} handleCheck={handleShowMenu} />
      <div className={cn('header-logo')}>
        <Link href="/">
          <figure>
            <Image src={require('../../assets/LIBEROSTUDIOLOGO.png')} />
          </figure>
        </Link>
      </div>
      <MenuFixed handleClose={handleShowMenu} className={cn('header-submenu', showMenu && 'header-submenu--show')}/>
    </div>
  )
}

export default HeaderStore
