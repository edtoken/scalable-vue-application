module.exports = {
  srcDir: "src/",

  mode: "spa",

  router: {
    middleware: ["check-auth"]
  },

  /*
  ** Headers of the page
  */
  head: {
    title: "scalable-vue-boilerplate",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Nuxt.js project" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: "#3B8070" },
  /*
  ** Build configuration
  */
  build: {
    vendor: ["axios"],
    babel: {
      presets: [
        [
          "vue-app",
          {
            targets: { ie: 9, uglify: true }
          }
        ]
      ]
    },
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        })
      }
    }
  }
}
