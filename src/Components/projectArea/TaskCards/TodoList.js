import React from 'react'
import SingleTodo from './SingleTodo'

function TodoList({taskList}) {
  return (
    taskList.map(par => {
        return <SingleTodo key={par.id} singleTask={par} />
                
    })
  )
}

export default TodoList