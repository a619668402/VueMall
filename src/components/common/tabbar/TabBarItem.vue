<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="isActive">
      <slot name="item-icon">
      </slot>
    </div>
    <div v-else>
      <slot name="item-icon-active">
      </slot>
    </div>
    <div :style="{color: textColor}">
      <slot name="item-text">
        首页
      </slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      path: String,
      activeColor: {
        type: String,
        default: 'red'
      }
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path)
      },
      textColor() {
        return !this.isActive ? this.activeColor : ''
      }
    },
    methods: {
      itemClick() {
        this.$router.replace(this.path)
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    text-align: center;
    font-size: 14px;
    flex: 1;
  }

  .tab-bar-item img {
    height: 24px;
    width: 24px;
    vertical-align: middle;
    margin-top: 4px;
    display: inline-block;
  }
</style>
