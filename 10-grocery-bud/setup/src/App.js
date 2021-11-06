import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'



function App() {
  const [itemlist, setItemlist] = useState(['Egg', 'Meat']);
  const [inputitem, setInputitem] = useState('');
  const [added, setAdded] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [edit, setEdit] = useState(false)
  const [index, setIndex] = useState(0)

  const handlesubmit = (e) => {
    e.preventDefault();
     
    let newitemlist = [];
    itemlist.map((item) => newitemlist.push(item));
    
    if (edit) {
      newitemlist[index] = inputitem;
      setItemlist(newitemlist);
      setEdit(false);
    } else {
      newitemlist.push(inputitem);
      setItemlist(newitemlist);
    }
    setAdded(true)
  }
  const delitem = (a) => {
    const newitems = []
    itemlist.map((item, index) => index != a ? newitems.push(item) : '')
    setItemlist(newitems);
    setDeleted(true)
  }
  const edititem = (a,index) => {
    setEdit(true);
    setInputitem(a);
    setIndex(index);
  }
  const tdel = () => {
    setTimeout(function(){ setDeleted(false); }, 3000);
  }
  const tadd = () => {
    setTimeout(function(){ setAdded(false); }, 3000);
  }
  useEffect(() => {
    tdel()
  }, [deleted])
  useEffect(() => {
    tadd()
  }, [added])

  return (
    <section className='section-center'>
      {added && <Alert alerttype='sucess' />}
      {deleted && <Alert alerttype='delete' />}
      <h3>grocery bud setup</h3>
      <form className='grocery-form' >
        <div className='form-control'>
          <input type="text" value={inputitem} className='grocery' placeholder='e.g. eggs' onChange={(e) => setInputitem(e.target.value)}/>
          <button type='submit' className='submit-btn' onClick={(e) => handlesubmit(e)}>{edit ? 'Edit' : 'Submit'}</button>
        </div>
      </form>
      <div className='grocery-container'>
        {itemlist.map((item, index) => < List key={item} item={item} index={index} delitem={delitem} edititem={ edititem }/>)}
      </div>
      <button className='clear-btn' onClick={()=> setItemlist([])}>Clear all items</button>
    </section>
  )
}

export default App
