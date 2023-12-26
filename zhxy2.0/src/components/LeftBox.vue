<template>
    <div class="LeftBox">
        <img src="../img/left.png" class="img">
        <!-- 四个角描边 end -->
        <div class="boxTitle">详细信息</div>
        <div class="boxmain">
            <!--图表-->
            <tr class="boxhang">---------------------------------------</tr>
            <div class="boxpassage">

                <tr>建筑物名称：</tr>
            </div>
            <tr class="boxhang">---------------------------------------</tr>
            <div class="boxpassage">

                <tr>相关信息：</tr>
            </div>
            <tr class="boxhang">---------------------------------------</tr>
            <div class="boxpassage">
                <tr>图片：</tr>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
/* 始终处于左上角 */
.LeftBox {
    position: absolute;
    height: 400px;
    width: 25%;
    z-index: 2;
    top: 0;
    left: 0;  
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
.boxpassage {
    position      : relative;
    /* float         : left; */
    left: 8%;
    margin-bottom: 20px;
    width         : 100%;
    height        : 1.6vw;
    text-align    : center;
    line-height   : 1.6vw;
    font-size     : .9vw;
    color         : #0efcff;
    letter-spacing: .1vw;
}
.boxhang {
    position      : relative;
    float         : left;
    /* left: 3%; */
    margin-bottom: 20px;
    width         : 100%;
    height        : 1.6vw;
    text-align    : center;
    line-height   : 1.6vw;
    font-size     : .9vw;
    color         : #0efcff;
    letter-spacing: .1vw;
}
</style>
