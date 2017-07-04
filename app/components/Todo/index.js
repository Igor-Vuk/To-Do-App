import React, {Component} from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router'
import './index.scss'

const actions = require('actions')

class Todo extends Component {
  render() {
    const {text, id, completed, dispatch} = this.props
    
    return (
      <div className = "container">
        <div className="row">
          <div className="col-xs-1" onClick={() => {
            dispatch(actions.startToggleTodo(id, completed)) 
          }}>
            <input type="checkbox" defaultChecked={completed} className="checkbox" />
          </div>
          
          <div className="col">
            {text}
          </div>
          
        </div>

        <div className="row justify-content-start">
          <div className="col-4">
            <Link to = {id} className="btn btn-info">Details</Link>
          </div>
        
          <div className="col-4">  
            <button className="btn btn-danger" onClick={() => {
              dispatch(actions.startDeleteTodo(id));
            }}>Delete</button> 
          </div>
        </div>
      
      </div>
    )
  }
}

export default connect()(Todo);