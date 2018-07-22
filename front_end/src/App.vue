<template lang="pug">
  #app
    login-layout(v-if="$route.name == 'login'")
      router-view(slot="content")
    page-layout(v-if="$route.name != 'login'")
      router-view(slot="header" name="header")
      router-view(slot="side_bar" name="side_bar")
      router-view(slot="content")
</template>

<script>

import PageLayout from "./modules/common/view/layouts/PageLayout.vue"
import LoginLayout from "./modules/common/view/layouts/LoginLayout.vue"

export default {
  name: 'app',
  components:{
    PageLayout,
    LoginLayout
  },
  data () {
    return {

    }
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
