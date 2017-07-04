import axios from "axios"

const GET_TODOS = "/api/todos"
const CHANGE_TODOS = "/api/todos/id"

export const addTodo = (text, completed, id, details) => {
  return {
    type: 'ADD_TODO',
    text: text,
    completed: completed,
    id: id,
    details: details
  }
}

export const startAddTodo = text => {
  return (dispatch, getState) => {
    //save data to mongodb
    axios.post(GET_TODOS, {
      text: text,
      completed: false,
      details: ''
    }).then(res => {
      dispatch(addTodo(
        res.data.text,
        res.data.completed,
        res.data._id,
        res.data.details
         //mongo automatically creates id when we save data in the db. Here, we just pull it out. We need id because in ContactList.jsx every contact needs a key
      ))
    })
  }
}

export const addTodos = todos => {
  return {
    type: 'ADD_TODOS',
    todos
  }
}

export const startAddTodos = () => {
  return(dispatch, getState) => {

    //retrieve data from mongodb
    axios.get(GET_TODOS).then(res => {
      const todos = res.data.todos
      const arrTodos = []
      todos.forEach(todoId => {
        arrTodos.push({
          text: todoId.text,
          completed: todoId.completed,
          id:todoId._id
        })
        
      })
      dispatch(addTodos(arrTodos))
    })
  }
}

export const toggleTodo = (id, completed) => {
  return {
    type: 'TOGGLE_TODO',
    id,
    completed
  }
}

export var startToggleTodo = (id, completed) => {
  return (dispatch, getState) => {
    var changeCompleted = !(completed)
    axios({
      method: "put", 
      url: CHANGE_TODOS, 
      data: {
          id: id,
          completed: changeCompleted
      }
    }).then(res => {
      const idCompleted = res.data._id
      const stateCompleted = res.data.completed
      
      dispatch(toggleTodo(idCompleted, stateCompleted))
    })   
  };
};

export const deleteTodo = id => {
  return {
    type: 'DELETE_TODO',
    id
  }
}

export const startDeleteTodo = id => {
  return (dispatch, getState) => {
    //delete data from mongodb
    axios({
      method: "delete", 
      url: CHANGE_TODOS, 
      data: {
          id: id
      }
    }).then(res => {
      const deleteTodoId = res.data.todo._id
      dispatch(deleteTodo(deleteTodoId))
    })        
  }
}

export const addDetails = (text, completed, id, details) => {
  return {
    type: 'ADD_DETAILS',
    text: text,
    completed: completed,
    id: id,
    details: details
  }
}

export const startAddDetails = (details, id) => {
  return (dispatch, getState) => {
    axios({
      method: 'put', 
      url: CHANGE_TODOS, 
      data: {
        details: details,
        id: id
      }
    }).then(res => {
    
      dispatch(addDetails(
      
        res.data._id,
        res.data.details
      ))
    }) 
  }
}
