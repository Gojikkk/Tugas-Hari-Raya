import React from "react";
import { View, FlatList, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useTHR } from "../hooks/useTHR";
import InfoTHR from "../components/InfoTHR";
import InfoPengeluaran from "../components/InfoPengeluaran"

const HomeScreen = ({navigation}) => {
  const { thrMasuk, PengeluaranMasuk } = useTHR();
  const { totalThr, totalPengeluaran } = useTHR(); 

  return (
    <View style={styles.container}>
        <View style={styles.totalthrcontainer}>
            <Text style={styles.totalthr}>Total THR</Text>
            <Text style={styles.amount}> Rp {totalThr} </Text>
        </View>

        <View>
        <View style={styles.totalpengeluarancontainer}>
                <Text style={styles.totalpengeluaran}>Total Pengeluaran</Text>
                <Text> {totalPengeluaran} </Text>
        </View>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 10 }}>
        <TouchableOpacity 
            style={styles.tambahthr}
            onPress={() => navigation.navigate('AddTHR')}
            >
                <Text>Add THR</Text>
        </TouchableOpacity>

        <TouchableOpacity 
            style={styles.tambahpengeluaran}
            onPress={() => navigation.navigate('AddPengeluaran')}
            >
                <Text>Add Expenses</Text>
        </TouchableOpacity>
        </View>

        <Text style={styles.recent}>
            Recent Activity
        </Text>

        <FlatList
        data={thrMasuk}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <InfoTHR item={item} />}
        />

        <FlatList 
        data={PengeluaranMasuk}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <InfoPengeluaran item={item} />}
        />
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
    amount:{
        fontSize: '24',
        fontWeight: 'bold',
    },
    totalthrcontainer: {
        alignItems: "left",
        width: '200',
        Height: '90',
        padding: '20',
        borderRadius: '10',
        backgroundColor: '#a12cc5'
    },
    totalthr: {
        fontSize: '14',
        color: '#e4e4e4',
    },
    totalpengeluarancontainer: {
        alignItems: "left",
        width: '100',
        Height: '60',
        padding: '20',
        borderRadius: '10',
        backgroundColor: '#c42c2c'
    },
    tambahthr: {
        width: '70',
        borderRadius: '10',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#a12cc5',
        color: 'white'
    },
    tambahpengeluaran: {
        width: '70',
        borderRadius: '10',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#a12cc5',
        color: 'white'
    },
    recent: {
        fontSize: '16',
        fontWeight: 'bold',
        alignItems: 'left',
        marginLeft: '20',
        marginBottom:'20',
    }


})

export default HomeScreen;