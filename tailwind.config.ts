import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    './components/**/*.{vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.ts',
    './plugins/**/*.ts',
    './App.{ts,vue}',
    './app.{ts,vue}',
    './Error.{ts,vue}',
    './error.{ts,vue}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      zIndex: {
        999: '999',
      },
    },
  },
}
