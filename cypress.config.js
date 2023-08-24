const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    login_url: '/login',
    products_url: '/products',
  },
  e2e: {
    experimentalStudio: true
  }
});
