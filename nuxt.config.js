export default {
  server: {
    host: "0",
  },
  components: true,
  target: "static",

  head: {
    title: "Mirllex — pos system",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
      { name: "robots", content: "index, follow" },
      {
        hid: "description",
        name: "description",
        content: "Mirllex — pos system",
      },
      {
        hid: "og:description",
        name: "og:description",
        content: "Mirllex — pos system",
      },
      {
        name: "keywords",
        content: "Mirllex Pos PosSystem System Termia",
      },
      // {
      //   hid: "og:image",
      //   name: "og:image",
      //   content: "https://amina-osimi.com/amina-photo.jpg",
      // },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css",
      },
    ],
  },

  css: ["~/assets/scss/index.scss"],

  styleResources: {
    scss: ["~assets/scss/_responsive.scss", "~assets/scss/_variables.scss"],
  },

  plugins: [
    {
      src: '~/plugins/plugins.js',
    },
  ],

  modules: ["@nuxtjs/axios"],

  buildModules: ["@nuxtjs/style-resources"],

  build: {
    scss: {
      implementation: require("sass"),
    },
  },

  pageTransition: "page-transition",

  // axios: {
  //   headers: {
  //     common: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //     withCredentials: true,
  //   },
  //   baseURL: 'https://spacefarm.ai/server'
  // },
  axios: {
    baseURL: "http://localhost:8000"  // here set your API url
  },

};
