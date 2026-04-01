import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "THR_APP_STATE";

export const saveData = async (state) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.log("Gagal simpan:", e);
  }
};

export const loadData = async () => {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : null;
  } catch (e) {
    console.log("Gagal load:", e);
    return null;
  }
};