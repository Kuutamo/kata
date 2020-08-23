export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  target: 'server',
  head: {
    title: process.env.npm_package_name || '',
    htmlAttrs: {
      lang: 'fi',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      {
        hid: 'description',
        name: 'description',
        content: 'Kata: number to LCD',
      },
      {
        hid: 'author',
        name: 'author',
        content: 'Markus Norrgran',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/icon.svg',
      },
      {
        rel: 'apple-touch-icon',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Lato&display=swap',
      },
    ],
  },
  css: ['@/assets/main.scss'],
  components: true,
  buildModules: ['@nuxtjs/eslint-module'],
  modules: ['bootstrap-vue/nuxt'],
}
