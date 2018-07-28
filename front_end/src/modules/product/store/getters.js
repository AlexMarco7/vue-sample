export default {

    productLastPage(state){
        return Math.floor(state.productTotal / state.productLimitPerPage) + 1
    },

    productTotalPages(state, getters){
        return getters.productLastPage
    }
  
};