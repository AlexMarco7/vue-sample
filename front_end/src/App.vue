<template lang="pug">
  #app
    full-page-layout(v-if="$router.currentRoute.meta.layout == 'full'")
      router-view(slot="content")
    main-page-layout(v-if="!$router.currentRoute.meta.layout || $router.currentRoute.meta.layout == 'main'")
      router-view(slot="nav_bar" name="nav_bar")
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
  },
  mounted(){

  }
}
</script>

<style lang="scss">

#app {
  font-family: "Open Sans",sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #333;


  position: absolute;
  display: flex;
  top:0;
  left: 0;
  right: 0;
  bottom: 0;
}

</style>
