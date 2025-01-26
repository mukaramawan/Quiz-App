import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Option = () => {
  return (
    <View style={styles.container}>
      <Text>This an Option</Text>
    </View>
  )
}

export default Option

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        padding: 20,
        borderColor: 'lightgrey',
        borderRadius: 100,
    },
})