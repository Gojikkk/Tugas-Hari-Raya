import React, { useContext } from "react";
import { View, Text, Button } from "react-native";
import { TodoContext } from "../context/ToDoContext";

const InfoTHR = ({ item }) => {
  const { dispatch } = useContext(TodoContext);

  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 10 }}>
      
        <Text style={styles.jumlahTHR}>
          {item.amount}
        </Text>

        <Button
        title="Hapus"
        onPress={() =>
          dispatch({ type: "DELETE_PENGELUARAN", payload: item.id })
        }
      />
      </View>
  );
};

export default InfoTHR;