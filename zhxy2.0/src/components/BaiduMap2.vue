<template>
    <div id="app">
        <div id="map_container"></div>
        <div class="RightBox4">
            <img src="../img/right3.png" class="img">
            <div class="boxTitle">人流量分析</div>
            <div class="boxmain">
                <!--图表-->
                <button @click="loadData1" style="width:90%;">时段1</button>
                <button @click="loadData2" style="width:90%;">时段2</button>
            </div>
        </div>
    </div>
</template>
  
<script>
/* global BMapGL, BMAP_ANCHOR_BOTTOM_RIGHT, BMAP_ANCHOR_BOTTOM_LEFT, mapvgl */
import axios from 'axios';

export default {
    data() {
        return {
            map: null,
            grid: null, // 添加这一行
        };
    },
    mounted() {
        this.initializeMap();
    },
    methods: {
        initializeMap() {
            this.map = new BMapGL.Map("map_container");
            this.map.centerAndZoom(new BMapGL.Point(113.543000, 34.82100), 17);
            this.map.setHeading(30);
            this.map.setTilt(45);

            this.map.setMapStyleV2({
                styleId: '2cd2d0647854f1b38f743ca6f98ceacd'
            });
            this.map.enableScrollWheelZoom(true);
            //控件添加
            var navi3DCtrl = new BMapGL.NavigationControl3D({
                anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
                // 控件基于停靠位置的偏移量（可选）
                offset: new BMapGL.Size(50, 100)
            });  // 添加3D控件
            this.map.addControl(navi3DCtrl);

            var scaleCtrl = new BMapGL.ScaleControl();  // 添加比例尺控件
            this.map.addControl(scaleCtrl);
            var zoomCtrl = new BMapGL.ZoomControl({
                anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
                // 控件基于停靠位置的偏移量（可选）
                offset: new BMapGL.Size(20, 100)
            });  // 添加缩放控件
            this.map.addControl(zoomCtrl);
            // 创建定位控件
            var locationControl = new BMapGL.LocationControl({
                // 控件的停靠位置（可选，默认左上角）
                anchor: BMAP_ANCHOR_BOTTOM_LEFT,
                // 控件基于停靠位置的偏移量（可选）
                offset: new BMapGL.Size(10, 100)
            });
            // 将控件添加到地图上
            this.map.addControl(locationControl);

            const view = new mapvgl.View({
                map: this.map,
            });

            this.grid = new mapvgl.HeatGridLayer({
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

            view.addLayer(this.grid);
            var heatmap = new mapvgl.HeatmapLayer({
                size: 100, // 单个点绘制大小
                max: 40, // 最大阈值
                height: 0, // 最大高度，默认为0
                unit: 'm', // 单位，m:米，px: 像素
                gradient: { // 对应比例渐变色
                    0.25: 'rgba(0, 0, 255, 1)',
                    0.55: 'rgba(0, 255, 0, 1)',
                    0.85: 'rgba(255, 255, 0, 1)',
                    1: 'rgba(255, 0, 0, 1)'
                }
            });
            view.addLayer(heatmap);

            // 使用 Axios 加载 JSON 数据
            // axios.get('/1.json')
            //     .then(response => {
            //         const rs = response.data.result.data[0].bound;
            //         const heatmapData = rs.map(item => ({
            //             geometry: {
            //                 type: 'Point',
            //                 coordinates: [item[0], item[1]],
            //             },
            //             properties: {
            //                 count: item[2],
            //             },
            //         }));
            //         this.grid.setData(heatmapData); 
            //     })
            //     .catch(error => {
            //         console.error('Error fetching data:', error);
            //     });
            axios.get('/1ping.json')
                .then(response => {
                    const newData = response.data.result.data[0].bound;
                    const heatmapData = newData.map(item => ({
                        geometry: {
                            type: 'Point',
                            coordinates: [item[0], item[1]],
                        },
                        properties: {
                            count: item[2],
                        },
                    }));
                    // 将实际的热力图数据设置到 HeatmapLayer
                    heatmap.setData(heatmapData);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        },
        loadData1() {
            // 使用 Axios 加载新的 JSON 数据（例如 '2.json'）
            axios.get('/2.json')
                .then(response => {
                    const newData = response.data.result.data[0].bound;
                    const heatmapData = newData.map(item => ({
                        geometry: {
                            type: 'Point',
                            coordinates: [item[0], item[1]],
                        },
                        properties: {
                            count: item[2],
                        },
                    }));
                    // 设置新的数据到 HeatGridLayer
                    this.grid.setData(heatmapData); // 修改这一行
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        },
        loadData2() {
            // 使用 Axios 加载新的 JSON 数据（例如 '2.json'）
            axios.get('/1.json')
                .then(response => {
                    const newData = response.data.result.data[0].bound;
                    const heatmapData = newData.map(item => ({
                        geometry: {
                            type: 'Point',
                            coordinates: [item[0], item[1]],
                        },
                        properties: {
                            count: item[2],
                        },
                    }));
                    // 设置新的数据到 HeatGridLayer
                    this.grid.setData(heatmapData); // 修改这一行
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

.RightBox4 {
    position: absolute;
    height: 80%;
    width: 27%;
    z-index: 10;
    top: 0;
    right: 0;
    pointer-events: auto;
}
</style>
