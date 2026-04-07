import React from "react";
import { View, FlatList, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useTHR } from "../hooks/useTHR";
import InfoTHR from "../components/InfoTHR";
import InfoPengeluaran from "../components/InfoPengeluaran"

const HomeScreen = ({navigation}) => {
  const { thrMasuk, pengeluaranMasuk } = useTHR();
  const { totalThr, totalPengeluaran } = useTHR(); 

    const latestThr = thrMasuk.slice(-4).reverse();
    const latestPengeluaran = pengeluaranMasuk.slice(-4).reverse();

  return (
    <View style={styles.container}>
        <View style={styles.totalthrcontainer}>
            <Text style={styles.totalthr}>Total THR</Text>
            <Text style={styles.amount}> Rp. {totalThr} </Text>
        </View>

        <View>
        <View style={styles.totalpengeluarancontainer}>
                <Text style={styles.totalpengeluaran}>Total Pengeluaran</Text>
                <Text style={styles.amount2}> Rp. {totalPengeluaran} </Text>
        </View>
        </View>

        <View style={{marginTop: 20, flexDirection: "row", justifyContent: "space-between", padding: 10, gap: 20}}>
        <TouchableOpacity 
            style={styles.tambahthr}
            onPress={() => navigation.navigate('AddTHR')}
            >
                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 12}}>+ Add THR</Text>
        </TouchableOpacity>

        <TouchableOpacity 
            style={styles.tambahpengeluaran}
            onPress={() => navigation.navigate('AddPengeluaran')}
            >
                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 12}}>+ Add Expenses</Text>
        </TouchableOpacity>
        </View>

        <Text style={styles.recent}>
            Recent Activity
        </Text>

        <FlatList
        data={latestThr}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <InfoTHR item={item} />}
        />

        <FlatList 
        data={latestPengeluaran}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <InfoPengeluaran item={item} />}
        />
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#e8e4f3',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    },
    amount:{
        color:  'white',
        fontWeight: 'bold',
        fontSize: 45,
    },
    amount2:{
        color:  'white',
        fontWeight: 'bold',
        fontSize: 35,
    },
    totalthrcontainer: {
        alignItems: "flex-start",
        width: 350,
        height: 200,
        padding: 20,
        borderRadius: 30,
        backgroundColor: '#0B7A5C',
        marginBottom: 20,
        marginTop: 15
    },
    totalthr: {
        marginTop: 10,
        fontSize: 17,
        marginLeft: 5,
        color: '#e4e4e4',
        fontWeight: 'bold'
    },
    totalpengeluarancontainer: {
        alignItems: "flex-start",
        width: 350,
        height: 130,
        padding: 20,
        borderRadius: 20,
        backgroundColor: '#8b2424'
    },
    totalpengeluaran: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 17
    },
    tambahthr: {
        width: 150,
        borderRadius: 10,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#862aa3',
    },
    tambahpengeluaran: {
        width: 150,
        borderRadius: 10,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#862aa3', 
    },
    recent: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginLeft: 50,
    marginBottom: 20,
    marginTop: 20
    }


})

export default HomeScreen;