import React, { useEffect, useState } from 'react'
import cn from 'classnames'
import styles from './styles.module.scss'
import Burger from '../ComponentsInner/Burger'
import Link from 'next/link'
import MenuFixedInfo from '../ComponentsInner/MenuFixedInfo'
import { useRouter } from 'next/router'
import Image from 'next/image'

const HeaderInner = ({ allCategories }) => {
  const router = useRouter()
  const [showMenu, setShowMenu] = useState(false)
  const [, setScroll] = useState(false)

  const handleShowMenu = () => {
    setShowMenu(!showMenu)
    setScroll(false)
  }
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 2)
      setShowMenu(false)
    })
  }, [])

  const dataNav = [
    {
      title: 'Home',
      link: '/'
    },
    {
      title: 'Projects',
      link: '/projects'
    },
    {
      title: 'Contact',
      link: '/contact'
    },
    {
      title: 'About Us',
      link: '/about'
    }
  ]
  return (
    <div className={cn(styles.headerInner, 'py-5')}>
      <div className='container'>
        <div className='header-wrapper'>
          <div data-aos="fade-right" className='header-logo'>
            <Link className='fw-bold' href='/'>
              <figure>
                <Image src={require('../../assets/LIBEROSTUDIOLOGO.png')} />
              </figure>
            </Link>
          </div>
          <div className='header-main' data-aos="fade-left">
            <ul>
              {dataNav.map((item, index) => {
                const checkActive = router.pathname === item.link
                return (
                  <li className={cn('px-2 mx-4', checkActive && 'li-active')} key={index}>
                    <Link href={item.link}>
                      <span>{item.title}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
            {/* <div onClick={handleShowMenu} className="header-burger"> */}
            <Burger isCheck={showMenu} handleCheck={handleShowMenu} />
            {/* </div> */}
          </div>
        </div>
      </div>
      <MenuFixedInfo
        handleClose={handleShowMenu}
        className={cn('menu-info', (showMenu) && 'menu-info--show')}
      />
    </div>
  )
}

export default HeaderInner
