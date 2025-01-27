import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Option from "./Option";
import { question } from "../assets/Types";

type QuestionCard = {
  Question: question;
};

const QuestionCard = ({Question}: QuestionCard) => {
  const selectedQuestion = Question.options[1];

    function onOptionPressed (option: string) {
        console.warn("Selected: ",option)
    }

  return (
    <View style={styles.QuestionCard}>
      <Text style={styles.Question}>{Question.title}</Text>
      <View style={{ gap: 10 }}>
        <Option
          option={Question.options[0]}
          isSelected={Question.options[0] == selectedQuestion}
          onPress={() => onOptionPressed(Question.options[0])}
        />
        <Option
          option={Question.options[1]}
          isSelected={Question.options[1] == selectedQuestion}
          onPress={() => onOptionPressed(Question.options[1])}
        />
        <Option
          option={Question.options[2]}
          isSelected={Question.options[2] == selectedQuestion}
          onPress={() => onOptionPressed(Question.options[2])}
        />
        <Option
          option={Question.options[3]}
          isSelected={Question.options[3] == selectedQuestion}
          onPress={() => onOptionPressed(Question.options[3])}
        />
      </View>
    </View>
  );
};

export default QuestionCard;

const styles = StyleSheet.create({
  QuestionCard: {
    backgroundColor: "white",
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
