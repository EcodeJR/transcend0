/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('./assets/images/home.jpg')",
        'homeSev': "url('./assets/images/service.jpg')",
        'contact': "url('./assets/images/contact.jpg')",
        'about': "url('./assets/images/about.jpg')",
        'join': "url('./assets/images/join.jpg')",
        'faq': "url('./assets/images/faq.jpg')",
        'terms': "url('./assets/images/terms.jpg')"
      }
    },
  },
  plugins: [],
}
