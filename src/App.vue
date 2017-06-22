<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link :to="{name:'goods'}">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link :to="{name:'ratings'}">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link :to="{name:'seller'}">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import vHeader from '@/components/header/header'
import './common/less/common.less'
const ERR_OK = 0;
export default {
  data() {
    return {
      seller: {}
    }
  },
  created() {
    this.$http.get('/api/seller').then((response) => {
      response = response.body;
      if(response.errno === ERR_OK){
        this.seller = response.data;
        console.log(this.seller);
      }
    })
  },
  name: 'app',
  components: {
    vHeader
  }
}
</script>

<style lang="less" rel="stylesheet/less">
  #app{
    .tab{
      width:100%;
      height:40px;
      line-height:40px;
      display: flex;
      .tab-item{
        flex:1;
        text-align: center;
        a{
          font-size: 14px;
          color: rgb(77,85,93);
          &.router-link-exact-active{
            color:rgb(240,20,20)
          }
        }
      }
    }
  }
</style>
