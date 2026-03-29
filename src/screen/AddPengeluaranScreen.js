import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import AddPengeluaranForm from "../components/AddPengeluaranForm";

const AddPengeluaranScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.income}>
                <Text style={styles.ket}>New Income</Text>
                <Text style={styles.isi}>Rayakan Hari Rayamu!</Text>
            </View>

            <AddPengeluaranForm />
        </View>
    )
}

export default AddPengeluaranForm;