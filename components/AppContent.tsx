import { StyleSheet, ImageBackground } from 'react-native';
import SaveAreaLayout from './Layouts/SaveAreaLayout';
import StartGameScreen from '../screen/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from '../screen/GameScreen';
import { Colors } from '../enums/colors';
import GameOverScreen from '../screen/GameOverScreen';

const AppContent = () => {
  const [userNumber, setUserNumber] = useState<number | null>(null);
  const [gameIsOver, setGameIsOver] = useState<boolean>(false);
  const [guessRounds, setGuessRounds] = useState<number>(0);

  function pickedNumberHandler(chosenNumber: number) {
    setUserNumber(chosenNumber);
    setGameIsOver(false);
  }

  function gameOverHandler(numberOfRounds: number) {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  }

  function startNewGameHandler() {
    setUserNumber(null);
    setGuessRounds(0);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (gameIsOver && userNumber) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        roundsNumber={guessRounds}
        onStartNewGame={startNewGameHandler}
      />
    );
  }

  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.appContent}
    >
      <ImageBackground
        source={require('../assets/images/background.png')}
        style={styles.appContent}
        resizeMode="cover"
        imageStyle={styles.backgroundImage}
      >
        <SaveAreaLayout style={styles.container}>{screen}</SaveAreaLayout>
      </ImageBackground>
    </LinearGradient>
  );
};

export default AppContent;

const styles = StyleSheet.create({
  appContent: {
    flex: 1,
  },
  container: {},
  backgroundImage: {
    opacity: 0.15,
  },
});
