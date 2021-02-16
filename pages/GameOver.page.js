import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const GameOverPage = ({ rounds, userNumber, onRestartGame }) => {
  return (
    <View style={styles.screen}>
      <Text>The game is over! Gratz!</Text>
      <Text>Rounds used: {rounds}</Text>
      <Text>Number was: {userNumber}</Text>
      <Button title="NEW GAME" onPress={onRestartGame} />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default GameOverPage
