<template>
    <div id="app">
      <div id="l-map"></div>
      <div id="r-result"></div>
    </div>
  </template>
  
  <script>
  export default {
    mounted() {
      // 百度地图API功能
      const map = new BMapGL.Map("l-map");
      map.centerAndZoom(new BMapGL.Point(116.404, 39.915), 11);
  
      const walking = new BMapGL.WalkingRoute(map, {
        renderOptions: { map: map, panel: "r-result", autoViewport: true },
      });
  
      walking.search("西单", "慈云寺");
    },
  };
  </script>
  
  <style>
  #app {
    width: 100%;
    height: 100vh;
    padding: 0;
    margin: 0;
    font-family: "微软雅黑";
  }
  
  #l-map {
    height: 400px;
    width: 100%;
  }
  
  #r-result,
  #r-result table {
    width: 100%;
  }
  </style>
  