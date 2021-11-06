import React from 'react'
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './Home'
import Movie from './SingleMovie'

function App() {
  return (
    <Router>
       
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/movies/:id'>
          <Movie/>
        </Route>
        <Route path='*'>
          
        </Route>
      </Switch>
      
    </Router>
  )
}

export default App
