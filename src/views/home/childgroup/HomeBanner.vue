<template>
  <swiper v-if="banners.length > 1" id="banner" ref="mySwiper" :options="swiperOptions">
    <swiper-slide v-for="item in banners" :key="item.image" class="banner-item">
      <a :href="item.link"><img :src="item.image"/> </a>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  import 'swiper/swiper-bundle.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    name: "Carrousel",
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      swiper,
      swiperSlide
    },
    data() {
      return {
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination',
          },
          autoplay: true,
          effect: 'slide',
          loop: true
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
    mounted() {
      // this.swiper.slideTo(3, 1000, false)
    }
  }
</script>

<style scoped>

  .banner-item img {
    width: 100%;
  }
</style>
