import type { Config } from 'tailwindcss'

import { COLORS } from './src/constants/colors'

export default {
  content: ['App.tsx', 'src/**/*.tsx'],
  theme: {
    colors: COLORS,
    extend: {},
  },
} satisfies Config
