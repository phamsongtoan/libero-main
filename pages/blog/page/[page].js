import React from 'react'
import Head from 'next/head'
import { renderMetaTags } from 'react-datocms'
import PageBlog from '../../../Components/PageBlog'
import { request } from '../../../libs/dato'

export const PROJECTS_QUERY = `query BlogsQueryBase {
  allBlogCategories {
    id
    title
    description
    slug
  }
  site: _site {
    favicon: faviconMetaTags {
      attributes
      content
      tag
    }
  }
}`

const ALL_PROJECT_QUERY = `query ProjectsQuery ($first: IntType, $skip: IntType){
  allBlogPosts(first: $first, skip: $skip, orderBy: _createdAt_DESC) {
    id
    slug
    title
    updatedAt
    createdAt
    featureImage {
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
    content
    category {
      title
      id
      slug
    }
  }
    
  _allBlogPostsMeta{
    count
  }
}
`

export const getServerSideProps = async ({ params }) => {
  const { slug, page = 1 } = params || {}
  const data = await request({
    query: PROJECTS_QUERY,
    variables: {
      search: slug
    }
  })

  const { allBlogPosts, _allBlogPostsMeta } = await request({
    query: ALL_PROJECT_QUERY,
    variables: {
      first: 5,
      skip: page ? (page - 1) * 5 : 0
    }
  })

  return {
    props: { ...data, allBlogPosts, total: _allBlogPostsMeta.count, page }
  }
}

const Blog = (props) => {
  const { category, site } = props

  return (
    <>
      <Head>
        {category
          ? renderMetaTags(category?.seo.concat(site.favicon))
          : (
            <title>Blog</title>
            )}
      </Head>
      <PageBlog props={props}/>
    </>

  )
}

export default Blog
