<style lang="less">
.container-border-class{
    height: 30%;
    border: 1px solid blue;

    .echart-main{
        width: 100%;
        height: 100%;
    }
}
</style>
<template>
    <div class="container-border-class">
        <img :src="require('./assets/leftTop.png')" class="img-left-top">
        <img :src="require('./assets/leftBottom.png')" class="img-left-Bottom">
        <img :src="require('./assets/rightTop.png')" class="img-right-top">
        <img :src="require('./assets/rightBottom.png')" class="img-right-Bottom">

        <div ref="echart-main" class="echart-main"></div>
    </div>
</template>
<script>
import * as echarts from 'echarts';

export default {
    data () {
        return {

        }
    },
    created(){
        let that=this;

        this.$nextTick(()=>{
            that.initFunc();
        });
        
        // window.onresize=function(){
        //     that.initFunc();
        // }
    },
    methods: {
        /**
         * 初始化
         */
        initFunc:function(){
            var chartDom = this.$refs["echart-main"];
            var myChart = echarts.init(chartDom);
            var option;

            option = {
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line',
                areaStyle: {}
                }
            ]
            };

            option && myChart.setOption(option);            
        }
    },        
}
</script>