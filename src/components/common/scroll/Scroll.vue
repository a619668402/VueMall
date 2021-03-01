<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "Scroll",
    data() {
      return {
        scroll: null
      }
    },
    mounted() {
      let wrapper = this.$refs.wrapper
      this.scroll = new BScroll(wrapper, {
        click: true
      })
    }
  }
</script>

<style scoped>

</style>
