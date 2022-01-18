module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'customHeight' : "calc(100vh - 57px)"
      },
      colors: {
        NealabDarkRed : '#2E1114',
        NealabRed: '#501B1D',
        NealabDarkPink: '#64485C',
        NealabPink: '#83677B',
        NealabGray: '#ADADAD'
      },
      fontFamily: {
        Rasa: ["Rasa", 'serif'],
       },
    
    },
  },
  plugins: [],
}
