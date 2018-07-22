import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex';
import VueRouter from 'vue-router';

import commonStore from './modules/common/store'
import productStore from './modules/product/store'

import commonRoutes from './modules/common/view/routes.js'
import productRoutes from './modules/product/view/routes.js'


Vue.use(Vuex);
Vue.use(VueRouter);


const routes = []
  .concat(commonRoutes)
  .concat(productRoutes)

const router = new VueRouter({
  routes 
})

let vue = new Vue({
  store: new Vuex.Store({}),
  router: router,
  render: h => h(App)
}).$mount("#app")

vue.$store.registerModule("common", commonStore);
vue.$store.registerModule("product", productStore);

