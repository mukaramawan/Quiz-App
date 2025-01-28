import React from "react";
import { StyleSheet, View } from "react-native";
import Option from "./Option";
import Card from "./Card";
import { question } from "../assets/Types";

type QuestionCard = {
  Question: question;
};

export default function QuestionCard({ Question }: QuestionCard) {
  return (
    <Card title={Question.title}>
      <View style={{ gap: 10 }}>
        {Question.options.map((option) => (
          <Option key={option} option={option} />
        ))}
      </View>
    </Card>
  );
}

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
