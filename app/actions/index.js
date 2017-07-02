import axios from "axios"

// API endpoints
// -------------------
// get/set todos
const GET_TODOS = "http://localhost:3000/api/todos"

// delete/put todos
const CHANGE_TODOS = "http://localhost:3000/api/todos/id"

export const addTodo = (text, completed, id) => {
  return {
    type: 'ADD_TODO',
    text: text,
    id: id,
    completed: completed
  }
}

export const startAddTodo = (text) => {
 
  return (dispatch, getState) => {
    
    //save data to mongodb
    axios.post(GET_TODOS, {
      text: text,
      completed: false
    }).then(res => {
      console.log(res)
      dispatch(addTodo(
        res.data.text,
        res.data.completed,
        res.data._id
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
          ...todoId,
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
    // console.log(changeCompleted)
    axios({
      method: "put", 
      url: CHANGE_TODOS, 
      data: {
          id: id,
          completed: changeCompleted
      }
    }).then(res => {
      console.log(res)
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
