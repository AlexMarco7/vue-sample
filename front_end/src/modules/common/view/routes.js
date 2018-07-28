
import LoginPage from "./pages/LoginPage.vue"

export default [
  { 
    path: '/',
    name : "main",
    redirect: "login" 
  },
  { 
    path: '/login',
    name : "login",
    meta:{ layout : "full" },
    components: { 
      default: LoginPage 
    }
  }
]