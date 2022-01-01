<style lang="less">
.wis-large-screen-html{
    height: calc(100vh);

    .container-border-class{
        position: relative;

        >img.img-left-top{
            display: block;
            width: 30px;
            height: 30px;
            position: absolute;
            top: 0px;
            left: 0px;

        }
        >img.img-left-Bottom{
            display: block;
            width: 30px;
            height: 30px;
            position: absolute;
            left: 0px;
            bottom: 0px;

        }
        >img.img-right-top{
            display: block;
            width: 30px;
            height: 30px;
            position: absolute;
            top: 0px;
            right: 0px;
        }
        >img.img-right-Bottom{
            display: block;
            width: 30px;
            height: 30px;
            position: absolute;
            right: 0px;
            bottom: 0px;
        }

    }
}
.wis-large-screen-head-html{
    height: 20%;
}
.wis-large-screen-content-html{
    height: 80%;

    .ivu-col{
        height: 100%;
        
        >div{
            margin-bottom: 3%;
        }
    }
}
</style>
<template>
    <div class="wis-large-screen-html">
        <div class="wis-large-screen-head-html">
            <HeadPage />
        </div>
        
        <div class="wis-large-screen-content-html">
            <i-col span="4">
                <LeftPage1 />
                <LeftPage1 />
                <LeftPage1 />

            </i-col>
            <i-col span="16">
                <MapPage />
            </i-col>
            <i-col span="4">

            </i-col>
        </div>
    </div>
</template>
<script>

    import HeadPage from "./head.vue";  // 头部
    import MapPage from "./content1.vue";  // 中间 地图

    import LeftPage1 from "./left1.vue";  // 左边1



    export default {
        components:{
            HeadPage,
            MapPage,
            LeftPage1
        },
        data () {
            return {

            }
        },
        methods: {

        },        
    }
</script>