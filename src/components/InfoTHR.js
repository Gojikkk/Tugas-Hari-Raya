import React, { useContext } from "react";
import { View, Text, Button } from "react-native";
import { TodoContext } from "../context/ToDoContext";

const InfoTHR = ({ item }) => {
  const { dispatch } = useContext(TodoContext);

  return (
        <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 10 }}>
          
          <View style={styles.historycontainer}>
            <Text style={styles.from}>
              {item.text}
            </Text>
    
            <Text style={styles.jumlahTHR}>
              +Rp{item.amount}
            </Text>
    
            <Text styles={styles.tanggal}>
              {item.date}
            </Text>
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
    historycontainer:{
      backgroundColor: '#dedcdcf',
      alignItems: 'left'
    },
    from: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: '16'
    },
    jumlahTHR: {
      color: '#be2121',
      fontSize: '16',
      fontWeight: 'bold'
    },
    historycontainer: {
      flexDirection: "row", 
      justifyContent: "space-between", 
      padding: 10,
      backgroundColor: '#d3d3d3',
      borderRadius: '10',
    },
    tanggal: {
      color: '#d7d7d7',
      fontSize: '12',
    },
    button: {
      backgroundColor: '#d3d3d3',
      color: 'black',
      alignItems: 'center',
      justifyContent: 'center'
    }

  })

export default InfoTHR;