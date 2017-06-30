'use strict';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';

import './app.scss';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    
  }

  render() {
    return (
      <div className="app">
        <h1>ToDo App</h1>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object
};

App.contextTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
