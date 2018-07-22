<template lang="pug">
  .product_page
    product-list
</template>

<script>

import ProductList from "../partials/ProductList.vue"

export default {
  name: 'product-page',
  components:{
   ProductList
  },
  data () {
    return {
      
    }
  }
}
</script>

<style lang="scss">
.product_page{
  
}
</style>
