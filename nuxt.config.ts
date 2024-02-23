// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    'nuxt-graphql-client',
  ],
  css: [
    '~/assets/css/tailwind.output.css',
  ],
  // tailwindcss: {
  //   cssPath: '~/assets/css/tailwind.css',
  //   configPath: 'tailwind.config',
  //   exposeConfig: false,
  //   exposeLevel: 2,
  //   config: {},
  //   injectPosition: 'first',
  //   viewer: true,
  // },
  // "graphql-client": {
  //   codegen: {
  //     avoidOptionals: true
  //   }
  // },
  runtimeConfig: {
    public: {
      GQL_HOST: 'https://api.spacex.land/graphql' // overwritten by process.env.GQL_HOST
    }
  }
})
