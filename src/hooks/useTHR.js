import { useContext, useState } from "react";
import { TodoContext } from "../context/ToDoContext";

export const useTHR = () => {
  const { state, dispatch } = useContext(TodoContext);
  const [filter, setFilter] = useState("ALL");

  const getDataByFilter = () => {
    if (filter === "PEMASUKAN") {
      return {
        thrMasuk: state.thrMasuk,
        pengeluaranMasuk: [],
      };
    }

    if (filter === "PENGELUARAN") {
      return {
        thrMasuk: [],
        pengeluaranMasuk: state.pengeluaranMasuk,
      };
    }

    return {
      thrMasuk: state.thrMasuk,
      pengeluaranMasuk: state.pengeluaranMasuk,
    };
  };

  const { thrMasuk, pengeluaranMasuk } = getDataByFilter();

  return {
    thrMasuk,
    pengeluaranMasuk,
    totalThr: state.totalThr,
    totalPengeluaran: state.totalPengeluaran,
    filter,
    setFilter,
    dispatch,
  };
};