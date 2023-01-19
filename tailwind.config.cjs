/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('./images/home.jpg')",
        'homeSev': "url('./images/service.jpg')",
        'contact': "url('./images/contact.jpg')",
        'about': "url('./images/about.jpg')",
        'join': "url('./images/join.jpg')",
        'faq': "url('./images/faq.jpg')",
        'terms': "url('./images/terms.jpg')"
      }
    },
  },
  plugins: [],
}
