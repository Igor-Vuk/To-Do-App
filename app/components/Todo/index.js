import React, {Component} from 'react'
import { connect } from 'react-redux';
const actions = require('actions')
// import { bindActionCreators } from 'redux';

class Todo extends Component {
  render() {
    const {text, id, completed, dispatch} = this.props
    
    return (
      <div>
        <div onClick={() => {
          dispatch(actions.startToggleTodo(id, completed)) 
        }}>
          <input type="checkbox" checked={completed} />
          {text}
        </div>

        <div>
          <button className="btn" onClick={() => {
            dispatch(actions.startDeleteTodo(id));
          }}>Delete</button>
        </div>
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

export default connect()(Todo);