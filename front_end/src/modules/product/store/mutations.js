export default {
    setProductList (state, value) {
        state.productList = value;
    },

    setProductFilterText (state, value) { 
        state.productFilter.text = value;
    },

    setProductCurrentPage (state, value) { 
        state.productCurrentPage = value;
    },
    
    setProductTotal (state, value) {
        state.productTotal = value;
    }

};