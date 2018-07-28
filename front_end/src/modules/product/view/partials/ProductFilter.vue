<template lang="pug">
  .product_filter
    input(v-model="text")
</template>

<script>
export default {
  name: 'product-filter',
  data () {
    return {
      
    }
  },
  computed: {
      text: {
          get () {
            return this.$store.state.product.productFilter.text
          },
          set (value) {
            this.$store.dispatch('product/setProductFilterText', value)
          }
      }
  }
}
</script>

<style lang="scss" scoped>
.product_filter{
  
}
</style>
