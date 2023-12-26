<template>
  <div class="conter">
    <baidu-map :center="center" :zoom="zoom" @ready="handler" class="baidu" :scroll-wheel-zoom="true">
      <bm-walking start="郑州大学东门" end="郑州大学北门" :auto-viewport="true"></bm-walking>
    </baidu-map>
  </div>
</template>
<script>
export default {
  data() {
    return {
      center: { lng: 0, lat: 0 },
      zoom: 3
    }
  },
  methods: {
    handler({ BMap, map }) {
      console.log(BMap, map)
      // 经度
      this.center.lng = 113.538912
      // 维度
      this.center.lat = 34.820759
      // 地图放大等级
      this.zoom = 18
      // 个性化样式
      map.setMapStyleV2({
        styleId: '2cd2d0647854f1b38f743ca6f98ceacd'
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.conter {
  margin: 0 30px;
  height: 827px;
  background-color: #fff;
  margin-top: 35px;

  .baidu {
    width: 100%;
    height: 100%;

    // 去除百度地图logo
    ::v-deep .anchorBL {
      display: none !important;
    }
  }
}
</style>