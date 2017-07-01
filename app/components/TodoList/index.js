import React, {Component} from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Todo from 'Todo'

class TodoList extends Component {
  render() {
    const {todos} = this.props
    const renderTodos = () => {
      return todos.map(todo => {
        return (
          <Todo key = {todo.id} {...todo} onToggle={this.props.onToggle}/>
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

function mapStateToProps(state, ownProps) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({}, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);