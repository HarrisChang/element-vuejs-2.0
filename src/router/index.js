import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import Goods from '@/components/goods/goods'
import Seller from '@/components/seller/seller'
import Ratings from '@/components/ratings/ratings'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  modes: history,
  routes: [
    {
      path: '/',
      name: 'goods',
      component: Goods
    },
    {
      path: '/ratings',
      name: 'ratings',
      component: Ratings
    },
    {
      path: '/seller',
      name: 'seller',
      component: Seller
    }
  ]
})
