import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTHR } from "../hooks/useTHR";

const ProfileScreen = () => {
  const { totalThr, totalPengeluaran, thrMasuk, pengeluaranMasuk } = useTHR();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Total Pemasukan</Text>
        <Text style={styles.value}>Rp {totalThr}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Total Pengeluaran</Text>
        <Text style={styles.value}>Rp {totalPengeluaran}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Jumlah Data Pemasukan</Text>
        <Text style={styles.value}>{thrMasuk.length} data</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Jumlah Data Pengeluaran</Text>
        <Text style={styles.value}>{pengeluaranMasuk.length} data</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#e4e4e4",
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    color: "#555",
  },
  value: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ProfileScreen;