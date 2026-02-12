// tailwind.config.js
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {}
  },
  safelist: [
    'py-6',
    'py-4',
    'py-8',
      'py-5',
      'mb-10'
    // Add any other classes that aren't rendering
  ],
  plugins: []
};