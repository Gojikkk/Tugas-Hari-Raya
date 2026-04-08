import React, { useContext } from "react";
import { View, Text, Button, TouchableOpacity, StyleSheet} from "react-native";
import { TodoContext } from "../context/ToDoContext";

const InfoTHR = ({ item }) => {
  const { dispatch } = useContext(TodoContext);

  return (
        <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 10 }}>
          
      <View style={styles.historycontainer}>
        <View style={{ flexDirection: 'column' }}>
          <Text style={styles.from}>{item.text}</Text>
          <Text style={styles.tanggal}>{item.date}</Text>
      </View>
          <Text style={styles.jumlahTHR}>+ Rp{item.amount}</Text>
          </View>
    
            <TouchableOpacity
            style={styles.button}
            title="Hapus"
            onPress={() =>
              dispatch({ type: "DELETE_THR", payload: item.id })
            }
          />
          </View>
  );
};

  const styles = StyleSheet.create({
    from: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: 20,
      marginBottom: 5,
      marginTop: 1,
      marginLeft: 10
    },
    jumlahTHR: {
      color: '#1ac417',
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 10,
      marginRight: 17
    },
    historycontainer: {
      flexDirection: "row", 
      justifyContent: "space-between", 
      width: 350,
      height: 70,
      padding: 10,
      backgroundColor: '#ffffff',
      borderRadius: 10,
    },
    tanggal: {
      color: '#a8a8a8',
      fontSize: 12,
      marginLeft: 10
    },
    button: {
      backgroundColor: '#d3d3d3',
      color: 'black',
      alignItems: 'center',
      justifyContent: 'center'
    }

  })

export default InfoTHR;