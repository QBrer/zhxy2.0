<template>
    <div class="nav_btn">
        <div class="btn_left">
            <a @click="goTo('/')">
                <div class="btn_list listActive">基本信息</div>
            </a>
            <a @click="goTo('/PeopleAnl')">
                <div class="btn_list">人流量分析</div>
            </a>
            <a @click="goTo('./PowerData')">
                <div class="btn_list">充电桩信息</div>
            </a>
            <a @click="goTo('./FireSafe')">
                <div class="btn_list">消防保障</div>
            </a>
        </div>
        <div class="btn_right">
        </div>
    </div>
</template>

<script>
export default {
  methods: {
  goTo(route) {
    if (this.$route.path !== route) {
      this.$router.push(route);
    }
  }
}
};
</script>  
  
<style>

</style>
  