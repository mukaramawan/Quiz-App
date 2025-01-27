import { StyleSheet, Text, Pressable } from "react-native";
import React from "react";

type option = {
  option: string;
  isSelected: boolean;
  onPress: () => void;
};

const Option = ({ option, isSelected, onPress }: option) => {
  return (
    <Pressable
      style={[
        styles.container,
        isSelected && {
          backgroundColor: "#e1f396",
          borderColor: "#e1f396",
        },
      ]}
      onPress={onPress}
    >
      <Text>{option}</Text>
    </Pressable>
  );
};

export default Option;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    padding: 20,
    borderColor: "lightgrey",
    borderRadius: 100,
  },
});
