import React from "react";
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import AddPengeluaranForm from "../components/AddPengeluaranForm";

const AddPengeluaranScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.ketcontainer}>
                <Image 
                >
                </Image>
                <Text style={styles.newthr}>
                    New THR Outflow
                </Text>
                <Text style={styles.ket}>
                    Keep your holiday bloon in check
                </Text>
            </View>

            <AddPengeluaranForm onSuccess={() => navigation.goBack()}/>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
    flex: 1,
    backgroundColor: '#e8e4f3',
    alignItems: 'center'
    },
    ketcontainer: {
        alignItems: "flex-start",
        width: 350,
        height: 130,
        padding: 20,
        borderRadius: 20,
        backgroundColor: '#ac1a1a',
        marginBottom: 20,
        marginTop: 20
    },
    newthr: {
        fontSize: 24,
        color: 'white',
        marginBottom: 5,
        marginLeft: 10,
        fontWeight: 'bold'
    },
    ket: {
        color: '#e6e6e6',
        fontSize: 15,
        marginBottom: 20,
        marginLeft: 11,
        fontWeight: 'bold'
    }
})

export default AddPengeluaranScreen;