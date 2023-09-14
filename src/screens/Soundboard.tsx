import { SafeAreaView } from 'react-native-safe-area-context'

import { Button, Txt, View } from '@/components'
import { SOUNDS } from '@/constants'

/**
 * Soundboard screen
 */
export const Soundboard = () => (
  <SafeAreaView style={{ flex: 1 }}>
    {/* Header */}
    <View className='pt-36'>
      <Txt className='text-sm'>Welcome to the Cha Cha Soundboard</Txt>
    </View>

    {/* Soundboard Body */}
    <View className='flex-row flex-wrap'>
      {SOUNDS.map(({ file, label }) => (
        <Button file={file} key={label} label={label} />
      ))}
    </View>
  </SafeAreaView>
)
