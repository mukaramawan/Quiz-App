import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

import QuestionCard from "../components/QuestionCard";
import questions from "../assets/questions";
import Card from "../components/Card";
import Button from "../components/Button";

function QuizScreen() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const question = questions[questionIndex];

  function onNext() {
    setQuestionIndex((currentIndex) => currentIndex + 1);
  }

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <View>
          <Text style={styles.Qnumber}>Question {questionIndex + 1}/5</Text>
        </View>

        {question ? (
          <View>
            <QuestionCard Question={question} />
            <Text style={styles.Qtime}>20 sec</Text>
          </View>
        ) : (
          <Card title="Very Good!">
            <Text>Correct Answers: 3/5</Text>
          </Card>
        )}

        <Button
          title="Next"
          onPress={onNext}
          onLongPress={() => console.warn("Long Button Pressed!")}
          rightIcon={
            <FontAwesome6 name="arrow-right-long" size={16} color="white" />
          }
        />
      </View>
    </SafeAreaView>
  );
}

export default QuizScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    backgroundColor: "fdfef4",
    flex: 1,
    justifyContent: "space-between",
    padding: 20,
  },
  Qnumber: {
    textAlign: "center",
    color: "#005055",
  },
  Qtime: {
    textAlign: "center",
    marginTop: 15,
    fontWeight: "bold",
    color: "#005055",
  },
});
