<template>
    <div id="app">
        <div id="map_container"></div>
        <div class="RightBox4">
            <img src="../img/right3.png" class="img">
            <div class="boxTitle">充电桩信息</div>
            <div class="boxmain"></div>
        </div>
    </div>
</template>
  
<script>
/* global BMapGL, BMAP_ANCHOR_BOTTOM_RIGHT, BMAP_ANCHOR_BOTTOM_LEFT*/
export default {
    data() {
        return {
            map: null,
            fireHydrantData: [
                { lng: 113.538202, lat: 34.826538, label: '消防栓1' },
                { lng: 113.538144, lat: 34.826515, label: '消防栓2' },
                { lng: 113.538189, lat: 34.82663, label: '消防栓3' },
                { lng: 113.538104, lat: 34.826649, label: '消防栓4' },
                { lng: 113.53884, lat: 34.828041, label: '新消防栓5' },
                { lng: 113.538831, lat: 34.828108, label: '新消防栓6' },
                { lng: 113.538737, lat: 34.828041, label: '新消防栓7' },
                { lng: 113.538737, lat: 34.828086, label: '新消防栓8' },
                { lng: 113.540349, lat: 34.828997, label: '新消防栓9' },
                { lng: 113.540277, lat: 34.829004, label: '新消防栓10' },
                { lng: 113.540349, lat: 34.829064, label: '新消防栓11' },
                { lng: 113.540286, lat: 34.829056, label: '新消防栓12' },
                { lng: 113.538858, lat: 34.81988, label: '新消防栓13' },
                { lng: 113.538916, lat: 34.819865, label: '新消防栓14' },
                { lng: 113.538858, lat: 34.819805, label: '新消防栓15' },
                { lng: 113.538912, lat: 34.819809, label: '新消防栓16' },
                { lng: 113.53924, lat: 34.816575, label: '新消防栓17' },
                { lng: 113.539271, lat: 34.816564, label: '新消防栓18' },
                { lng: 113.539222, lat: 34.816483, label: '新消防栓19' },
                { lng: 113.539267, lat: 34.816453, label: '新消防栓20' },
                { lng: 113.539217, lat: 34.816405, label: '新消防栓21' },
                { lng: 113.539271, lat: 34.816394, label: '新消防栓22' },
                { lng: 113.539217, lat: 34.816309, label: '新消防栓23' },
                { lng: 113.539267, lat: 34.816309, label: '新消防栓24' },
            ],
        };
    },
    mounted() {
        this.initializeMap();
        this.addFireHydrantLayer();
    },
    methods: {
        initializeMap() {
            this.map = new BMapGL.Map("map_container");
            this.map.centerAndZoom(new BMapGL.Point(113.543000, 34.82100), 17);

            this.map.setMapStyleV2({
                styleId: '2cd2d0647854f1b38f743ca6f98ceacd',
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
        },
        addFireHydrantLayer() {
            const icon = new BMapGL.Icon('/chongdianzhuang.png', new BMapGL.Size(32, 32));

            this.fireHydrantData.forEach((location) => {
                const point = new BMapGL.Point(location.lng, location.lat);
                const marker = new BMapGL.Marker(point, { icon });
                marker.addEventListener('click', () => {
                    // Create an info window and set its content to the label
                    const infoWindow = new BMapGL.InfoWindow(location.label);
                    // Open the info window at the marker's position
                    this.map.openInfoWindow(infoWindow, point);
                });
                this.map.addOverlay(marker);
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

.boxhang1 {
    position: relative;
    float: left;
    /* left: 3%; */
    margin-bottom: 10px;
    width: 100%;
    height: 1.6vw;
    text-align: center;
    line-height: 1.6vw;
    font-size: .9vw;
    color: #0efcff;
    letter-spacing: .1vw;
}
</style>
  