import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Index from '../components/Index.vue'
import Scheme from "../components/Scheme.vue"
import Login from "../components/Login.vue"
import Register from "../components/Register.vue"



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children:[
      {
        path: '/index',
        name: 'index',
        component: Index
      },
      {
        path: '/Scheme',
        name: 'scheme',
        component: Scheme
      },
      {
        path:'/Login',
        name:'login',
        component: Login
      },
      {
        path:'/Register',
        name:'register',
        component: Register
      }
    ]
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
