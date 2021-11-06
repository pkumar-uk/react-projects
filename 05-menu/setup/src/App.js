import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
let tempm = new Set();
tempm.add('All');
items.map((menu) => tempm.add(menu.category));
console.log(tempm);
function App() {
  const [menuitems, setMenuitems] = useState(items);
  const [categories, setCategories] = useState([...tempm]);
  //const [category, setCategory] = useState('All');
  const filter = (item) => {
    console.log(item)
    if (item === 'All') {
      setMenuitems(items)
    } else {
      let temp = [];
      temp = items.filter((a) => { return a.category == item })
      setMenuitems(temp)
     }
     
  }
  
  //setCategories([...tempm])
  
  return (
    <main>
    <section className="menu section">
      <div className='title'>
        <h2 className=''>Our Menu</h2>
          <div className='underline'></div>
          </div>
          <div className='btn-container'>
          {categories.map((category) => <Menu key={category} item={category} filter={filter}/> )}
        </div>
        <div className='section-center'>
          {menuitems.map((menuitem) => <Categories key={menuitem.id} {...menuitem} />)}
        </div>
      </section>
      </main>
  )
  
  
  //<h2>menu project setup</h2>;
}

export default App;
