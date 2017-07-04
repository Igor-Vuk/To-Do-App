import React, {Component} from 'react'
import { connect } from 'react-redux';
const actions = require('actions')

class AddTodo extends Component {

  handleSubmit = e => {
    e.preventDefault()
    const {dispatch} = this.props
    const todoText = this.refs.todoText.value;
    if(todoText.length > 0) {
      this.refs.todoText.value = ''
      dispatch(actions.startAddTodo(todoText))
    } else {
      this.refs.todoText.focus()
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="input-group">
            <input type="text" ref="todoText" placeholder="Add todo!" className="form-control"/>
            <span className="input-group-btn">
              <button className="btn btn-primary">Add Todo</button>
            </span>
          </div>
        </form>
      </div>
    )
  }
}

export default connect()(AddTodo);