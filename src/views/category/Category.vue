<template>
  <div id="category">
    <nav-bar>
      <div slot="nav-center">
        <span>分类</span>
      </div>
    </nav-bar>
    <scroll id="left-content">
      <ul>
        <li @click="menuClick">菜单1</li>
        <li>菜单1</li>
        <li>菜单1</li>
        <li>菜单1</li>
        <li>菜单1</li>
        <li>菜单1</li>
        <li>菜单1</li>
        <li>菜单1</li>
        <li>菜单1</li>
        <li>菜单1</li>
        <li>菜单1</li>
        <li>菜单1</li>
        <li>菜单1</li>
        <li>菜单1</li>
        <li>菜单1</li>
        <li>菜单1</li>
        <li>菜单1</li>
        <li>菜单1</li>
        <li>菜单1</li>
        <li>菜单1</li>
        <li>菜单1</li>
        <li>菜单1</li>
        <li>菜单1</li>
        <li>菜单1</li>

      </ul>
    </scroll>
  </div>
</template>

<script>
  import NavBar from "@/components/common/navbar/NavBar";

  import Scroll from "@/components/common/scroll/Scroll";

  export default {
    name: "Category",
    components: {
      NavBar,
      Scroll
    },
    methods: {
      menuClick() {
        console.log('11');
      }
    }
  }
</script>

<style scoped>
  #category {
    position: relative;
    height: 100vh;
  }
  #nav-bar {
    background-color: #ff4d79;
    text-align: center;
    line-height: 44px;
    color: white;
  }

  #left-content {
    width: 35%;
    background-color: antiquewhite;
    position: absolute;
    top: 44px;
    left: 0px;
    bottom: 49px;
    overflow: hidden;
  }

  #left-content ul {
    display: block;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-end: 0;
    margin-inline-start: 0;
    padding-inline-start: 0;
    padding-inline-end: 0;
  }

  #left-content ul li {
    list-style-type: none;
    height: 40px;
    width: 100%;
    line-height: 40px;
    border-bottom: 1px solid #ececec;
    text-align: center;
  }
</style>
