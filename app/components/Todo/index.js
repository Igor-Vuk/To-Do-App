import React, {Component} from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Todo extends Component {
  render() {
    const {text, id, completed, onToggle} = this.props
    return (
      <div onClick={() => {
        this.props.onToggle(id)  
      }}>
        <input type="checkbox" checked={completed}/>
        {text}
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

export default connect(mapStateToProps, mapDispatchToProps)(Todo);