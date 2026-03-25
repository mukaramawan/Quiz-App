import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

import QuizScreen from "./src/app/QuizScreen";
import QuizProvider from "./src/providers/QuizProvider";

import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <QuizProvider>
        <QuizScreen />
      </QuizProvider>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});
