import React, { useState, useContext } from "react";
import DateTimePicker from '@react-native-community/datetimepicker';
import { View, TextInput, Button, ActionSheetIOS } from "react-native";
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
      <TextInput
        placeholder="Dari Siapa..."
        value={text}
        onChangeText={setText}
        style={{
          borderWidth: 1,
          padding: 8,
          marginBottom: 10,
          marginTop: 40,
        }}
      />
      
      <TextInput 
      placeholder="Jumlahnya Berapa..."
        value={amount}
        onChangeText={setAmount}
        style={{
          borderWidth: 1,
          padding: 8,
          marginBottom: 10,
          marginTop: 40,
        }}
        />

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
      <Button title="Simpan" onPress={handleAdd} />
    </View>
  );
};

export default AddTodoForm;