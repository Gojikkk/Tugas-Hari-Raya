import React from "react";
import {View, Text, FlatList, StyleSheet} from "react-native";
import { useTHR } from "../hooks/useTHR"
import FilterBar from "../components/FilterBar"
import InfoTHR from "../components/InfoTHR";
import InfoPengeluaran from "../components/InfoPengeluaran";

const HistoryScreen = () => {
    const { thrMasuk, pengelaraMasuk, totalThr, totalPengeluaran} = useTHR();

    return (
        <View style={styles.container}>

        <View style={styles.totalthrcontainer}>
            <Text style={styles.totalthr}>Total THR</Text>
            <Text style={styles.amount}> Rp {totalThr} </Text>
        </View>

        <FilterBar/>

        <FlatList
        data={thrMasuk}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <InfoTHR item={item} />}
        />

        <FlatList 
        data={pengelaraMasuk}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <InfoPengeluaran item={item} />}
        />

        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
    backgroundColor: '#e8e4f3',
    flex: 1
    }
})

export default HistoryScreen;