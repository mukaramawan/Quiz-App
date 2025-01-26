import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Option from "./Option";

const QuestionCard = () => {
  return (
    <View style={styles.QuestionCard}>
      <Text style={styles.Question}>What is React Native</Text>
      <View style={{gap: 10,}}>
        <Option />
        <Option />
        <Option />
        <Option />
      </View>
    </View>
  );
};

export default QuestionCard;

const styles = StyleSheet.create({
  QuestionCard: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    paddingVertical: 40,
    gap: 20,
    
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
    lineHeight: 30,
  },
});
