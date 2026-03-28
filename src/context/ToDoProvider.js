import React, { useReducer, useEffect } from "react";
import { TodoContext } from "./ToDoContext";
import { todoReducer, initialState } from "../reducers/toDoReducer";
import { saveData, loadData } from "../storage/asyncStorage";

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  useEffect(() => {
    loadData().then(data => {
      if (data) {
        dispatch({ type: "SET_TODOS", payload: data });
      }
    });
  }, []);

  useEffect(() => {
    saveData(state.todos);
  }, [state.todos]);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};