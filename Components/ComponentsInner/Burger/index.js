import React from 'react'
import cn from 'classnames'
import styles from './styles.module.scss'

const Burger = ({ className, handleCheck, isCheck }) => {
  return (
    <div className={cn(styles.burgerComponent, className)} onClick={handleCheck}>
            <div className={cn('hamburger-lines', isCheck && 'hamburger-lines--active')}>
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div>
    </div>
  )
}
export default Burger
