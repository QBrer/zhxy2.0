<template>
    <div class="RightBox">
        <img src="../img/right3.png" class="img">
        <!-- 四个角描边 end -->
        <div class="boxTitle">路径规划</div>
        <div class="boxmain">
            <!--图表-->
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
/* 始终处于右上角 */
.RightBox {
    position: absolute;
    height: 400px;
    width: 25%;
    z-index: 2;
    top: 0;
    right: 0;  
}
.img {
    position: relative; 
    height: 100%;
    width: 100%;
}

.boxTitle {
    position: absolute;
    z-index: 3;
    left: 40%;
    top: 2%;
}
.boxmain{
    position: absolute;
    z-index: 3;
    top: 20%;
    height: 70%;
    width: 100%;
}
</style>
