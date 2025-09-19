import React from 'react'
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

const POST_QUERY = `query BlogPostQuery($slug: String) {
  blogPost(filter: {slug: {eq: $slug}}) {
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
}
`

const QUERY_RELATIVE = `query RelativeQuery($catId: ItemId){
  allBlogPosts(first: 5, orderBy: _createdAt_DESC, filter: {category: {eq: $catId}}) {
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
}`

export const getServerSideProps = async ({ params }) => {
  const { slug } = params || {}
  const data = await request({
    query: PROJECTS_QUERY
  })

  const { blogPost } = await request({
    query: POST_QUERY,
    variables: {
      first: 5,
      skip: 0,
      slug
    }
  })

  const { allBlogPosts: relativePosts } = await request({
    query: QUERY_RELATIVE,
    variables: {
      catId: blogPost?.category?.id
    }
  })

  return {
    props: { ...data, blogPost, relativePosts }
  }
}

const Blog = (props) => {
  return (
    <PageBlog isDetail props={props}/>
  )
}

export default Blog
