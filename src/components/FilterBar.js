import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import { useTHR } from "../hooks/useTHR";

const FilterBar = () => {
  const { filter, setFilter } = useTHR();

  return (
    <View style={styles.container}>

      <TouchableOpacity
        onPress={() => setFilter("ALL")}
        style={[styles.kategori, filter === "ALL" && styles.activeKategori]}
      >
        <Text style={styles.text}>All</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setFilter("PEMASUKAN")}
        style={[styles.kategori, filter === "PEMASUKAN" && styles.activeKategori]}
      >
        <Text style={[styles.text, filter === "PEMASUKAN" && styles.activeText]}>Pemasukan</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setFilter("PENGELUARAN")}
        style={[styles.kategori, filter === "PENGELUARAN" && styles.activeKategori]}
      >
        <Text style={[styles.text, filter === "PENGELUARAN" && styles.activeText]}>Pengeluaran</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  kategori: {
    backgroundColor: "rgb(210, 210, 210)",
    padding: 10,
    borderRadius: 15,
  },
  activeKategori: {
    backgroundColor: "#8A70D6",
    color: 'white'
  },
  text: {
    color: "#605D66",
    fontWeight: "bold",
  },
  activeText: {
    color: 'white',
    fontWeight: 'bold'
  }
});

export default FilterBar;