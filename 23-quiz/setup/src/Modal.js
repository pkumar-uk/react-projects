import React,{useState} from 'react'
import { useGlobalContext } from './context'
import _ from 'lodash';

const Modal = () => {
  const { correct, counter, setCounter, setCorrect, questions,setWaiting } = useGlobalContext();
  const [finish, setFinish] = useState(false)
  const { correct_answer, incorrect_answers, question } = questions[counter];
  let newAnsSet = [];
  incorrect_answers.map((a) => newAnsSet.push({ans:a,type:false}))
  newAnsSet = [...newAnsSet, { ans: correct_answer, type: true }];
  newAnsSet = _.shuffle(newAnsSet)
  const incCounter = () => {
  counter === questions.length -1 ? setFinish(true): setCounter(counter + 1)
  }
  const chkAns = (a) => {
    if (a) { setCorrect(correct + 1) }
    counter === questions.length -1 ? setFinish(true): setCounter(counter + 1)
  }
  if (finish) {
    let per = ((correct/(counter+1)) * 100).toFixed(0)
    return (
      <div className='modal-container isOpen'>
        <div className='modal-content'>
          <h2>Final Score</h2>
          <p>You answered { per}% of answers correctly</p>
          <button className='close-btn' onClick={()=>setWaiting(true)}>Play Again</button>
        </div>
        </div>
    )
  } else {
    return (
      
        
        <section className='quiz'>
          <p className='correct-answers'>Correct Answers: {correct} / {counter}</p>
          <article className='container'>
          <h2 dangerouslySetInnerHTML={{ __html: question }} />
            <div className='btn-container'>
              {newAnsSet.map((a, index) => <button key={index} className='answer-btn' onClick={() => chkAns(a.type)}>{a.ans}</button>)}
            </div>
          </article>
          <button className='next-question' onClick={() => incCounter(counter)}>next question</button>
      </section>
    )
      
  }
}

export default Modal
