<template lang="pug">
  .page_layout
    .header_wrap
      slot(name="header")
        header
    .side_base_wrap
      slot(name="side_base")
        side-bar
    .content_wrap
      slot(name="content")
      
    
</template>

<script>
import Header from "../partials/Header.vue"
import SideBar from "../partials/SideBar.vue"

export default {
  name: 'page-layout',
  components: {
    Header,
    SideBar
  },
  data () {
    return {
      
    }
  }
}
</script>

<style lang="scss">
.page_layout{
  
}
</style>
