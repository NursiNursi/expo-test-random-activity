import React, { useMemo } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

import { Bars3CenterLeftIcon, BellIcon } from "react-native-heroicons/outline";

import SavedActivityItem from "./SavedActivityItem";
import EmptyState from "../ui/EmptyState";

interface Data {
  activity?: string;
}

interface SavedActivitiesProps {
  savedData: Data[] | null;
  handleDelete: (index: number) => void;
}

const SavedActivities: React.FC<SavedActivitiesProps> = ({
  savedData,
  handleDelete,
}) => {
  const renderSavedActivities = useMemo(() => {
    return savedData && savedData.length > 0 ? (
      savedData.map((item, index) => (
        <SavedActivityItem
          key={index}
          index={index}
          item={item}
          handleDelete={handleDelete}
        />
      ))
    ) : (
      <EmptyState message="No saved activities yet. Add some to see them here!" />
    );
  }, [savedData, handleDelete]);

  return (
    <ScrollView style={styles.savedDataContainer}>
      <View style={styles.topNavbar}>
        <Bars3CenterLeftIcon size={30} strokeWidth={2} color="black" />
        <BellIcon size={30} strokeWidth={1} color="black" />
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.savedDataHeader}>
          👋 <Text style={styles.normalText}>Hello, </Text>Nursi
        </Text>
        <Text style={styles.subtitle}>Have a nice day!</Text>
      </View>
      {renderSavedActivities}
    </ScrollView>
  );
};

export default React.memo(SavedActivities);

const styles = StyleSheet.create({
  savedDataContainer: {
    padding: 12,
  },
  topNavbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
    marginBottom: 24,
    marginHorizontal: 8,
  },
  headerContainer: {
    marginBottom: 20,
    marginHorizontal: 10,
  },
  savedDataHeader: {
    fontSize: 30,
    fontWeight: "700",
    marginBottom: 10,
  },
  normalText: {
    fontWeight: "normal",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "300",
  },
});
