import React from 'react'

import { useGlobalContext } from './context'

const Stories = () => {
  const { stories, isLoading, pageno, pages, prevPage, nextPage, removeStory } = useGlobalContext();
  return (
    <>
      <div className='btn-container'>
        <button onClick={()=>prevPage()}>prev</button>
        <p> {pageno + 1} of {pages}</p>
        <button onClick={()=>nextPage()}>next</button>
      </div>
      <section className='stories'>
        {stories.map((a) =>
          <article key={ a.objectID } className='story'>
            <h4 className='title'>{a.title}</h4>
            <p className='info'>{a.points} points by <span>{a.author} | </span> {a.num_comments} comments</p>
            <div>
              <a href={a.url} className="read-link" target="_blank" rel="noopener noreferrer">read more</a>
              <button className='remove-btn' onClick={()=> removeStory(a.objectID)}>Remove</button>
            </div>
          </article>
        )}
      </section>
    </>
  )
}

export default Stories
