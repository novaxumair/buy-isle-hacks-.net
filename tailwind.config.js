/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        z: {
          bg: '#08060f',
          elevated: '#0c0a1a',
          band: '#100c1a',
          card: '#14101f',
          hover: '#1a1529',
          ink: '#f3f0ff',
          accent: '#b040fb',
          soft: '#a78bfa',
          deep: '#7c3aed',
          success: '#c084fc',
          /** Matches The Isle wordmark red in navbar logo */
          'isle-accent': '#ff0000',
        },
      },
      fontFamily: {
        /** Body — readable Cinzel */
        sans: ['Cinzel', 'Times New Roman', 'Georgia', 'serif'],
        display: ['Cinzel', 'Times New Roman', 'Georgia', 'serif'],
      },
      letterSpacing: {
        /** Site-wide: Isle-style wide caps (overrides default tight tracking) */
        tighter: '0.04em',
        tight: '0.1em',
        normal: '0.06em',
        wide: '0.14em',
        wider: '0.2em',
        widest: '0.32em',
      },
    },
  },
  plugins: [],
}
