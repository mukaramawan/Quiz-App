import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import QuestionCard from '../components/QuestionCard'

function QuizScreen() {
  return (
    <View style={styles.container}>
      <QuestionCard/>
    </View>
  )
}

export default QuizScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'fdfef4',
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    }
})