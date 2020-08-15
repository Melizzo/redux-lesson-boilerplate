import ToDoList from "../containers/ToDoList";

import React from 'react'

const ToDo = ({ id, text, completed }) => {
  return (
    <li>{text}</li>
  )
}


export default ToDoList;