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
  .goods-item-img {
    height: 250px;
    background-color: orange;
    padding: 0 2px 0 2px;
  }

  .goods-item-text {
    margin: 5px;
  }

</style>
