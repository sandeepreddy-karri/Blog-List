// Write your JS code here

import BlogItem from '../BlogItem'

import './index.css'

const BlogList = props => {
  const {blogsList} = props

  return (
    <div className="blog-list-container">
      {blogsList.map(item => (
        <BlogItem key={item.id} blog={item} />
      ))}
    </div>
  )
}

export default BlogList
