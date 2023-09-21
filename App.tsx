import { SafeAreaProvider } from 'react-native-safe-area-context'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'
import { Soundboard } from '@/screens'

SplashScreen.preventAutoHideAsync()

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
