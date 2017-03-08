import React, {PropTypes as T} from 'react'

const ToDoList = ({items}) =>
  <div className='todo-list'>
    <h4>TODO</h4>
    <ul>
      {items.map(({id, description}) =>
        <li key={id}>{description}</li>
      )}
    </ul>
  </div>

ToDoList.displayName = 'ToDoList'

ToDoList.propTypes = {
  items: T.arrayOf(T.object).isRequired
}

export default ToDoList