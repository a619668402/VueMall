<template>
 <div id="home-recommand">
    <recommand-item v-for="item in datas" :item="item" :key="item.image"/>
 </div>
</template>

<script>
  import RecommandItem from '@/views/home/childgroup/recommand/RecommandItem'

  export default {
    name: "HomeRecommand",
    props: {
      datas: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      RecommandItem
    }
  }
</script>

<style scoped>
  #home-recommand {
    margin-top: 10px;
    height: 100px;
    display: flex;
    border-bottom: 10px solid #ececec;
  }
</style>
