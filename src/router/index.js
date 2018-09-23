import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Header from '@/pages/home/components/Header'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Header',
      name: 'Header',
      component: Header
    }
  ]
})
