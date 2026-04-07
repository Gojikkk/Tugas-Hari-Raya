import React, { useReducer, useEffect } from "react";
import { TodoContext } from "./ToDoContext";
import { todoReducer, initialState } from "../reducers/toDoReducer";
import { saveData, loadData } from "../storage/AsyncStorage";

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  useEffect(() => {
    loadData().then(data => {
      if (data) {
        dispatch({ type: "SET_ALL_DATA", payload: data });
      }
    });
  }, []);

  useEffect(() => {
    saveData(state);
  }, [state]);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};