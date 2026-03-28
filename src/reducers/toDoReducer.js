export const initialState = {
  todos: [],
};

export function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_THR":   
      return {
        ...state,
        todos: [...state.todos, action.payload],
        totalThr: state.totalThr + Number(action.payload.amount),
      };

      case "ADD_PENGELUARAN":
        const newTotal = state.totalThr - Number(action.payload.amount);
        return {
            ...state,
            todos: [...state.todos,
                {
                    ...action.payload,
                    category: action.payload.category,
                }],
            totalPengeluaran: state.totalPengeluaran + Number(action.payload.amount),
            totalThr: newTotal < 0 ? 0 : newTotal,
        };
        
    case "DELETE_THR":
        const thrItem = state.todos.find(t => t.id === action.payload);
      return {  
        ...state,
        todos: state.todos.filter(t => t.id !== action.payload),
        totalThr: state.totalThr - Number(thrItem.amount),
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