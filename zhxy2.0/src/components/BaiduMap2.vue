<template>
    <div id="app">
        <div id="map_container"></div>
    </div>
</template>
  
<script>
import axios from 'axios';

export default {
    data() {
        return {
            map: null,
        };
    },
    mounted() {
        this.initializeMap();
    },
    methods: {
        initializeMap() {
            this.map = new BMapGL.Map("map_container");
            this.map.centerAndZoom(new BMapGL.Point(113.543663, 34.823332), 17);
            this.map.setHeading(30);
            this.map.setMapStyleV2({
                styleId: '2cd2d0647854f1b38f743ca6f98ceacd'
            });
            this.map.enableScrollWheelZoom(true);
            //控件添加
            var navi3DCtrl = new BMapGL.NavigationControl3D({
                anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
                // 控件基于停靠位置的偏移量（可选）
                offset: new BMapGL.Size(50, 10)
            });  // 添加3D控件
            this.map.addControl(navi3DCtrl);

            var scaleCtrl = new BMapGL.ScaleControl();  // 添加比例尺控件
            this.map.addControl(scaleCtrl);
            var zoomCtrl = new BMapGL.ZoomControl({
                anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
                // 控件基于停靠位置的偏移量（可选）
                offset: new BMapGL.Size(20, 10)
            });  // 添加缩放控件
            this.map.addControl(zoomCtrl);
            // 创建定位控件
            var locationControl = new BMapGL.LocationControl({
                // 控件的停靠位置（可选，默认左上角）
                anchor: BMAP_ANCHOR_BOTTOM_LEFT,
                // 控件基于停靠位置的偏移量（可选）
                offset: new BMapGL.Size(10, 50)
            });
            // 将控件添加到地图上
            this.map.addControl(locationControl);
            
            const view = new mapvgl.View({
                map: this.map,
            });

            const grid = new mapvgl.HeatGridLayer({
                max: 80,
                min: 10,
                gridSize: 50,
                gradient: {
                    0: 'rgb(50, 50, 256)',
                    0.3: 'rgb(178, 202, 256)',
                    1: 'rgb(250, 250, 256)'
                },
                riseTime: 1800,
                maxHeight: 300,
                minHeight: 50
            });

            view.addLayer(grid);

            // 使用 Axios 加载 JSON 数据
            axios.get('/1.json')
                .then(response => {
                    const rs = response.data.result.data[0].bound;
                    const heatmapData = rs.map(item => ({
                        geometry: {
                            type: 'Point',
                            coordinates: [item[0], item[1]],
                        },
                        properties: {
                            count: item[2],
                        },
                    }));
                    grid.setData(heatmapData);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        },
    },
};
</script>
  
<style>
#app {
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
}

#map_container {
    width: 100%;
    height: 100%;
    margin: 0;
}
</style>
  