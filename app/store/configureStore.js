'use strict'

import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import {todosReducer, detailsReducer} from "reducers"
import thunk from 'redux-thunk'
import { routerReducer } from 'react-router-redux'

export const configure = () => {
  const reducer = combineReducers({
    routing: routerReducer,
    todos: todosReducer
  })

  const store = createStore(reducer, compose(
    applyMiddleware(thunk)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ))
  return store
}
