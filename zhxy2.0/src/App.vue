<template>
  <div id="app">
    <div class="main">
        <div class="nav">郑州大学智慧校园</div>
        <NavButton />
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavButton from './components/NavButton.vue';

export default {
  components: {
    NavButton,
  },
  mounted() {
  },
  methods: {
  }
}
</script>

<style>
/* @import url('./css/circulationSales.css');
@import url('./css/index.css');
@import url('./css/land_flow.css');
@import url('./css/new_index.css');
@import url('./css/production.css');
@import url('./css/production_testing.css'); */
@import url('./css/reset.css');
/* @import url('./css/css.css'); */
/* @import url('./css/boxmap.css'); */
</style>