<template>
  <div class="recommand-item">
    <a :href="item.link">
      <img :src="item.image"/>
    </a>
    <div>
      {{item.title}}
    </div>
  </div>
</template>

<script>
  export default {
    name: "RecommandItem",
    props: {
      item: Object
    }
  }
</script>

<style scoped>
  .recommand-item {
    flex: 1;
    text-align: center;
  }

  .recommand-item img {
    width: 65px;
    height: 65px;
  }
</style>
