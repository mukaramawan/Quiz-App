import React from "react";
import { StyleSheet, Text, Pressable } from "react-native";
import { useQuizContext } from "../providers/QuizProvider";

type option = {
  option: string;
};

const Option = ({ option }: option) => {
  const { selectedOption, setSelectedOption } = useQuizContext();

  const isSelected = selectedOption == option;

  return (
    <Pressable
      style={[
        styles.container,
        isSelected && {
          backgroundColor: "#e1f396",
          borderColor: "#e1f396",
        },
      ]}
      onPress={() => setSelectedOption(option)}
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
