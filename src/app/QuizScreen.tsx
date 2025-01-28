import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

import QuestionCard from "../components/QuestionCard";
import questions from "../assets/questions";
import Card from "../components/Card";

function QuizScreen() {
  const question = questions[5];
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <View>
          <Text style={styles.Qnumber}>Question 1/5</Text>
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

        <Pressable
          style={styles.btn}
          onPress={() => {
            console.log("Button Pressed!");
          }}
          onLongPress={() => {
            console.log("Button Long Pressed!");
          }}
        >
          <Text style={styles.btnText}>Next</Text>
          <FontAwesome6
            name="arrow-right-long"
            size={16}
            color="white"
            style={styles.buttonIcon}
          />
        </Pressable>
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
  btn: {
    backgroundColor: "#005055",
    padding: 20,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    color: "white",
    fontSize: 16,
    fontWeight: 500,
    letterSpacing: 1.5,
  },
  buttonIcon: {
    position: "absolute",
    right: 20,
  },
});
