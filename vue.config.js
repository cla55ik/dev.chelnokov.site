// vue.config.js

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
 module.exports = {
    devServer: {
        proxy: 'http://api.chelnokov.site',
    },

  }