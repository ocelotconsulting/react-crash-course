import React from 'react'
import T from 'prop-types'

const ToDoList = ({ items }) =>
  <div className='todo-list'>
    <h4>TODO</h4>
    <ul>
      {items.map(({ id, description }) =>
        <li key={id}>{description}</li>
      )}
    </ul>
  </div>

ToDoList.propTypes = {
  items: T.arrayOf(T.object).isRequired
}

export default ToDoList
