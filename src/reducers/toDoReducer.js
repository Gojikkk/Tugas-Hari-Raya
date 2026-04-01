import { act } from "react";

export const initialState = {
  thrMasuk: [],
  pengeluaranMasuk: [],
  totalThr: 0,
  totalPengeluaran:0,
};

export function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_THR":   
      return {
        ...state,
        thrMasuk: [...state.thrMasuk, action.payload],
        totalThr: state.totalThr + Number(action.payload.amount),
      };

      case "ADD_PENGELUARAN":
        const newTotal = state.totalThr - Number(action.payload.amount);
        return {
            ...state,
            pengeluaranMasuk: [...state.pengeluaranMasuk,
                {
                    ...action.payload,
                    category: action.payload.category,
                }],
            totalPengeluaran: state.totalPengeluaran + Number(action.payload.amount),
            totalThr: newTotal < 0 ? 0 : newTotal,
        };
        
    case "DELETE_THR":
        const thrItem = state.thrMasuk.find(t => t.id === action.payload);
      return {  
        ...state,
        thrMasuk: state.thrMasuk.filter(t => t.id !== action.payload),
        totalThr: state.totalThr - Number(thrItem.amount),
      };

    case "DELETE_PENGELUARAN":
        const PengeluaranItem = state.pengeluaranMasuk.find(t => t.id === action.payload);
      return {  
        ...state,
        pengeluaranMasuk: state.pengeluaranMasuk.filter(t => t.id !== action.payload),
        totalPengeluaran: state.totalPengeluaran - Number(PengeluaranItem.amount),
        totalThr : state.totalThr - Number(PengeluaranItem.amount)
      };

    case "TOGGLE_THR":
      return {
        ...state,
        thrMasuk: state.thrMasuk.map(t =>
          t.id === action.payload ? { ...t, completed: !t.completed } : t
        ),
      };

          case "TOGGLE_PENGELUARAN":
      return {
        ...state,
        pengeluaranMasuk: state.pengeluaranMasuk.map(t =>
          t.id === action.payload ? { ...t, completed: !t.completed } : t
        ),
      };

    case "SET_ALL_DATA":
      return action.payload;

    default:
      return state;
  }
}