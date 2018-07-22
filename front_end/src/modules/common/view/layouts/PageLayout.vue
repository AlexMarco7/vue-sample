<template lang="pug">
  .page_layout
    header
      slot(name="header")
    .side_base_wrap
      slot(name="side_base")
    .content_wrap
      slot(name="content")
      
    
</template>

<script>
export default {
  name: 'page-layout',
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
