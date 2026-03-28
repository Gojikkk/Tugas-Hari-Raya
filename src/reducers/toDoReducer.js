export const initialState = {
  todos: [],
};

export function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_THR":   
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

      case "ADD_PENGELUARAN":
        return {
            ...state,
            todos: [...state.todos, action.payload],
        };
        
    case "DELETE_THR":
      return {  
        ...state,
        todos: state.todos.filter(t => t.id !== action.payload),
      };

    case "TOGGLE_THR":
      return {
        ...state,
        todos: state.todos.map(t =>
          t.id === action.payload ? { ...t, completed: !t.completed } : t
        ),
      };

    case "SET_THR":
      return {
        ...state,
        todos: action.payload,
      };

    default:
      return state;
  }
}