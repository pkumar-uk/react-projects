import React, { useState } from 'react';
import data from './data';
function App() {
  const [amount, setAmount] = useState(0);
  const [text, setText] = useState([]);
  const filter = (e) => {
    e.preventDefault();
    let cnt = amount > data.length ? data.length : amount;
    console.log(cnt);
    let newtext = [];
    for (let i = 0; i < cnt; i++) {
      newtext.push(data[i]);
    }
    setText(newtext)
  }
  return (
    <section className='section-center' >
      
      <h3 >TIRED OF BORING LOREM IPSUM?</h3>
      <form className="lorem-form">
        <label for='amount'>paragraphs:</label>
        <input type='number' name='amount' id="amount" value={amount} onChange={ (e)=> setAmount(e.target.value)}/>
        <button className='btn' onClick={filter}>generate</button>
      </form>
      <article className='lorem-text'>
        {text.map((a,index)=><p key={index}>{a}</p>)}
      </article>

    </section>
    )
}

export default App;
