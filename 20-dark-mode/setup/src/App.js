import React, { useState, useEffect } from 'react'
import data from './data'
import Article from './Article'

function App() {
  const [art, setArt] = useState(data);
  const [theme, setTheme] = useState('light-theme');
  const toggleTheme = () => {
    if (theme === 'dark-theme') {
      setTheme('light-theme');
      localStorage.setItem('theme','light-theme')
    } else {
      setTheme('dark-theme');
      localStorage.setItem('theme','dark-theme')
    }
  }
  useEffect(() => {
    let newTheme = 'light-theme';
    if (localStorage.getItem('theme')) {
      newTheme = localStorage.getItem('theme')
    }
    document.documentElement.className = newTheme;
  },[theme])
  return (
    <main>
      <nav>
        <div className='nav-center'>
          <h1>Overreacted</h1>
          <button className='btn' onClick={()=>toggleTheme()}>Toggle</button>
        </div>
      </nav>
      <section className='articles'>
        {art.map((a) => <Article key={a.id} {...a} />)}
      </section>
    </main>
    
  )
}

export default App
