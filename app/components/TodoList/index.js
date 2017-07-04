import React, { Component } from 'react'
import { connect } from 'react-redux'
import Todo from 'Todo'
import { Link } from 'react-router'
import './index.scss'

class TodoList extends Component {
  render() {
    const {todos} = this.props
    const renderTodos = () => {
      if (todos.length === 0) {
        return (
            <h3>Currently no todos</h3>
        )
      }
      return todos.map(todo => {
        return (
          <div className="task-style" key={todo.id}>
            <Todo key = {todo.id} {...todo} className="task-style"/>
          </div>
        )
      })
    }
    return (
      <div>
        <h2>You have {todos.length} tasks</h2>
        {renderTodos()}
      </div>
    )
  }
}

export default connect(state => {
  return state
})(TodoList)