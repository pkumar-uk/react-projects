import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
function App() {
  const [markdown, setMarkdown] = useState('# markdown preview')
  return (
    <main>
      <section className='markdown'>
        <textarea className='input' value={markdown} onChange={(e)=> setMarkdown(e.target.value)}></textarea>
     
      <article className='result'>
      <ReactMarkdown remarkPlugins={[remarkGfm]} >{ markdown }</ReactMarkdown>
      </article>
      </section>
    
    </main>
  )
}

export default App
