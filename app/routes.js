'use strict'

import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Container from 'Container'
import TodoApp from 'TodoApp'
import TodoDetails from 'TodoDetails'

export default (
  <Route path='/' component={Container} >
    <Route path='/:details' component={TodoDetails} />
    <IndexRoute component={TodoApp} />
  </Route>
)
