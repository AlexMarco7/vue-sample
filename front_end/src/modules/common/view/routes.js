
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
    components: { 
      default: LoginPage 
    }
  }
]