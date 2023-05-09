import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      primary: '#125251',
      secondary: '#ffbf1d',
      light: '#f1f1f1',
      dark: '#1f1f1f',
    },
  },
  shortcuts: [
    {
      'bg-base': 'bg-white dark:bg-dark',

      'text-base': 'text-black dark:text-white',
      'text-base-low': 'text-gray-500 dark:text-white',

      'border-base': 'border-gray-200 dark:border-gray-700',
    },
    [/^bg-fade-(\w+)$/, $ => `absolute h-full top-0 bg-gradient-to-${$[1]} ${$[1] === 'r' ? 'left-0' : 'right-0'} from-white dark:from-dark to-transparent w-40 z-9 pointer-events-none`],
  ],
  presets: [
    presetAttributify(),
    presetIcons({
      prefix: [''],
      scale: 1.3,
    }),
    presetUno(),
  ],
})
