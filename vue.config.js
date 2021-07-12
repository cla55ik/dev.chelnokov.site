// vue.config.js

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
 module.exports = {
    devServer: {
        proxy: 'http://api.chelnokov.site',
    },
    css: {
      loaderOptions: {
        scss: {
          prependData: `@import "~@/assets/sass/style.scss";`,
        }
      }
    }

  }

