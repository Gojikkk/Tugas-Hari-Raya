import React, { useState, useContext } from "react";
import DateTimePicker from '@react-native-community/datetimepicker';
import { View, TextInput, Button, ActionSheetIOS, TouchableOpacity, Text, StyleSheet } from "react-native";
import { TodoContext } from "../context/ToDoContext";


const AddPengeluaranForm = ({onSuccess}) => {
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(new Date());
  const [category, setCategory] = useState("others");
  const [catatan, setCatatan] = useState("");
  const { dispatch } = useContext(TodoContext);
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
  setShow(false);
  if (selectedDate) setDate(selectedDate);
};
  const handleAdd = () => {
    if (amount.trim() === "") return;
    
    dispatch({
      type: "ADD_PENGELUARAN",
      payload: {
        id: Date.now(),
        amount: amount,
        date: date.toISOString(),
        category: category,
        catatan: catatan,
        completed: false,
      },
    });

    setAmount("");
    onSuccess();
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
  value={new Date(date)}
  mode="date"
  display="default"
  is24Hour={true}      
  onChange={onChange}
/>
)}

      <Text style={styles.keterangan}>Kategori</Text>
<View style={{ flexDirection: "row", gap: 10, marginBottom: 10, flexWrap: 'wrap' }}>
  {["Belanja", "Sedekah", "Investasi", "others"].map((c) => (
    <TouchableOpacity
      key={c}
      onPress={() => setCategory(c)}
      style={[styles.kategori, category === c && styles.kategoriactive]}
    >
      <Text style={{fontWeight: 'bold', color: '#3b3b3b'}}>{c}</Text>
    </TouchableOpacity>
  ))}
</View>

<Text style={styles.keterangan}>Catatan</Text>
    <TextInput 
      placeholder="What was this for"
        value={catatan}
        onChangeText={setCatatan}
        style={styles.catatan}
        />
      <TouchableOpacity title="Simpan" onPress={handleAdd} style={styles.button}>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>Simpan</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
container: {
    flex: 1,
    flex: 1,
    backgroundColor: '#e8e4f3',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
},
inputjumlah: {
    width: 350,
    padding: 20,
    height: 50,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginBottom: 20
},
kategori: {
  width: 120,
  height: 70,
  backgroundColor: '#ffffff',
  borderRadius: 10,
  alignItems: 'center',
  justifyContent: 'center'
},
kategoriactive: {
  backgroundColor: '#b86e6e',
  borderColor: 'red',
  borderWidth: 1
},
catatan: {
  width: 350,
  height: 100,
  borderRadius: 20,
  padding: 20,
  backgroundColor: '#ffffff'
},
button: {
  backgroundColor: '#ac1a1a',
  alignItems: 'center',
  justifyContent: 'center',
  width: 350,
  color: 'white',
  marginTop: 30,
  borderRadius: 20,
  height: 50

},
  keterangan: {
    color: '#4e4d4d',
    fontWeight: 'bold',
    marginBottom: 10,
    alignItems: 'center'
  }
})

export default AddPengeluaranForm;