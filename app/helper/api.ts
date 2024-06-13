import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Data } from "../types/types";

const axiosInstance = axios.create({
  baseURL: "https://bored.api.lewagon.com/api",
  timeout: 10000,
});

export const fetchData = async (): Promise<Data | undefined> => {
  try {
    const response = await axiosInstance.get<Data>("/activity");
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error fetching data:", error.message);
    } else {
      console.error("Unexpected error fetching data:", error);
    }
    return undefined;
  }
};

export const loadSavedData = async (): Promise<Data[]> => {
  try {
    const savedDataString = await AsyncStorage.getItem("savedData");
    return savedDataString ? JSON.parse(savedDataString) : [];
  } catch (error) {
    console.error("Error loading saved data:", error);
    return [];
  }
};

export const saveData = async (updatedSavedData: Data[]): Promise<void> => {
  try {
    await AsyncStorage.setItem("savedData", JSON.stringify(updatedSavedData));
  } catch (error) {
    console.error("Error saving data:", error);
  }
};
