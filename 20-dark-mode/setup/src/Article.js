import React from 'react'
import moment from 'moment'
const Article = ({id,title,date,length,snippet}) => {
  return (
    <article className='post'>
      <h2>{title}</h2>
      <div className='post-info'>
        <span>{`${moment(date).format('YYYY-MM-DD')}`}</span>
        <span>{length} minread</span>
      </div>
      <p>{snippet}</p>
    </article>
  )
}

export default Article
