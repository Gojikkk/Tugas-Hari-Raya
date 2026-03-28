import React, { useState, useContext } from "react";
import DateTimePicker from '@react-native-community/datetimepicker';
import { View, TextInput, Button, ActionSheetIOS, TouchableOpacity, Text } from "react-native";
import { TodoContext } from "../context/ToDoContext";

const AddPengeluaranForm = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(new Date());
  const [category, setCategory] = useState("others");
  const [catatan, setCatatan] = useState("");
  const { dispatch } = useContext(TodoContext);
  const onChange = (event, selectedDate) => {
  setShow(false);
  if (selectedDate) setDate(selectedDate);
};
  const handleAdd = () => {
    if (text.trim() === "") return;
    
    dispatch({
      type: "ADD_PENGELUARAN",
      payload: {
        id: Date.now(),
        text: text,
        amount: action.payload.amount,
        date: date.toISOString,
        category: category,
        catatan: catatan,
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

<View style={{ flexDirection: "row", gap: 10, marginBottom: 10 }}>
  {["Belanja", "Sedekah", "Investasi", "others"].map((c) => (
    <TouchableOpacity
      key={c}
      onPress={() => setCategory(c)}
      style={{
        padding: 10,
        borderWidth: 1,
        backgroundColor: category === c ? "#f88" : "#eee",
      }}
    >   
      <Text>{c}</Text>
    </TouchableOpacity>
  ))}
</View>

    <TextInput 
      placeholder="Catatan..."
        value={catatan}
        onChangeText={setCatatan}
        style={{
        borderWidth: 1,
        padding: 10,
        textAlignVertical: "top",
        }}
        />
      <Button title="Simpan" onPress={handleAdd} />
    </View>
  );
};

export default AddPengeluaranForm;