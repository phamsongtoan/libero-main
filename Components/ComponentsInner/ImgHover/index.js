import React from 'react'
import cn from 'classnames'
import styles from './styles.module.scss'
import Image from 'next/image'
import { Image as DatoImage } from 'react-datocms'

const ImgHover = ({ data, className }) => {
  return (
    <figure className={cn(styles.imgHover, className)}>
      {data ? <DatoImage data={data} /> : <Image src={require('../../../assets/projects/banan.jpeg')} />}
    </figure>
  )
}

export default ImgHover
