<i18n>
{
  "en-US": {
    "code": "Code",
    "desc": "Description",
    "category": "Category",
    "interfaceAR": "Interface AR"
  },
  "pt-BR": {
    "code": "Código",
    "desc": "Descrição",
    "category": "Categoria",
    "interfaceAR": "Interface AR"
  }
}
</i18n>


<template lang="pug">
  .product_list
    table.table.table_splitted
      tr
        td {{$t('code')}}
        td {{$t('desc')}}
        td {{$t('category')}}
        td {{$t('interfaceAR')}}
      tr(v-for="p in productList")
        td {{p.code}}
        td {{p.desc}}
        td {{p.category}}
        td {{p.interfaceAR}}
    b-pagination(size="md" :total-rows="productTotal" v-model="page" :per-page="productLimitPerPage")
        
</template>

<script>
import { mapState } from 'vuex'
import { mapActions } from 'vuex'

export default {
  name: 'product-list',
  data () {
    return {
      
    }
  },
  computed:{
    ...mapState("product", ["productList", "productCurrentPage", "productLimitPerPage", "productTotal"]),
    page: {
      get () {
        return this.$store.state.product.productCurrentPage
      },
      set (value) {
        this.$store.dispatch('product/goToPage', value)
      }
    }
  },
  mounted(){
    this.goToFirstPage()
  },
  methods:{
    ...mapActions("product", ["listProducts","goToFirstPage"])
  }
}
</script>

<style lang="scss" scoped>
.product_list{
  
}
</style>
