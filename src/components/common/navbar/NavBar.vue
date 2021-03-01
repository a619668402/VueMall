<template>
  <div id="nav-bar">
    <div id="nav-left">
      <slot name="nav-left"></slot>
    </div>
    <div id="nav-center">
      <slot name="nav-center"></slot>
    </div>
    <div id="nav-right">
      <slot name="nav-right"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NavBar",
  }
</script>

<style scoped>
  #nav-bar {
    height: 44px;
    width: 100%;
    display: flex;
  }

  #nav-left {
    width: 60px;
    height: 100%;
  }

  #nav-center {
    flex: 1;
  }

  #nav-right {
    width: 60px;
    height: 100%;
  }
</style>
