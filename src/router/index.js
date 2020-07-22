import Vue from 'vue'
import VueRouter from 'vue-router'
import Foot from '../components/Foot'
import Head from '../components/Head'
import homePage from '../components/home/homePage'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home/homePage'
  },
  {
    path: '/home/homePage',
    name: 'home',
    components: {
      head: Head,
      main: homePage,
      foot: Foot
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
