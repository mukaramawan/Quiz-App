import { StyleSheet, Text, View } from "react-native";
import React from "react";

const QuestionCard = () => {
  return (
    <View style={styles.QuestionCard}>
      <Text style={styles.Question}>What is React Native</Text>
    </View>
  );
};

export default QuestionCard;

const styles = StyleSheet.create({
  QuestionCard: {
    backgroundColor: "white",
    padding: 20,
    paddingVertical: 40,
    borderRadius: 20,

    //shadows
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  Question: {
    fontSize: 24,
    fontWeight: "500",
  },
});
