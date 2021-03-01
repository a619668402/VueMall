<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>

<style scoped>
  #tab-bar {
    height: 49px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    box-shadow: 2px 2px 10px  #ececec;
    background-color: white;
  }
</style>
