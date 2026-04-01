import React, { useState, useContext } from "react";
import DateTimePicker from '@react-native-community/datetimepicker';
import { View, TextInput, Button, ActionSheetIOS, TouchableOpacity, Text } from "react-native";
import { TodoContext } from "../context/ToDoContext";
import { Color } from "react-native/types_generated/Libraries/Animated/AnimatedExports";

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
      <Text style={styles.keterangan}>Jumlah</Text>
      <TextInput 
      placeholder="0"
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

      <Text style={styles.keterangan}>Kategori</Text>
<View style={{ flexDirection: "row", gap: 10, marginBottom: 10 }}>
  {["Belanja", "Sedekah", "Investasi", "others"].map((c) => (
    <TouchableOpacity
      key={c}
      onPress={() => setCategory(c)}
      style={[styles.kategori, activeCategory === cat && styles.kategoriactive]}
    >
      <Text>{c}</Text>
    </TouchableOpacity>
  ))}
</View>

<Text style={styles.keterangan}>Catatam</Text>
    <TextInput 
      placeholder="What was this for"
        value={catatan}
        onChangeText={setCatatan}
        style={styles.catatan}
        />
      <TouchableOpacity title="Simpan" onPress={handleAdd} style={styles.button}/>
    </View>
  );
};

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
},
inputjumlah: {
    width: 200,
    Height: 50,
    backgroundColor: '#dedede',
    borderRadius: 10,
    marginBottom: 20
},
kategori: {
  width: 40,
  Height: 40,
  backgroundColor: '#dedede',
  borderRadius: 5
},
kategoriactive: {
  backgroundColor: '#b86e6e',
  borderColor: 'red',
  borderWidth: 1
},
catatan: {
  width: 200,
  Height: 90,
  backgroundColor: '#dedede'
},
button: {
  backgroundColor: 'red',
  alignItems: 'center',
  justifyContent: 'center',
  width: 200,
  color: 'white'
},
  keterangan: {
    color: '#cbc6c6',
    fontWeight: 'bold',
    marginBottom: 10,
    alignItems: 'center'
  }
})

export default AddPengeluaranForm;