import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { Soundboard } from '@/screens'

/**
 * Main entrypoint
 */
export const App = () => (
  <SafeAreaProvider>
    <StatusBar style='auto' />
    <Soundboard />
  </SafeAreaProvider>
)

export default App
