<template>
  <div id="app">
    <v-header></v-header>
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
export default {
  name: 'app',
  components: {
    vHeader
  }
}
</script>

<style lang="less" rel="stylesheet/less">
  @media (min-device-pixel-ratio:1.5){
    .border-1px:after{
      transform: scaleY(0.7)
    }
  }
  @media (min-device-pixel-ratio:2){
    .border-1px:after{
      transfrom:scaleY(0.5)
    }
  }
  #app{
    .tab{
      width:100%;
      height:40px;
      line-height:40px;
      display: flex;
      position: relative;
      &:after{
        content: '';
        display: block;
        position: absolute;
        left: 0;
        bottom: 0;
        width:100%;
        border-top: 1px solid rgba(7, 17, 27, 0.1)
      }
      .tab-item{
        flex:1;
        text-align: center;
        a{
          font-size: 14px;
          color: rgb(77,85,93);
          &.router-link-active{
            color:rgb(240,20,20)
          }
        }
      }
    }
  }
</style>
