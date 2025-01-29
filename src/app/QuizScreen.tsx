import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

import QuestionCard from "../components/QuestionCard";
import Card from "../components/Card";
import Button from "../components/Button";
import { useQuizContext } from "../providers/QuizProvider";

function QuizScreen() {
  const { question, questionIndex, onNext, score, totalQuestions, bestScore } =
    useQuizContext();

  const [time, setTime] = useState(20);

  useEffect(() => {
    setTime(20);
    const interval = setInterval(() => {
      setTime((t) => t - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [question]);

  useEffect(() => {
    if (time <= 0) {
      onNext();
    }
  }, [time]);

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <View>
          <Text style={styles.Qnumber}>
            Question {questionIndex + 1}/{totalQuestions}
          </Text>
        </View>

        {question ? (
          <View>
            <QuestionCard Question={question} />
            <Text style={styles.Qtime}>{time} sec</Text>
          </View>
        ) : (
          <Card title="Very Good!">
            <Text>
              Correct Answers: {score}/{totalQuestions}
            </Text>
            <Text>
              Best Score: {bestScore}/{totalQuestions}
            </Text>
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
