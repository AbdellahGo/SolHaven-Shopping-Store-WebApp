import React, { useEffect } from 'react'
import { Blogs, LatestBlogArea } from '../components'

const Blog = () => {

  useEffect(() => {
    window.scroll({ top: 0, behavior: 'smooth' })
  }, [])
  return (
    <div className='home'>
      <LatestBlogArea />
      <Blogs />
    </div>
  )
}

export default Blog