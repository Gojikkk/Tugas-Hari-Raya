import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import AddPengeluaranForm from "../components/AddPengeluaranForm";

const AddPengeluaranScreen = () => {
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

            <AddPengeluaranForm />
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    },
    ketcontainer: {
        alignContent: 'center',
        marginTop: '20',
        marginBottom: '20',
    },
    newthr: {
        fontWeigth: 'bold',
        color: 'black',
        fontSize: '14',
        marginBottom: '10'
    },
    ket: {
        color: '#e6e6e6',
        fontSize: '12',
        marginBottom: '20'
    }
})

export default AddPengeluaranForm;