<template lang="pug">
  #app
    full-page-layout(v-if="$route.layout == 'full'")
      router-view(slot="content")
    main-page-layout(v-if="!$route.layout || $route.layout == 'main'")
      router-view(slot="header" name="header")
      router-view(slot="side_bar" name="side_bar")
      router-view(slot="content")
</template>

<script>

import MainPageLayout from "./modules/common/view/layouts/MainPageLayout.vue"
import FullPageLayout from "./modules/common/view/layouts/FullPageLayout.vue"

import commonStore from './modules/common/store'
import productStore from './modules/product/store'

export default {
  name: 'app',
  components:{
    MainPageLayout,
    FullPageLayout
  },
  data () {
    return {

    }
  },
  created () {
    this.$store.registerModule("common", commonStore);
    this.$store.registerModule("product", productStore);
  }
}
</script>

<style lang="scss">

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
