<template>
    <div class="bmap-wrapper">
      <el-bmap class="bmap-box" ref="map" :map-style-v2="darkStyle" :min-zoom="1" :max-zoom="22" :center="center"
        :zoom="zoom">
      </el-bmap>
    </div>
  </template>
  
  <script>
  import { VueBMap } from 'vue-bmap-gl';
  import darkStyle from '../js/mapStyles';
  export default {
    data: function () {
      return {
        VueBMap,
        zoom: 18,
        center: [113.538912, 34.820759],
        darkStyle,
        visible: false,
      };
    },
  }
  </script>
  
  <style scoped>
  .bmap-box {
    height: 800px;
    width: 100%;
    z-index: 1;
  }
  </style>
  