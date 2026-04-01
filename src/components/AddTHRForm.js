import React, { useState, useContext } from "react";
import DateTimePicker from '@react-native-community/datetimepicker';
import { View, TextInput, Button, ActionSheetIOS, TouchableOpacity } from "react-native";
import { TodoContext } from "../context/ToDoContext";

const AddTHRForm = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(new Date());
  const { dispatch } = useContext(TodoContext);
  const onChange = (event, selectedDate) => {
  setShow(false);
  if (selectedDate) setDate(selectedDate);
};
  const handleAdd = () => {
    if (text.trim() === "") return;

    dispatch({
      type: "ADD_THR",
      payload: {
        id: Date.now(),
        text: text,
        amount: action.payload.amount,
        date: action.payload.date,
        completed: false,
      },
    });

    setText("");
  };

  return (
    <View style={{ padding: 10 }}>

      <Text style={styles.keterangan}>Dari Siapa</Text>
      <TextInput
        placeholder="Dari Siapa..."
        value={text}
        onChangeText={setText}
        style={styles.inputform}
      />
      
      <Text style={styles.keterangan}>Jumlah</Text>
      <TextInput 
      placeholder="Jumlahnya Berapa..."
        value={amount}
        onChangeText={setAmount}
        style={styles.inputjumlah}
        />

<Text style={styles.keterangan}>Tanggal</Text>
    <TouchableOpacity
  onPress={() => setShow(true)}
  style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
>
  <Text>{date.toDateString()}</Text>
</TouchableOpacity>
{show && (
  <DateTimePicker
    value={date}
    mode="date"
    display="default"
    onChange={onChange}
  />
)}
      <TouchableOpacity title="Simpan" onPress={handleAdd} style={styles.button}/>
    </View>
  );
};

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  inputform: {
    width: 200,
    Height: 50,
    backgroundColor: '#dedede',
    borderRadius: 10,
    marginBottom: 20
  },
  inputjumlah: {
    width: 200,
    Height: 50,
    backgroundColor: '#dedede',
    borderRadius: 10,
    marginBottom: 20
  },
  button: {
  backgroundColor: '#285f2d',
  alignItems: 'center',
  justifyContent: 'center',
  width: 200,
  color: 'white'
  },
  keterangan: {
    color: '#cbc6c6',
    fontWeight: 'bold',
    marginBottom: '10',
    alignItems: 'center'
  }

})

export default AddTHRForm;