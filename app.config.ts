import { ExpoConfig } from 'expo/config'

const config: ExpoConfig = {
  android: {
    adaptiveIcon: {
      backgroundColor: '#ffffff',
      foregroundImage: './assets/adaptive-icon.png',
    },
    package: 'com.uselessdevelopers.chachasoundboard'
  },
  assetBundlePatterns: ['**/*'],
  backgroundColor: '#282a36',
  experiments: {
    tsconfigPaths: true,
  },
  extra: {
    eas: {
      projectId: "943e7ad3-ca3b-4667-a5fc-131914078ab1"
    }
  },
  icon: './assets/icon.png',
  ios: {
    supportsTablet: true,
  },
  name: 'soundboard',
  orientation: 'portrait',
  slug: 'soundboard',
  splash: {
    backgroundColor: '#ffffff',
    image: './assets/splash.png',
    resizeMode: 'contain',
  },
  userInterfaceStyle: 'automatic',
  version: '0.0.1',
  web: {
    favicon: './assets/favicon.png',
  },
}

export default config
