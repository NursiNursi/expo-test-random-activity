import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { BellSnoozeIcon } from "react-native-heroicons/outline";

interface EmptyStateProps {
  message: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({ message }) => {
  return (
    <View style={styles.stateContainer}>
      <BellSnoozeIcon size={120} strokeWidth={1} color="black" />
      <Text style={styles.stateText}>{message}</Text>
    </View>
  );
};

export default EmptyState;

const styles = StyleSheet.create({
  stateContainer: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginTop: 120,
  },
  stateText: {
    fontSize: 16,
    textAlign: "center",
    color: "gray",
  },
});
