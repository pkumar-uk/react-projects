import React from 'react'
import { useGlobalContext } from './context'

import SetupForm from './SetupForm'
import Loading from './Loading'
import Modal from './Modal'
function App() {
  const { waiting,loading } = useGlobalContext();
  if (waiting) {
    return (
      <SetupForm />
    )
  } else {
    return (
      loading ?  <Loading/> : <Modal /> 
     )
  }
}

export default App
