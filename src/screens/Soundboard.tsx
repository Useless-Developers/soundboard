import { useRef } from 'react'
import { FlatList, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as SplashScreen from 'expo-splash-screen'
import { Button, Txt, View } from '@/components'
import { SOUNDS } from '@/constants'
import { tw } from '@/lib'

/**
 * Soundboard screen
 */
export const Soundboard = () => {
  // We want to hide the splashscreen once our flatlist has rendered
  const onViewableItemsChanged = useRef(() => SplashScreen.hideAsync()).current

  return (
    <SafeAreaView style={tw`flex-1 justify-center items-center`}>
      {/* Header */}
      <View className='mb-8 items-center gap-4'>
        <Image source={require('../../assets/images/chacha-border.png')} style={tw`h-36 w-24`} />
        <Txt className='text-3xl font-extrabold text-text'>Cha Chaaa Soundboard</Txt>
      </View>

      {/* Soundboard Body */}
      <FlatList
        columnWrapperStyle={tw`gap-2`}
        contentContainerStyle={tw`gap-2 items-stretch justify-center`}
        data={SOUNDS}
        keyExtractor={sound => sound.label}
        numColumns={3}
        onViewableItemsChanged={onViewableItemsChanged}
        renderItem={({ item: { file, label } }) => <Button file={file} key={label} label={label} />}
        style={tw`p-4 w-full grow-0`}
      />
    </SafeAreaView>
  )
}
