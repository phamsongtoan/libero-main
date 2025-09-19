import React from 'react'
import cn from 'classnames'

import styles from './styles.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import Information from '../../PageContactUs/Information'
import { AiOutlineClose } from 'react-icons/ai'

const MenuFixedInfo = ({ className, handleClose }) => {
  return (
    <div className={cn(styles.menuFixedInfo, className)}>
      <div className="bg-cover" onClick={handleClose}>
      </div>
      <div className='menufix-container'>
        <div className='icon-close' >
          <AiOutlineClose onClick={handleClose} />
        </div>
        <figure>
          <Link href='/'>
            <figure>
              <Image src={require('../../../assets/LIBEROSTUDIOLOGO.png')} />
            </figure>
          </Link>
        </figure>
        <div className='menu-description'>
          <p
            className='text-center'
            dangerouslySetInnerHTML={{
              __html:
                'This is Aalto. A Professional theme for </br> architects, construction and interior designers'
            }}
          ></p>
        </div>
        <Information className='list-info mb-4' />
        <span className='text-center w-full d-block'>
          © 2017 Qode Interactive, All Rights Reserved
        </span>
      </div>
    </div>
  )
}

export default MenuFixedInfo
