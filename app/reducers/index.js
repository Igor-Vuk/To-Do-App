export var todosReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          text: action.text,
          id: action.id,
          completed: action.completed,
          details: action.details
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo => {
        if(todo.id === action.id) {
        return {
          ...todo,
          completed: action.completed
        }
      } else {
        return todo
      }
    })
    case 'ADD_TODOS':
      return [
        ...state,
        ...action.todos
      ]
    case 'DELETE_TODO':
      return state.filter(todo => {
          return todo.id !== action.id
        })
    case 'ADD_DETAILS':
      return state.map(todo => {
        if(todo.id === action.id) {
        return {
          ...todo,
          details: action.details
        }
      } else {
        return todo
      }
    })
    default:
    return state
  }
}
