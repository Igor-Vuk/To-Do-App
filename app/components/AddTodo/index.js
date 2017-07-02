import React, {Component} from 'react'
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
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
          <input type="text" ref="todoText" placeholder="Add todo!"/>
          <button className="btn btn-danger">Add Todo</button>
        </form>
      </div>
    )
  }
}

// function mapStateToProps(state, ownProps) {
//   return {};
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators({}, dispatch)
//   };
// }

export default connect()(AddTodo);