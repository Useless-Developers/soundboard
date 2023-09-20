import { FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button, Txt, View } from '@/components'
import { SOUNDS } from '@/constants'
import { tw } from '@/lib'

/**
 * Soundboard screen
 */
export const Soundboard = () => (
  <SafeAreaView style={tw`flex-1 justify-center items-center`}>
    {/* Header */}
    {/* <View className=''> */}
    {/*   <Txt className='text-sm'>Welcome to the Cha Cha Soundboard</Txt> */}
    {/* </View> */}

    {/* Soundboard Body */}
    <FlatList
      columnWrapperStyle={tw`gap-4`}
      contentContainerStyle={tw`gap-4 items-stretch justify-center`}
      data={SOUNDS}
      keyExtractor={sound => sound.label}
      numColumns={3}
      renderItem={({ item: { file, label } }) => <Button file={file} key={label} label={label} />}
      style={tw`p-4 w-full`}
    />
  </SafeAreaView>
)
