import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Audio } from 'expo-av';

export default function App() {
  const [sound, setSound] = React.useState();
  const [sound2, setSound2] = React.useState();

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(require('./assets/sounds/4.mp3'), {shouldPlay: true})
    setSound(sound);

    console.log('Playing Sound');
  }

  async function playSound2() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(require('./assets/sounds/9.mp3'), {shouldPlay: true})
    
    setSound2(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
        console.log('Unloading Sound');
        sound.unloadAsync();
      }
      : undefined;
  }, [sound]);


  React.useEffect(() => {
    return sound2
      ? () => {
        console.log('Unloading Sound');
        sound2.unloadAsync();
      }
      : undefined;
  }, [sound2]);

  return (
    <View style={styles.container}>
      <Button title="Play Sound" onPress={playSound} />
      <Button title="Play2 Sound" onPress={playSound2} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 10,
  },
});

