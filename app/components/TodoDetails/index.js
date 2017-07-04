'use strict'

import React, { Component} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import axios from "axios"
import './index.scss'
const actions = require('actions')

class TodoDetails extends Component {

  state = {
    details: '',
    text: '',
    completed: false
  }

  handleSubmit = e => {
    e.preventDefault()
    const {dispatch} = this.props
    const todoId = this.props.location.pathname
    const detailsText = this.refs.detailsText.value
    dispatch(actions.startAddDetails(detailsText, todoId))
  }

  handleChange = e => {
    this.setState({ details: e.target.value })
  }

  componentWillMount = () => {
    const todoId = this.props.location.pathname
      axios.get("/api/todos/id?id="+todoId).then(res => {
        this.setState({
          details: res.data.details,
          text: res.data.text,
          completed: res.data.completed
        })
      })
  }

  render() {
    return (
      <div className="container">
        <h1>{this.state.text}</h1>
        <form onSubmit={this.handleSubmit}>
          {/*Without on change we can not edit textarea*/}
          <textarea type="text" ref="detailsText" value = {this.state.details} onChange={this.handleChange} className="form-control"/>
          <button className="btn btn-primary btn-block details-button">Submit!</button>
        </form>
        <Link to = '/' className="btn btn-warning btn-block details-button">Return to list!</Link>
      </div>
    )
  }
}

export default connect()(TodoDetails)
