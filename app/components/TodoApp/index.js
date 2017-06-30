'use strict';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import TodoList from 'TodoList'

import './app.scss';

class TodoApp extends Component {

  state = {
    todos: [
      {
        id: 1,
        text: 'Walk the dog'
      },
      {
        id: 2,
        text: 'Walk the cat'
      },
      {
        id: 3,
        text: 'Buy bread'
      }
    ]
  }

  // constructor(props, context) {
  //   super(props, context);

  // }

  render() {
    const {todos} = this.state
    return (
      <div className="app">
        <TodoList todos={todos} />
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
