import React from 'react'
import {FaEdit, FaTrash} from 'react-icons/fa'


const List = ({items, removeItem, editItem}) => {
  return (
    <div className="grocery0list">
        {items.map((item) =>{
            const {id, title} = item
            return <article key={id} className='grocery-item'>
                <p className='title'>{title}</p>
                <div className="btn-container">
                    <button onClick={() => editItem(id)} className="edit-btn" type='button'>
                       <FaEdit />
                    </button>
                    <button  onClick={() => removeItem(id)} className="delete-btn" type='button'>
                       <FaTrash />
                    </button>
                </div>
            </article>
        })}
    </div>
  )
}

export default List