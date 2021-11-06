import React,{useState} from 'react'
import { useGlobalContext } from './context'

const SetupForm = () => {
  const { amount, setAmount, category, setCategory, difficulty, setDifficulty, fetchQuestions } = useGlobalContext();
  return (
    <section className='quiz quiz-small'>
      <form className='setup-form' onSubmit={(e)=> e.preventDefault()}>
        <h2>Setup Quiz</h2>
        <div className='form-control'>
          <label htmlFor='amount'>Number of Questions</label>
          <input type="number" name='amount' id='amount' className='form-input' min='1' max='50' value={amount} onChange={ (e)=> setAmount( e.target.value) }/>
        </div>
        <div className='form-control'>
          <label htmlFor='category'>category</label>
          <select name="category" id="category" className='form-input' value={category} onChange={(e)=> setCategory( e.target.value) }>
            <option value="sports">Sports</option>
            <option value="history">History</option>
            <option value="politics">Politics</option>
            <option value="vehicles">Vehicles</option>
          </select>
        </div>
        <div className='form-control'>
          <label htmlFor='difficulty'>select difficulty</label>
          <select name="difficulty" id="difficulty" className='form-input' value={difficulty} onChange={(e)=> setDifficulty( e.target.value)}>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
             
          </select>
        </div>
        <button  className='submit-btn' onClick={()=> fetchQuestions()}>start</button>
      </form>
    </section>
  )
}

export default SetupForm
