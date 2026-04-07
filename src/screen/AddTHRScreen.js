import React from "react";
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import AddTHRForm from "../components/AddTHRForm";
const AddTHRScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.incomecontainer}>
                <Text style={styles.ket}>New Income</Text>
                <Text style={styles.isi}>Rayakan Hari Rayamu!</Text>
            </View>

            <AddTHRForm navigation={navigation}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#e8e4f3',
    alignItems: 'center'
    },
    incomecontainer: {
        alignItems: "flex-start",
        width: 350,
        height: 200,
        padding: 20,
        borderRadius: 30,
        backgroundColor: '#0B7A5C',
        marginBottom: 20,
        marginTop: 15
    },
    ket: {
        fontSize: 20,
        color: 'white',
        marginBottom: 5,
        marginLeft: 10
    },
    isi:{
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        marginLeft: 10
    }
})

export default AddTHRScreen;