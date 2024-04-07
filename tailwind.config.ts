import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      primary: 'var(--albert-sans)',
    },
    boxShadow: {
      DEFAULT: '0 8px 32px #18181B1F',
    },
    extend: {
      colors: {
        green: '#00C28A',
      },
    },
  },
  plugins: [],
}

export default config
