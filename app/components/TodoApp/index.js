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
        text: 'Walk the dog'
      },
      {
        id: uuid(),
        text: 'Walk the cat'
      },
      {
        id: uuid(),
        text: 'Buy bread'
      }
    ]
  }

  // constructor(props, context) {
  //   super(props, context);

  // }
  handleAddTodo = (text) => {
    this.setState({
      todos: [
        ...this.state.todos, 
        {
          id: uuid(),
          text: text
        }
      ]
    })
  }

  render() {
    const {todos} = this.state
    return (
      <div className="app">
        <TodoList todos={todos} />
        <AddTodo onAddTodo = {this.handleAddTodo}/>
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
