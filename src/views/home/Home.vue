<template>
  <div id="home">
    <nav-bar id="nav-bar">
      <div slot="nav-center" id="nav-center">购物街</div>
    </nav-bar>
    <scroll id="scorll">
      <home-banner id="banner" :banners="banners"/>
      <home-recommand :datas="recommands"/>
      <home-feature/>
      <tab-control :titles="titles" />
      <goods-list :goods="goods"/>
    </scroll>
  </div>
</template>

<script>
  import NavBar from '@/components/common/navbar/NavBar'
  import Scroll from '@/components/common/scroll/Scroll'
  import TabControl from '@/components/common/tabcontrol/TabControl'

  import HomeBanner from '@/views/home/childgroup/HomeBanner'
  import HomeRecommand from '@/views/home/childgroup/recommand/HomeRecommand'
  import HomeFeature from '@/views/home/childgroup/HomeFeature'
  import GoodsList from '@/components/content/goods/GoodsList'

  import { getMuliData } from "../../network/home";

  export default {
    name: "Home",
    components: {
      NavBar,
      Scroll,
      TabControl,
      HomeBanner,
      HomeRecommand,
      HomeFeature,
      GoodsList
    },
    data() {
      return {
        banners: [],
        recommands: [],
        titles: ['流行', '新款', '精选']
      }
    },
    computed: {
      goods() {
        const arr = [];
        for (let i = 0; i < 100; i ++) {
          arr.push(i)
        }
        return arr
      }
    },
    methods: {
      /*网络请求*/
      getData() {
        getMuliData().then(res => {
          this.banners = res.data.data.banner.list
          this.recommands = res.data.data.recommend.list
        })
      }
    },
    created() {
      this.getData()
    }
  }
</script>

<style scoped>
  #home {
    position: relative;
    height: 100vh;
    width: 100%;
  }
  #nav-bar {
    background-color: deeppink;
    height: 44px;
    width: 100%;
  }
  #nav-center {
    color: white;
    font-size: 18px;
    line-height: 44px;
    text-align: center;
  }

  #scorll {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 49px;
    top: 44px;
    overflow: hidden;
    overflow-y: scroll;
  }
</style>
