import React, { Component } from 'react'
import { connect } from 'react-redux'
import Todo from 'Todo'
// import { bindActionCreators } from 'redux'

class TodoList extends Component {
  render() {
    const {todos} = this.props
    const renderTodos = () => {
      if (todos.length === 0) {
        return (
            <p>Currently no todos</p>
        )
      }
      return todos.map(todo => {
        return (
          <Todo key = {todo.id} {...todo} />
        )
      })
    }
    return (
      <div>
        {renderTodos()}
      </div>
    )
  }
}

// function mapStateToProps(state, ownProps) {
//   return {
//     todos: state.todos  
//   }
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators({}, dispatch)
//   }
// }

export default connect(state => {
  return state
})(TodoList)