
import Vue from 'vue'


/*Font Awesome ====================================================*/
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.component('font-awesome-icon', FontAwesomeIcon)

import icons from './modules/common/view/icons.js'




/*Vue Router ====================================================*/
import VueRouter from 'vue-router';

import commonRoutes from './modules/common/view/routes.js'
import productRoutes from './modules/product/view/routes.js'

Vue.use(VueRouter);

const routes = []
  .concat(commonRoutes)
  .concat(productRoutes)

const router = new VueRouter({
  routes
})



/*i18n ====================================================*/

import VueI18n from 'vue-i18n';

import enUS from './i18n/en-US.json'
import ptBR from './i18n/pt-BR.json'

Vue.use(VueI18n);

let lang = ((window.localStorage || {}).lang) || navigator.language || navigator.userLanguage || "en-US";

const i18n = new VueI18n({
    locale: lang,
    messages: {
      "en-US": enUS,
      "pt-BR": ptBR
    }
})


/*Bootstrap ====================================================*/
import BootstrapVue from 'bootstrap-vue'
import BootstrapCss from 'bootstrap/scss/bootstrap.scss'

Vue.use(BootstrapVue);



/*Launch Vue ====================================================*/
import App from './App.vue'
import Vuex from 'vuex';
import VueResource from "vue-resource"

Vue.use(Vuex);
Vue.use(VueResource);

let vue = new Vue({
  store: new Vuex.Store({ strict: true }),
  router: router,
  i18n: i18n,
  render: h => h(App)
}).$mount("#app")



