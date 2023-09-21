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
      projectId: '294b5fcb-f754-40f3-99af-c87497708762',
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
