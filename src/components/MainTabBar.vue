<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="orange">
      <img src="~assets/img/pos_n.png" slot="item-icon"/>
      <img src="~assets/img/pos_s.png" slot="item-icon-active"/>
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="orange">
      <img src="~assets/img/category_n.png" slot="item-icon"/>
      <img src="~assets/img/category_s.png" slot="item-icon-active"/>
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="orange">
      <img src="~assets/img/cart_n.png" slot="item-icon"/>
      <img src="~assets/img/cart_s.png" slot="item-icon-active"/>
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="orange">
      <img src="~assets/img/profile_n.png" slot="item-icon"/>
      <img src="~assets/img/profile_s.png" slot="item-icon-active"/>
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from '@/components/tabbar/TabBar'
  import TabBarItem from '@/components/tabbar/TabBarItem'
  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>
