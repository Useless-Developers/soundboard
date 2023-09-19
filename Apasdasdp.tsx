import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { Audio } from 'expo-av';

import { Soundboard } from '@/screens'
import { useEffect, useState } from 'react';
import { Button, View } from 'react-native';

/**
 * Main entrypoint
 */
export const App = () => {
  const [sound, setSound] = useState();

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(require('./assets/sounds/9.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
        console.log('Unloading Sound');
        sound.unloadAsync();
      }
      : undefined;
  }, [sound]);

  return (
    <SafeAreaProvider>
      <StatusBar style='auto' />

      <Button title="Play Sound" onPress={playSound} />
      <Button title="Play Sound" onPress={playSound} />
      <Button title="Play Sound" onPress={playSound} />
      <Button title="Play Sound" onPress={playSound} />
      <Button title="Play Sound" onPress={playSound} />
      <Button title="Play Sound" onPress={playSound} />
      {/* <Soundboard /> */}
    </SafeAreaProvider>
  )
}

export default App
