import React from "react";
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { TrashIcon } from "react-native-heroicons/outline";

interface SavedActivityItemProps {
  index: number;
  item: { activity?: string };
  handleDelete: (index: number) => void;
}

const SavedActivityItem: React.FC<SavedActivityItemProps> = ({
  index,
  item,
  handleDelete,
}) => {
  return (
    <View style={styles.activityItem}>
      <Pressable style={styles.activityContent}>
        <Text>{item.activity}</Text>
      </Pressable>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => handleDelete(index)}
      >
        <TrashIcon color="red" size={24} />
      </TouchableOpacity>
    </View>
  );
};

export default SavedActivityItem;

const styles = StyleSheet.create({
  deleteButton: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 14,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  activityItem: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
    width: "86%",
    alignItems: "center",
  },
  activityContent: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    marginLeft: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
