<template lang="pug">
  .product_page
    product-filter
    product-list
</template>

<script>

import ProductList from "../partials/ProductList.vue"
import ProductFilter from "../partials/ProductFilter.vue"

export default {
  name: 'product-page',
  components:{
   ProductList,
   ProductFilter
  },
  data () {
    return {
      
    }
  }
}
</script>

<style lang="scss" scoped>
.product_page{
  
}
</style>
