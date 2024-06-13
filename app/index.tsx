import React, { useState, useEffect } from "react";
import { StyleSheet, Alert } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import GenerateActivity from "./components/GenerateActivity";
import SavedActivities from "./components/SavedActivities";

import {
  fetchData as fetchDataService,
  loadSavedData,
  saveData,
} from "./helper/api";
import { Data } from "./types/types";

const App = () => {
  const [data, setData] = useState<Data | undefined>(undefined);
  const [savedData, setSavedData] = useState<Data[]>([]);

  useEffect(() => {
    const initializeData = async () => {
      const initialData = await fetchDataService();
      setData(initialData);
      const initialSavedData = await loadSavedData();
      setSavedData(initialSavedData);
    };
    initializeData();
  }, []);

  const fetchData = async () => {
    const newData = await fetchDataService();
    setData(newData);
  };

  const handleSave = async () => {
    if (data) {
      const updatedSavedData = [...savedData, data];
      setSavedData(updatedSavedData);
      await saveData(updatedSavedData);
      const newData = await fetchDataService();
      setData(newData);
    }
  };

  const handleDelete = async (index: number) => {
    Alert.alert(
      "Confirmation",
      "Are you sure you want to delete this item?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: async () => {
            const updatedSavedData = savedData.filter((_, i) => i !== index);
            setSavedData(updatedSavedData);
            await saveData(updatedSavedData);
          },
          style: "destructive",
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <LinearGradient
      colors={["rgba(58, 131, 244, 0.4)", "rgba(9, 181, 211, 0.4)"]}
      style={styles.gradient}
    >
      <SavedActivities savedData={savedData} handleDelete={handleDelete} />
      <GenerateActivity
        data={data}
        fetchData={fetchData}
        handleSave={handleSave}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    width: "100%",
    flex: 1,
  },
});

export default App;
