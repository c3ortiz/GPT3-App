import React from 'react'
import { Article } from '../../components'
import { blog01, blog02, blog03, blog04, blog05 } from './imports'
import './blog.css'

const subarticlesInfo = [
  {
    imgUrl: blog02,
    date: 'Oct 21, 2022',
    title: 'This is article number 2'
  },
  {
    imgUrl: blog03,
    date: 'Oct 26, 2022',
    title: 'This is article number 3'
  },
  {
    imgUrl: blog04,
    date: 'Oct 29, 2022',
    title: 'This is article number 4'
  },
  {
    imgUrl: blog05,
    date: 'Oct 31, 2022',
    title: 'This is article number 5'
  }
]

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>A lot is happening, we are blogging about it.</h1>
      </div>  
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_groupA'>
          <Article imgUrl={blog01} date='Oct 3, 2022' title='This is article number 1' />
        </div>
        <div className='gpt3__blog-container_groupB'>
          {subarticlesInfo.map((item, index) => (
            <Article imgUrl={item.imgUrl} date={item.date} title={item.title} key={item.title + index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blog