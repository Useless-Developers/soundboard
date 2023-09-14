import { Button as RNButton } from 'react-native'
import { Audio } from 'expo-av'

import type { SoundClip } from '@/constants/sounds'

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
  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(file)
    await sound?.playAsync()
  }

  return (
    <RNButton
      // style={tw`border-fg text-fg border-fg rounded-full`}
      onPress={playSound}
      title={label}
    />
  )
}
