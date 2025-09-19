import React from 'react'
import Head from 'next/head'
import { renderMetaTags } from 'react-datocms'
import { request } from '../../../../libs/dato'
import PageBlog from '../../../../Components/PageBlog'

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

const ALL_PROJECT_QUERY = `query ProjectsQuery ($first: IntType, $skip: IntType, $catId: ItemId){
  allBlogPosts(first: $first, skip: $skip, orderBy: _createdAt_DESC, filter: {category: {eq: $catId}}) {
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
    
  _allBlogPostsMeta(filter: {category: {eq: $catId}}){
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

  const catId = data.allBlogCategories.find((cat) => cat.slug === slug)?.id

  const { allBlogPosts, _allBlogPostsMeta } = await request({
    query: ALL_PROJECT_QUERY,
    variables: {
      first: 5,
      skip: page ? (page - 1) * 5 : 0,
      catId
    }
  })

  return {
    props: { ...data, allBlogPosts, total: _allBlogPostsMeta.count, slug, page }
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
