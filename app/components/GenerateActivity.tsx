import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";

import CustomButton from "../ui/CustomButton";
import { ArrowPathIcon, PlusCircleIcon } from "react-native-heroicons/outline";

interface GenerateActivityProps {
  data?: {
    activity?: string;
  } | null;
  fetchData: () => void;
  handleSave: () => void;
}

const GenerateActivity: React.FC<GenerateActivityProps> = ({
  data,
  fetchData,
  handleSave,
}) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (data?.activity) {
      setLoading(false);
    }
  }, [data]);

  const handleGenerate = () => {
    setLoading(true);
    fetchData();
  };

  const handleAddToList = () => {
    setLoading(true);
    handleSave();
  };

  return (
    <View style={styles.activityContainer}>
      <Text style={styles.activityText}>
        {loading ? (
          <ActivityIndicator style={{ width: 50, height: 50 }} color={"blue"} />
        ) : (
          data?.activity || "No activity generated yet."
        )}
      </Text>

      <View style={styles.buttonContainer}>
        <CustomButton
          onPress={handleGenerate}
          icon={<ArrowPathIcon color="black" size={24} />}
          title="Generate"
        />
        <CustomButton
          onPress={handleAddToList}
          icon={<PlusCircleIcon color="black" size={24} />}
          title="Add to List"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: "#bfdbfe",
    borderRadius: 10,
    width: 154,
    alignItems: "center",
    marginVertical: 10,
    justifyContent: "center",
    flexDirection: "row",
  },
  activityContainer: {
    backgroundColor: "white",
    marginTop: 4,
    marginBottom: 24,
    marginHorizontal: 24,
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 12,
    paddingTop: 16,
    paddingBottom: 16,
    alignItems: "center",
    height: 136,
    display: "flex",
    justifyContent: "space-between",
  },
  activityText: {
    fontSize: 18,
    textAlign: "center",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
  },
  iconContainer: {
    marginRight: 8,
  },
});

export default GenerateActivity;
