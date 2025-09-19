import HomeScreen from '../Components/HomeScreen'
import { request } from '../libs/dato'

export const HOMEPAGE_QUERY = `query HomePage {
  allCategories(orderBy: order_ASC) {
    id
    name
    description
  }
  allProjects {
    id
    name
    slug
    thumbnailSize
    thumbnail {
      url
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
    service {
      id
      name
    }
    projectType {
      id
      name
    }
  }
  allServices {
    id
    name
    description
  },
  _site {
    globalSeo {
      siteName
    }
  }
}`

export const getStaticProps = async () => {
  const data = await request({
    query: HOMEPAGE_QUERY
  })

  return {
    props: data,
    revalidate: 1
  }
}

export default function Home (props) {
  return (
   <HomeScreen {...props}/>
  )
}
