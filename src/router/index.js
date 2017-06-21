import Vue from 'vue'
import Router from 'vue-router'
import vHeader from '@/components/header/header'

Vue.use(Router)

export default new Router({
  modes: history,
  routes: [
    {
      path: '/',
      name: 'header',
      component: vHeader
    }
  ]
})
