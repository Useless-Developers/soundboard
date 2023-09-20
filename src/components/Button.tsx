import { useEffect, useState } from 'react'
import { Pressable } from 'react-native'
import { Audio } from 'expo-av'
import { Sound } from 'expo-av/build/Audio'
import type { SoundClip } from '@/constants/sounds'
import { tw } from '@/lib'

import { Txt } from './Txt'

type ButtonProps = SoundClip

const BASE_STYLE = 'border-primary border-2 rounded-xl h-24 flex-1 items-center justify-center p-3'

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
  const [audioSound, setAudioSound] = useState<null | Sound>(null)

  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(file, { shouldPlay: true })
    setAudioSound(sound)
  }

  useEffect(
    () =>
      audioSound
        ? () => {
          audioSound?.unloadAsync()
        }
        : undefined,
    [audioSound],
  )

  return (
    <Pressable
      onPress={playSound}
      style={({ pressed }) => (pressed ? tw`${BASE_STYLE} bg-primary` : tw`${BASE_STYLE}`)}
    >
      {({ pressed }) => (
        <Txt className={`text-xl ${pressed ? 'text-bg' : 'text-text'}`}>{label}</Txt>
      )}
    </Pressable>
  )
}
