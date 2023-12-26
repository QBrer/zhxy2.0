<template>
    <div>
      <div id="map_container"></div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        map: null,
        view: null,
        data: [
          {
            geometry: {
              type: 'Point',
              coordinates: [12952243.94, 4802582.55],
            },
            properties: {
              count: 100,
            },
          },
        ],
      };
    },
    mounted() {
      this.initMap();
    },
    methods: {
      initMap() {  
        this.map = new BMapGL.Map("map_container");
        this.map.centerAndZoom(new BMapGL.Point(116.389756, 39.852666), 11);
        this.map.setHeading(0);
        this.map.setTilt(60);
  
        this.view = new mapvgl.View({
          map: this.map,
        });
  
        this.addFanLayer();
      },
      addFanLayer() {
        const fanLayer = new mapvgl.FanLayer({
          color: '#009900',
          data: this.data,
          size: (data) => {
            return data.properties.count * 200;
          },
        });
  
        this.view.addLayer(fanLayer);
      },
    },
  };
  </script>
  
  <style>
  html,
  body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
  #map_container {
    width: 100%;
    height: 100%;
    margin: 0;
  }
  </style>
  