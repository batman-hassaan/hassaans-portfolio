// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         display: ['Clash Display', 'sans-serif'],
//         body: ['Cabinet Grotesk', 'sans-serif'],
//         mono: ['JetBrains Mono', 'monospace'],
//       },
//       colors: {
//         purple: {
//           50: '#faf5ff',
//           100: '#f3e8ff',
//           200: '#e9d5ff',
//           300: '#d8b4fe',
//           400: '#c084fc',
//           500: '#a855f7',
//           600: '#9333ea',
//           700: '#7e22ce',
//           800: '#6b21a8',
//           900: '#581c87',
//           950: '#3b0764',
//         },
//         violet: {
//           glow: 'rgba(168, 85, 247, 0.15)',
//         }
//       },
//       animation: {
//         'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
//         'fade-in': 'fadeIn 0.6s ease forwards',
//         'float': 'float 6s ease-in-out infinite',
//         'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
//         'slide-right': 'slideRight 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
//         'spin-slow': 'spin 8s linear infinite',
//         'marquee': 'marquee 25s linear infinite',
//       },
//       keyframes: {
//         fadeUp: {
//           from: { opacity: '0', transform: 'translateY(40px)' },
//           to: { opacity: '1', transform: 'translateY(0)' },
//         },
//         fadeIn: {
//           from: { opacity: '0' },
//           to: { opacity: '1' },
//         },
//         float: {
//           '0%, 100%': { transform: 'translateY(0px)' },
//           '50%': { transform: 'translateY(-12px)' },
//         },
//         pulseGlow: {
//           '0%, 100%': { boxShadow: '0 0 20px rgba(168, 85, 247, 0.3)' },
//           '50%': { boxShadow: '0 0 40px rgba(168, 85, 247, 0.6)' },
//         },
//         slideRight: {
//           from: { transform: 'scaleX(0)' },
//           to: { transform: 'scaleX(1)' },
//         },
//         marquee: {
//           '0%': { transform: 'translateX(0)' },
//           '100%': { transform: 'translateX(-50%)' },
//         },
//       },
//       backdropBlur: {
//         xs: '2px',
//       },
//     },
//   },
//   plugins: [],
// }


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Syne', 'sans-serif'],
        'mono': ['Space Grotesk', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}