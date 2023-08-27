module.exports = {
  plugins: {
    tailwindcss: {},
    'tailwindcss/nesting': 'postcss-nesting',
    'postcss-preset-env': {
      features: { 'nesting-rules': false },
    },
  },
}
