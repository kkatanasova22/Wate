import { defineConfig } from 'vite'

export default defineConfig({
  root: 'src/',
  build: {
    rollupOptions: {
      input: {
        main: './src/index.html',
        game: './src/pages/game.html',
        coins: './src/pages/coins.html',
        christmasTheme: './src/pages/christmasTheme.html',
        continents: './src/pages/continents.html',
        globalWarming: './src/pages/globalWarming.html',
        improve: './src/pages/improve.html',
        store: './src/pages/store.html',

        africa: './src/pages/continents/africa.html',
        antarctica: './src/pages/continents/antarctica.html',
        asia: './src/pages/continents/asia.html',
        australia: './src/pages/continents/australia.html',
        europe: './src/pages/continents/europe.html',
        northAmerica: './src/pages/continents/northAmerica.html',
        southAmerica: './src/pages/continents/southAmerica.html',

        africaTranslate: './src/pages/translate/africaTranslate.html',
        antarcticaTranslate: './src/pages/translate/antarcticaTranslate.html',
        asiaTranslate: './src/pages/translate/asiaTranslate.html',
        australiaTranslate: './src/pages/translate/australiaTranslate.html',
        europeTranslate: './src/pages/translate/europeTranslate.html',
        northAmericaTranslate: './src/pages/translate/northAmericaTranslate.html',
        southAmericaTranslate: './src/pages/translate/southAmericaTranslate.html',
        improveTranslate: './src/pages/translate/improve.html'
      }
    },
  },
})