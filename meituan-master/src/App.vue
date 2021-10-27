<template>
    <div id="app">
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"></router-view>
    </div>
</template>

<script>
  export default {
    name: 'app',
    mounted() {
      // 获取购物车信息 因为加购物车可以不用登录 所以用localStorage保存着 页面加载时更新到vuex中
      let cartList = JSON.parse(localStorage.getItem('cartList'))
      if (cartList) {
        this.$store.dispatch('updateCart', {cartList})
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
    @import "./style/common.scss";
    #app {
        width: 100%;
        height: 100%;
    }
    * { touch-action: pan-x }
    //如果你做移动端需要处理300ms延迟问题，你可能会选择fastClick这个包，但是通常情况下你会有下面的警告提示
    //在根容器中添加以下css样式就可以解决这个问题
     // * { touch-action: pan-x }
</style>
