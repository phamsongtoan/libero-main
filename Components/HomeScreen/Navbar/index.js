import React, { useMemo, useState } from 'react'
import cn from 'classnames'
import styles from './styles.module.scss'
import ContentNav from '../ContentNav'

const NavBar = ({ categories, projects }) => {
  const [tabActive, setTabActive] = useState('all')

  const changeTab = (item) => () => {
    setTabActive(item)
  }

  const renderList = useMemo(() => {
    if (tabActive === 'all') {
      return projects.slice(0, 20)
    }

    return projects.filter(it => it.projectType.find(cat => cat.id === tabActive.id))
  }, [tabActive, projects])

  return (
    <div id='projects' className={cn(styles.navBar, 'py-4 container')} >
      <ul className='mb-5' data-aos="fade-up" data-aos-delay="800" >
            <li onClick={changeTab('all')} className={cn({
              'li-active': tabActive === 'all'
            })}>
              <span className="text-16">All</span>
            </li>
        {categories.map((it) => {
          return (
            <li onClick={changeTab(it)} key={it.id} className={cn({
              'li-active': tabActive.id === it.id
            })}>
              <span className="text-16">{it.name}</span>
            </li>
          )
        })}
      </ul>
      <ContentNav projects={renderList}/>
    </div>
  )
}

export default NavBar
