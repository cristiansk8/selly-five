import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  extends: ['./woonuxt_base'],
  modules: ["woonuxt-settings"],
  components: [{ path: './components', pathPrefix: false }],
  nitro: {
    prerender: {
      concurrency: 10,
      interval: 1000,
      failOnError: false,
    },
  },
});