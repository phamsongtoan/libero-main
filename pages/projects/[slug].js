import React from 'react'
import { request } from '../../libs/dato'
import HeaderInner from '../../Components/HeaderInner'
import PageProject from '../../Components/PageProject'
import { renderMetaTags } from 'react-datocms'
import Head from 'next/head'

export const PROJECTS_QUERY = `query ProjectsQuery($search: String) {
  category(filter: {slug: {eq: $search}}) {
    id
    name
    description
    slug
    seo: _seoMetaTags {
      attributes
      content
      tag
    }
  }

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

const ALL_PROJECT_QUERY = `query ProjectByCatId($search: [ItemId]) {
  allProjects(filter: {projectType: {anyIn: $search}}) {
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
  const { slug } = params
  const data = await request({
    query: PROJECTS_QUERY,
    variables: {
      search: slug
    }
  })

  const { allProjects } = await request({
    query: ALL_PROJECT_QUERY,
    variables: {
      search: [data.category?.id.toString()]
    }
  })

  if (!data.category) {
    return {
      redirect: {
        destination: '/_404',
        permanent: false
      }
    }
  }

  return {
    props: { ...data, allProjects }
  }
}

const Project = (props) => {
  const { category, site } = props

  return (
    <>
      <Head>
        {renderMetaTags(category?.seo.concat(site.favicon))}
      </Head>
      <HeaderInner />
      <PageProject {...props} />
    </>

  )
}

export default Project
