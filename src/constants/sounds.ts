import type { AVPlaybackSource } from 'expo-av'

export type SoundClip = { file: AVPlaybackSource; label: string }

export const SOUNDS = [
  { file: require('assets/sounds/1.mp3'), label: 'Salayo chak' },
  { file: require('assets/sounds/2.mp3'), label: 'HAIII' },
  { file: require('assets/sounds/3.mp3'), label: 'Yea Baby' },
  { file: require('assets/sounds/4.mp3'), label: 'Cha Chaa' },
  { file: require('assets/sounds/5.mp3'), label: 'Cha Chaaa' },
  { file: require('assets/sounds/8.mp3'), label: 'Chak Ke' },
  { file: require('assets/sounds/7.mp3'), label: 'Ye Ye Ye' },
  { file: require('assets/sounds/8.mp3'), label: 'Yooooo' },
  { file: require('assets/sounds/9.mp3'), label: 'Oh Ah Naa' },
] as SoundClip[]
