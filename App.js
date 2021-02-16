import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Header from './components/Header.component'
import StartGamePage from './pages/StartGame.page'
import GamePage from './pages/Game.page'
import GameOverPage from './pages/GameOver.page'

export default function App() {
  const [userNumber, setUserNumber] = useState()
  const [numOfGuess, setNumOfGuess] = useState(0)

  const handleStartGame = selectedNumber => {
    setUserNumber(selectedNumber)
  }

  const handleGameOver = numOfRounds => {
    setNumOfGuess(numOfRounds)
  }

  const handleNewGame = () => {
    setUserNumber(null)
    setNumOfGuess(0)
  }

  let content = <StartGamePage onStartGame={handleStartGame} />

  if (userNumber && numOfGuess <= 0) {
    content = <GamePage userChoice={userNumber} onGameOver={handleGameOver} />
  } else if (numOfGuess > 0) {
    content = (
      <GameOverPage
        rounds={numOfGuess}
        userNumber={userNumber}
        onRestartGame={handleNewGame}
      />
    )
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess A Number" />
      {content}
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
})
