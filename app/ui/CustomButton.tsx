// CustomButton.tsx
import React from "react";
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from "react-native";

interface CustomButtonProps {
  onPress: () => void;
  icon: React.ReactNode;
  title: string;
  style?: ViewStyle;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  onPress,
  icon,
  title,
  style,
}) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      {icon}
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: "#bfdbfe",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,
    flex: 1,
  },
  buttonText: {
    marginLeft: 8,
    fontSize: 16,
    color: "black",
  },
});

export default CustomButton;
