//fs = module.require('fs');
//querystring = module.require('querystring');
/*var langconfig = fs.readFile(__dirname + "/jsoncontent.json", (err, data) => {
  if (err) throw err;

}); */

module.exports = {
  base: "/docs", // For travis to publish
  evergreen: true, // Désactive la compatibilité pour les anciens navigateurs
                  // Gain de temps en build
  dest: "docs",
  head: [
    ['link', { rel : "icon", href: "/assets/docs_favicon.ico"}],
  ],

  title: "Docs",
  description : "Docs", // Le système de langue la remplace

  themeConfig: {
    logo: '/assets/docs_favicon.ico',
    search: false, // désactive la barre de recherche
    activeHeaderLinks: true, // Gain de perf?
    smoothScroll: false, // Gain de perf + correction erreur console
  },
};

module.exports.locales = {
  '/': {
    lang: 'fr-FR',
    description: "La documentation de sergyland."
  },
  '/en/': {
    lang: 'en-US',
    description: "Documentation for sergyland."
  }
};

module.exports.themeConfig.locales = {
  '/': {
    selectText: 'Langue',
    label: 'Français',
    nav: [
      { text: "Accueil", link: "/" },
      { text: "A propos", link: "/about" }
    ],
  },

  '/en/' : {
    selectText: 'Language',
    label: 'English',
    nav: [
      { text: "Home", link: "/en/" },
      { text: "About", link: "/en/about" }
    ],
  }
};