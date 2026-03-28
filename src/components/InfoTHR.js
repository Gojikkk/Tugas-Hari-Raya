import React, { useContext } from "react";
import { View, Text, TouchableOpacity, Button } from "react-native";
import { TodoContext } from "../context/ToDoContext";

const TodoItem = ({ item }) => {
  const { dispatch } = useContext(TodoContext);

  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 10 }}>
      
      <TouchableOpacity
        onPress={() =>
          dispatch({ type: "TOGGLE_THR", payload: item.id })
        }
      >
        <Text style={{ textDecorationLine: item.completed ? "line-through" : "none" }}>
          {item.text}
        </Text>
      </TouchableOpacity>

      <Button
        title="Hapus"
        onPress={() =>
          dispatch({ type: "DELETE_THR", payload: item.id })
        }
      />
    </View>
  );
};

export default TodoItem;