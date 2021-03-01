<template>
  <div class="goods-item">
    <div class="goods-item-img">
    </div>
    <div class="goods-item-text">
      <span>标题</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem"
  }
</script>

<style scoped>
  .goods-item {
    width: 48%;
    height: 240px;
    text-align: center;
  }

  .goods-item-img {
    width: 100%;
    height: 200px;
    background-color: orange;
    border-radius: 3px;
  }

  .goods-item-text {
    margin: 5px;
  }

</style>
