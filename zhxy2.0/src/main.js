import Vue from 'vue';
import VueBMap from 'vue-bmap-gl';
import App from './App.vue';
import router from './route/route.js';
import 'vue-bmap-gl/dist/style.css';
import BaiduMap from '@/components/vue-baidu-map/components'
Vue.config.productionTip = false
Vue.use(router)
Vue.use(VueBMap);

VueBMap.initBMapApiLoader({
  ak: 'xfvo4MjWC2PlBasfoccreOYz382MamBu',
  v: '3.0'
});
Vue.use(BaiduMap, {
  ak: 'xfvo4MjWC2PlBasfoccreOYz382MamBu'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')