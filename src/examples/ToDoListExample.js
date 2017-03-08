import React from 'react'
import ToDoList from './ToDoList'

const items = [
  {id: 1, description: 'Feed the cat'},
  {id: 2, description: 'Watch cat videos'},
  {id: 3, description: 'Think about how you want to hug every cat'}
]

const ToDoListExample = () =>
  <ToDoList items={items}/>

ToDoListExample.displayName = 'ToDoListExample'

ToDoListExample.propTypes = {
}

export default ToDoListExample