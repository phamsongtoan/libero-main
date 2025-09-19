import React from 'react'
import HeaderInner from '../../Components/HeaderInner'
import HeaderStore from '../../Components/HeaderStore'
import PageProjectDetail from '../../Components/PageProjectDetail'
import { request } from '../../libs/dato'

const PROJECT_QUERY = `query ProjectQuery($search: String) {
    project(filter: {slug: {eq: $search}}) {
      id
      name
      date
      description
      slug
      service {
        name
        id
      }
      projectType {
        name
        id
      }
      thumbnail {
        url,
        responsiveImage(imgixParams: { fit: crop, w: 2400, h: 2000, auto: format }) {
          sizes
          src
          width
          height
          alt
          title
          base64
        }
      }
      thumbnailSize
      updatedAt
      assets {
        url,
        responsiveImage(imgixParams: { fit: crop, w: 2400, h: 2000, auto: format }) {
          sizes
          src
          width
          height
          alt
          title
          base64
        }
      }
    },
    _site {
      globalSeo {
        siteName
      }
    }
  }`

const RELATIVE_QUERY = `query RelativeQuery($cat: [ItemId]) {
  allProjects(filter: {projectType: {anyIn: $cat}}, first: 3) {
    id
    name
    date
    description
    slug
    service {
      name
      id
    }
    projectType {
      name
      id
    }
    thumbnail {
      url,
      responsiveImage(imgixParams: { fit: crop, w: 2400, h: 2000, auto: format }) {
        sizes
        src
        width
        height
        alt
        title
        base64
      }
    }
    thumbnailSize
    updatedAt
    assets {
      url
    }
  }
  _site {
    globalSeo {
      siteName
    }
  }
}
`
export async function getStaticPaths () {
  return {
    paths: [],
    fallback: true // can also be true or 'blocking'
  }
}

export const getStaticProps = async ({ params }) => {
  const { id } = params

  const data = await request({
    query: PROJECT_QUERY,
    variables: {
      search: id
    }
  })

  if (!data) {
    return {
      redirect: {
        destination: '/_404',
        permanent: false
      }
    }
  }

  const relativeQuery = await request({
    query: RELATIVE_QUERY,
    variables: {
      cat: data.project.projectType.map(it => it.id)
    }
  })

  return {
    props: {
      data,
      relative: relativeQuery
    },
    revalidate: 60
  }
}

const ProjectDetail = (props) => {
  return (
    <>
      <HeaderStore className={'header-store'}/>
      <div className="header-inner">
        <HeaderInner />
      </div>
      <PageProjectDetail {...props} />
    </>
  )
}

export default ProjectDetail
