import { useContext, useState } from "react";
import { TodoContext } from "../context/ToDoContext";

export const useTHR = () => {
  const { state, dispatch } = useContext(TodoContext);

  return {
    thrMasuk: state.thrMasuk,
    PengeluaranMasuk: state.PengeluaranMasuk,
    totalThr: state.totalThr,
    totalPengeluaran: state.totalPengeluaran,
    dispatch,
  };
};