import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import AddTHRForm from "../components/addTHRForm";
import { Color } from "react-native/types_generated/Libraries/Animated/AnimatedExports";

const AddTHRScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.incomecontainer}>
                <Text style={styles.ket}>New Income</Text>
                <Text style={styles.isi}>Rayakan Hari Rayamu!</Text>
            </View>

            <AddTHRForm />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    },
    incomecontainer: {
        alignItems: "left",
        width: 200,
        Height: 90,
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#26854a'
    },
    ket: {
        fontSize: 15,
        color: 'white'
    },
    isi:{
        fontSize: 20,
        fontWeight: 'bold'
    }
})

export default AddTHRScreen;