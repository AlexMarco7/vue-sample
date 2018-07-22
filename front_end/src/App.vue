<template lang="pug">
  #app
    page-layout
      router-view(slot="header" name="header")
      router-view(slot="side_bar" name="side_bar")
      router-view(slot="content")
</template>

<script>

import PageLayout from "./modules/common/view/layouts/PageLayout.vue"

export default {
  name: 'app',
  components:{
    PageLayout
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
