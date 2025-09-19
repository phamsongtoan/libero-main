import React from 'react'
import { request } from '../../libs/dato'
import HeaderInner from '../../Components/HeaderInner'
import PageProject from '../../Components/PageProject'
import { renderMetaTags } from 'react-datocms'
import Head from 'next/head'
import FooterPage from '../../Components/FooterPage'
import HeaderStore from '../../Components/HeaderStore'

export const PROJECTS_QUERY = `query ProjectsQueryBase {
  allCategories(orderBy: order_ASC) {
    id
    name
    description
  }

  allServices {
    id
    name
    description
  },
  site: _site {
    favicon: faviconMetaTags {
      attributes
      content
      tag
    }
  }
}`

const ALL_PROJECT_QUERY = `query ProjectsQuery {
  allProjects{
    id
    name
    slug
    thumbnailSize
    thumbnail {
      url
      responsiveImage(imgixParams: {fit: crop, w: 2400, h: 2000, auto: format}) {
        sizes
        src
        width
        height
        alt
        title
        base64
      }
    }
    service {
      id
      name
    }
    projectType {
      id
      name
    }
  }
}
`
export const getServerSideProps = async ({ params }) => {
  const { slug } = params || {}
  const data = await request({
    query: PROJECTS_QUERY,
    variables: {
      search: slug
    }
  })

  const { allProjects } = await request({
    query: ALL_PROJECT_QUERY
  })

  return {
    props: { ...data, allProjects }
  }
}

const Project = (props) => {
  const { category, site } = props
  // const [widthResize, setWidthResize] = useState(window.innerWidth)
  // useEffect(() => {
  //   window && window.addEventListener('resize', handleResize)
  //   return () => {
  //     window.removeEventListener('resize', handleResize)
  //   }
  // }, [])

  // const handleResize = () => {
  //   setWidthResize(window.innerWidth)
  // }

  return (
    <>
      <Head>
        {category
          ? renderMetaTags(category?.seo.concat(site.favicon))
          : (
          <title>Projects</title>
            )}
      </Head>
      <HeaderStore className={'header-store'}/>
      <div className="header-inner">
        <HeaderInner />
      </div>
      <div className='pb-5 mb-5'>
      <PageProject {...props} />
      </div>
      <FooterPage {...props}/>
    </>

  )
}

export default Project
