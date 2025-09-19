import React, { useMemo, useState } from 'react'
import cn from 'classnames'
import styles from './styles.module.scss'
import Link from 'next/link'
import ImgHover from '../ComponentsInner/ImgHover'
import HeadingPage from '../ComponentsInner/HeadingPage'

const PageProject = (props) => {
  const { category, allProjects, allCategories } = props
  const [tabActive, setTabActive] = useState('all')

  if (typeof window !== 'undefined') {
    console.log('🐳 -> Project -> props', props)
  }

  const renderList = useMemo(() => {
    if (tabActive === 'all') {
      return allProjects.slice(0, 20)
    }

    return allProjects.filter((it) =>
      it.projectType.find((cat) => cat.id === tabActive.id)
    )
  }, [tabActive, allProjects])

  return (
    <div className={cn(styles.pageProject)}>
      <HeadingPage
        tabActive={tabActive}
        setTabActive={setTabActive}
        heading={category?.name || 'Projects'}
        allCategories={allCategories}
      />
      <div className='project-content' data-aos="fade-up" data-aos-delay="1000">
        <div className='container'>
          <div className='project-content__wrapper'>
            <div className='row g-5'>
              {renderList.map((prj) => {
                return (
                  <div className='col-md-3' key={prj.id}>
                    <div className='content-item'>
                      <Link href={`/project/${prj.slug}`}>
                        <ImgHover data={prj.thumbnail.responsiveImage} />
                      </Link>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageProject
