// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "@nuxt/devtools"
  ],
  runtimeConfig: {
    apiAccessToken: "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNDNiODI2YTY1Zjc5NjEzYzRmYjIzZTJlMDdlNmYwZiIsInN1YiI6IjYyOGEyZDZhMjQ5NWFiNTI3ZGQwYWU2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qINsKnzOaTLkUGn0Q0vYjCpmM4XWqQm44gKG4PouDkg",
    public: {
      apiBaseUrl: "https://api.themoviedb.org/3",
      imgBaseUrl: "https://image.tmdb.org/t/p/w500",
    },
  },
});
