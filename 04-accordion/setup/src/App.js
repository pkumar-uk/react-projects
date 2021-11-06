import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <section>
      <div className="container">
        <h3>questions and answers about login</h3>
        {questions.map((question) => <SingleQuestion key={question.id} {...question} />)}
      </div>
    </section>
  )
  
  
  ;
}

export default App;
