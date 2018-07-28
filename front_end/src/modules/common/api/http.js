import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

Vue.http.options.crossOrigin = true
Vue.http.options.credentials = true

Vue.http.interceptors.push((request, next)=>{
  request.headers = request.headers || {}

  if (false /*check login*/) {
    request.headers.set('Authorization', 'Bearer '+ window.localStorage.getItem("token"))
  }
  next((response) => {
    if (response.status === 401) {
      window.location.pathname = '/#/login'
    }
  })
})

export default Vue.http