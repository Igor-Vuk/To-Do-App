'use strict';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import TodoList from 'TodoList'
import AddTodo from 'AddTodo'
import uuid from 'node-uuid'

import './app.scss';

class TodoApp extends Component {

  state = {
    todos: [
      {
        id: uuid(),
        text: 'Walk the dog',
        completed: false
      },
      {
        id: uuid(),
        text: 'Walk the cat',
        completed: true
      },
      {
        id: uuid(),
        text: 'Buy bread',
        completed: true
      }
    ]
  }

  // constructor(props, context) {
  //   super(props, context);

  // }

  handleAddTodo = text => {
    this.setState({
      todos: [
        ...this.state.todos, 
        {
          id: uuid(),
          text: text,
          completed: false
        }
      ]
    })
  }

  handleToggle = id => {
    const updatedTodos = this.state.todos.map((todo) => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
    this.setState({todos: updatedTodos})
  }

  render() {
    const {todos} = this.state
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-11 col-md-6 col-md-5">
            <h1>Todo App</h1>
            <TodoList todos={todos} onToggle={this.handleToggle}/>
            <AddTodo onAddTodo = {this.handleAddTodo}/>
          </div>
        </div>

        
      </div>
    );
  }
}

TodoApp.propTypes = {
  children: PropTypes.object
};

TodoApp.contextTypes = {
  router: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({}, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
