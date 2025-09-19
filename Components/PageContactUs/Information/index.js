import React from 'react'
import cn from 'classnames'
import style from './styles.module.scss'
import {
  AiOutlineClockCircle,
  AiOutlineEnvironment,
  AiOutlinePhone
} from 'react-icons/ai'

const Information = ({ workingTime = 'Mon - Sat 8 AM - 8 PM', phoneNumber = 'Call us on +651 464 033 04', address = '531 West Avenue, NY', className }) => {
  return (
    <div className={cn(style.informationComponent, className)}>
      <ul className="ps-0 mb-0">
        {phoneNumber &&
        <li className="d-flex align-items-center gap-3">
          <span className="text-20">
            <AiOutlinePhone />
          </span>
          <a href={`tel:${phoneNumber}`} className="fst-italic">
            Call us on {phoneNumber}
          </a>
        </li>
        }
        {workingTime &&
        <li className="d-flex align-items-center gap-3">
          <span className="text-20">
            <AiOutlineClockCircle />
          </span>
          <span className="fst-italic">{workingTime}</span>
        </li>
        }
        {address &&
        <li className="d-flex align-items-center gap-3">
          <span className="text-20">
            <AiOutlineEnvironment />
          </span>
          <span className="fst-italic">{address}</span>
        </li>
        }
      </ul>
    </div>
  )
}

export default Information
