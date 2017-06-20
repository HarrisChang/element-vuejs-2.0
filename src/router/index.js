import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  modes: history,
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
})
