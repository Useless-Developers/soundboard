import { ExpoConfig } from 'expo/config'

const config: ExpoConfig = {
  android: {
    adaptiveIcon: {
      backgroundColor: '#ffffff',
      foregroundImage: './assets/images/adaptive-icon.png',
    },
    package: 'com.uselessdevelopers.chachasoundboard',
  },
  assetBundlePatterns: ['**/*'],
  backgroundColor: '#282a36',
  experiments: {
    tsconfigPaths: true,
  },
  extra: {
    eas: {
      projectId: '943e7ad3-ca3b-4667-a5fc-131914078ab1',
    },
  },
  icon: './assets/images/icon.png',
  name: 'Cha Chaaa',
  orientation: 'portrait',
  slug: 'chachaaa',
  splash: {
    backgroundColor: '#000000',
    image: './assets/images/splash.png',
    resizeMode: 'contain',
  },
  userInterfaceStyle: 'automatic',
}

export default config
