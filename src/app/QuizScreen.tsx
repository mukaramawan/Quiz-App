import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import QuestionCard from '../components/QuestionCard'

function QuizScreen() {
  return (
    <SafeAreaView style={styles.screen}>
    <View style={styles.container}>
        
    <View>
        <Text style={styles.Qnumber}>Question 1/5</Text>
    </View>

    <View>
      <QuestionCard/>
      <Text style={styles.Qtime}>20 sec</Text>
      </View>

      <View>
        <Text>Footer</Text>
      </View>
    </View>
    </SafeAreaView>
  )
}

export default QuizScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    container: {
        backgroundColor: 'fdfef4',
        flex: 1,
        justifyContent: 'space-between',
        padding: 20, 
    },
    Qnumber: {
        textAlign: 'center',
        color: '#005055'
    },
    Qtime: {
        textAlign: 'center',
        marginTop: 15,
        fontWeight: 'bold',
        color: '#005055',
    }
})