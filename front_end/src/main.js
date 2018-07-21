import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex';

import commonStore from './modules/common/store'
import productStore from './modules/product/store'


Vue.use(Vuex);

let vue = new Vue({
  el: '#app',
  store: new Vuex.Store({}),
  render: h => h(App)
})

vue.$store.registerModule("common", commonStore);
vue.$store.registerModule("product", productStore);

