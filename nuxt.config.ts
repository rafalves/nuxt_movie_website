// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "@nuxt/devtools"
  ],
  runtimeConfig: {
    apiAccessToken: "",
    public: {
      apiBaseUrl: "https://api.themoviedb.org/3",
      imgBaseUrl: "https://image.tmdb.org/t/p/w500",
    },
  },
});
