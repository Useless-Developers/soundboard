import { Button as RNButton } from 'react-native'
import { Audio } from 'expo-av'

import type { SoundClip } from '@/constants/sounds'
import { useEffect, useState } from 'react'
import { Sound } from 'expo-av/build/Audio'

type ButtonProps = SoundClip

/**
 * Button Component
 *
 * Handles playing the sounds
 *
 * @param props
 * @param props.file - the required mp3 file
 * @param props.label - button label
 */
export const Button = ({ file, label }: ButtonProps) => {
  const [sound, setSound] = useState<null | Sound>(null);

  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(file, { shouldPlay: true })
    setSound(sound)
  }

  useEffect(() => {
    return sound
      ? () => {
        sound?.unloadAsync();
      }
      : undefined;
  }, [sound]);

  return (
    <RNButton
      // style={tw`border-fg text-fg border-fg rounded-full`}
      onPress={playSound}
      title={label}
    />
  )
}
