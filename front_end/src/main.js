
import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import VueResource from "vue-resource"
import VueI18n from 'vue-i18n';

import enUS from './i18n/en-US.json'
import ptBR from './i18n/pt-BR.json'

import commonRoutes from './modules/common/view/routes.js'
import productRoutes from './modules/product/view/routes.js'

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueI18n);


const routes = []
  .concat(commonRoutes)
  .concat(productRoutes)

const router = new VueRouter({
  routes
})

let lang = window.localStorage ? (window.localStorage.lang || "en-US") : 'en-US';
const i18n = new VueI18n({
    locale: lang,
    messages: {
      "en-US": enUS,
      "pt-BR": ptBR
    }
})

let vue = new Vue({
  store: new Vuex.Store({ strict: true }),
  router: router,
  i18n: i18n,
  render: h => h(App)
}).$mount("#app")


