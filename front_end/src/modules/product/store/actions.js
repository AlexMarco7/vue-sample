import api from "../api/api.js"


export default {

    listProducts(context){
        return api.listProducts(context.state.productFilter, context.state.productLimitPerPage, (context.state.productCurrentPage-1) *  context.state.productLimitPerPage)
        .then((result)=>{
            context.commit("setProductList", result.list)
            context.commit("setProductTotal", result.total)
        })
    },

    setProductFilterText (context, value) {
        context.commit("setProductFilterText", value)
        context.dispatch("listProducts")        
    },

    goToFirstPage (context) {
        context.commit("setProductCurrentPage", 1)
        context.dispatch("listProducts")        
    },
      
    goToPage (context, value) {
        let page = Math.min(Math.max(value, 1), context.getters.productLastPage)
        if(context.state.productCurrentPage  != page){
          context.commit("setProductCurrentPage", page)
          context.dispatch("listProducts")        
        }
    }

};