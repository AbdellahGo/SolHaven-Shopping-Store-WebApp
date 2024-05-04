import React, { useEffect } from 'react'
import { BreadCrumb, CompareTable } from '../components'

const CompareProducts = () => {
  useEffect(() => {
    window.scroll({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div>
      <BreadCrumb small />
      <CompareTable/>
    </div>
  )
}

export default CompareProducts