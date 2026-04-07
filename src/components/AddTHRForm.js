import React, { useState, useContext } from "react";
import DateTimePicker from '@react-native-community/datetimepicker';
import { View, Text, TextInput, Button, ActionSheetIOS, TouchableOpacity, StyleSheet } from "react-native";
import { TodoContext } from "../context/ToDoContext";

const AddTHRForm = ({navigation}) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(new Date());
  const { dispatch } = useContext(TodoContext);
  const [show, setShow] = useState(false);

const onChange = (event, selectedDate) => {
  if (event.type === 'set' && selectedDate) {
    setDate(selectedDate);
  }
  setShow(false);
};
  const handleAdd = () => {
    if (text.trim() === "") return;

    dispatch({
      type: "ADD_THR",
      payload: {
        id: date,
        text: text,
        amount: amount,
        date: date.toISOString(),
        completed: false,
      },
    });

    navigation.goBack();
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
  is24Hour={true}  
  onChange={onChange}
/>
)}
      <TouchableOpacity title="Simpan" onPress={handleAdd} style={styles.button}>Simpan</TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#e8e4f3',
    alignItems: 'left',
    alignContent: 'left',
    justifyContent: 'left',
  },
  inputform: {
    width: 350,
    height: 50,
    backgroundColor: '#fff1ff',
    borderRadius: 10,
    marginBottom: 20,
    padding: 20,
    color: '#b6b6b6'
  },
  inputjumlah: {
    width: 350,
    height: 50,
    backgroundColor: '#fff1ff',
    borderRadius: 10,
    marginBottom: 20,
    padding: 20,
    color: '#b6b6b6'
  },
  button: {
  backgroundColor: '#0B7A5C',
  alignItems: 'center',
  justifyContent: 'center',
  width: 350,
  color: 'white',
  fontWeight: 'bold',
  fontSize: 22,
  borderRadius: 15,
  marginTop: 130,
  height: 70
  },
  keterangan: {
    color: '#4e4d4d',
    fontWeight: 'bold',
    marginBottom: 10,
    alignItems: 'center'
  }

})

export default AddTHRForm;