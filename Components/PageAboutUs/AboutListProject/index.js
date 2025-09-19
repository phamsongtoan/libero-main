import React from 'react'
import cn from 'classnames'
import styles from './styles.module.scss'
import PostItem from '../../PageBlog/BlogContent/PostItem'

const dataFake = [
  {
    title: 'SPACE AND PLANS',
    by: 'by adminLifestyleNovember 13, 2017',
    des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sollicitudin, tellus vitae condimentum egestas, libero dolor auctor tellus, eu consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sollicitudin, tellus vitae condimentum egestas, libero dolor auctor tellus, eu consectetur ',
    image: require('../../../assets/projects/banan.jpeg')
  },
  {
    title: 'SPACE AND PLANS',
    by: 'by adminLifestyleNovember 13, 2017',
    des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sollicitudin, tellus vitae condimentum egestas, libero dolor auctor tellus, eu consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sollicitudin, tellus vitae condimentum egestas, libero dolor auctor tellus, eu consectetur ',
    image: require('../../../assets/projects/banan.jpeg')
  },
  {
    title: 'SPACE AND PLANS',
    by: 'by adminLifestyleNovember 13, 2017',
    des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sollicitudin, tellus vitae condimentum egestas, libero dolor auctor tellus, eu consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sollicitudin, tellus vitae condimentum egestas, libero dolor auctor tellus, eu consectetur ',
    image: require('../../../assets/projects/banan.jpeg')
  }
]

const AboutListProject = ({ aboutUsConfig }) => {
  return (
    <div className={cn(styles.aboutListProject)}>
      <div className='mb-5 pb-4'>
        <div className='row'>
          <div className='col-md-6'>
            <h3 data-aos="fade-right" className='text-uppercase text-40 fw-bold text-center' dangerouslySetInnerHTML={{ __html: aboutUsConfig?.section2Title.replaceAll('\n', '<br/>') }}/>
          </div>
          <div data-aos="fade-left" className='col-md-6' dangerouslySetInnerHTML={{ __html: aboutUsConfig?.section2Description.replaceAll('\n', '<br/>') }}/>
        </div>
      </div>
      <div data-aos="fade-up">
        <div className='row gx-4'>
          {dataFake.map((it, index) => {
            return (
              <div className='col-md-4' key={index}>
                <PostItem data={it}/>
            </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default AboutListProject
