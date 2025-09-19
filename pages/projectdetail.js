import React from 'react'
import HeaderInner from '../Components/HeaderInner'
import PageProjectDetail from '../Components/PageProjectDetail'

const Projectdetail = (props) => {
  return (
    <>
     <HeaderInner/>
     <PageProjectDetail {...props}/>
    </>
  )
}

export default Projectdetail
