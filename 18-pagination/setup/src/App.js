import React, { useState, useEffect } from 'react'
import { useFetch } from './useFetch'
import Follower from './Follower'
function App() {
  const { loading, data } = useFetch();
  console.log(data);
  const [pageData,setPageData] = useState([])
  const [pageno, setPageno] = useState(0);
  const loadPage = (a) => {
    setPageData(data[a])
    setPageno(a)
     
  }
  useEffect(() => {
    if (loading) return;
    loadPage(0);
    
  },[loading])
  if (loading) {
    return (<main>
    <div className='section-title'>
      <h1>Loading.............</h1>
    </div></main>)
  }
  
  return (
    <main>
      <div className='section-title'>
        <h3>Pagination</h3>
        <div className='underline'></div>
      </div>
      <section className='followers'>
        <div className='container'>
          {pageData.map((b,index) => 
            <article className='card' key={index}>
              <img src={b.avatar_url} alt={b.login} />
              <h4>{b.login}</h4>
              <a href={b.url} className='btn'>view profile</a>
            </article>
          )}
        </div>
        <div className='btn-container'>
          <button className='prev-btn' onClick={()=> pageno === 0 ? loadPage(data.length -1):loadPage(pageno - 1) }>prev</button>
          {data.map((b, index) =>
            <button key={index} className={`${(pageno == index? 'page-btn active-btn': 'page-btn')}` } onClick={() => loadPage(index)}>{ index + 1 }</button>
          )}
          <button className='next-btn' onClick={()=> pageno === data.length -1 ? loadPage(0):loadPage(pageno + 1) }>next</button>
        </div>
      </section>
    </main>
  )
}

export default App
