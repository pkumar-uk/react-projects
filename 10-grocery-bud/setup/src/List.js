import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({item,index, delitem, edititem }) => {
  return (
    <article className='grocery-item'>
      <p className='title'>{ item }</p>
      <div className='btn-container'>
        <button className='edit-btn'  onClick={() => edititem(item, index)}><FaEdit /></button>
        <button className='delete-btn' onClick={() => delitem(index)}><FaTrash /></button>
      </div>

    </article>
  )
    //< h2 > list component</ >
}

export default List
