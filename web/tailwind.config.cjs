module.exports = {
  content: ['./index.html', './src/**/*.tsx'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },

      backgroundImage: {
        'galaxy': "url('/background-galaxy.png')",
        'nlw-gradient':
          'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(149,114,252,1) 0%, rgba(91,197,196,1) 30%, rgba(67,231,173,1) 70%, rgba(225,213,93,1) 100%)',
        'game-gradient':
          'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)',
      },

      screens: {
        mobile: '320px',
        tablet: '768px',
        laptop: '1024px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
