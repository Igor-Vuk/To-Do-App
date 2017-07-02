'use strict';

import React, { Component} from 'react'
import { connect } from 'react-redux'
import TodoList from 'TodoList'
import AddTodo from 'AddTodo'
// import { bindActionCreators } from 'redux'
// import { Link } from 'react-router'

import './app.scss'

class TodoApp extends Component {

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-11 col-md-6 col-md-5">
            <h1>Todo App</h1>
            <TodoList />
            <AddTodo />
          </div>
        </div>     
      </div>
    )
  }
}

// function mapStateToProps(state, ownProps) {
//   return {}
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators({}, dispatch)
//   }
// }

export default connect()(TodoApp)
