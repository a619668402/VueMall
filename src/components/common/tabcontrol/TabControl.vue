<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles" :class="{active: index === currentIndex}" @click="tabItemClick(index)">
      <span class="tab-control-text">{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props: {
      titles: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      tabItemClick(index) {
        this.currentIndex = index
      }
    }
  }
</script>

<style scoped>
  .tab-control {
    height: 45px;
    background-color: white;
    display: flex;
  }

  .tab-control div {
    flex: 1;
    text-align: center;
    line-height: 45px;
    font-size: 15px;
  }

  .tab-control-text {

  }
  .active {
    color: red;
  }
  .active span {
    padding: 2px;
    border-bottom: 1px solid red;
  }
</style>
