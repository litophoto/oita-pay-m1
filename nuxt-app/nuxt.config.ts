import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: [
    // "@/assets/css/main.css",
    "@/assets/scss/bootstrap-my-style.scss",
    "bootstrap-icons/font/bootstrap-icons.scss",
  ],
  script: [
    "bootstrap/dist/js/bootstrap.min.js"
  ],
})
