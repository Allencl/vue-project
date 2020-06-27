<style lang="scss">


</style>
<template>
    <div class="bi-module-box">
        <p>月度质量趋势表</p>
        <div style="width:100%;height:100%;" id="qualityID"></div>
    </div>
</template>
<script>

import echarts from 'echarts';


// 月度质量趋势表 
export default {
    data () {
        return {

            
            
        }
    },
    created() {
        this.$nextTick(() => {
            this.initPage();  // 初始化
        });
    }, 	
    watch: {
        // 监听 模板
        'currentTpl'(){
            console.log(`模板切换了 ${this.currentTpl}`);
        },
        // 监听 配置参数
        'config'(){
            console.log("月度质量趋势表 配置参数切换了");
            console.log(this.config);

            // 模拟刷新 后面可以删掉
            document.querySelector("#qualityID").style.visibility="hidden"; 
            setTimeout(()=>{
                document.querySelector("#qualityID").style.visibility="inherit"
            },500);
            // 模拟刷新 后面可以删掉

        },
        
    },                
    methods: {
        /**
         * 初始化
         */
        initPage: function(){
            var echartObj = echarts.init(document.querySelector('#qualityID'));

            const option = {
                grid: {
                    left: '30px',
                    right: '30px',
                    top: '30px',
                    bottom: '50px'
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false
                },
                yAxis: {
                    type: 'value',
                    boundaryGap: [0, '30%']
                },
                visualMap: {
                    type: 'piecewise',
                    show: false,
                    dimension: 0,
                    seriesIndex: 0,
                    pieces: [{
                        gt: 1,
                        lt: 3,
                        color: 'rgba(0, 180, 0, 0.5)'
                    }, {
                        gt: 5,
                        lt: 7,
                        color: 'rgba(0, 180, 0, 0.5)'
                    }]
                },
                series: [
                    {
                        type: 'line',
                        smooth: 0.6,
                        symbol: 'none',
                        lineStyle: {
                            color: 'green',
                            width: 5
                        },
                        markLine: {
                            symbol: ['none', 'none'],
                            label: {show: false},
                            data: [
                                {xAxis: 1},
                                {xAxis: 3},
                                {xAxis: 5},
                                {xAxis: 7}
                            ]
                        },
                        areaStyle: {},
                        data: [
                            ['2019-10-10', 200],
                            ['2019-10-11', 400],
                            ['2019-10-12', 650],
                            ['2019-10-13', 500],
                            ['2019-10-14', 250],
                            ['2019-10-15', 300],
                            ['2019-10-16', 450],
                            ['2019-10-17', 300],
                            ['2019-10-18', 100]
                        ]
                    }
                ]
            };

            echartObj.setOption(option);
            window.addEventListener('resize', function () {
                echartObj.resize();
            });
        },
 
    },
    props: {
        // 当前模板
        currentTpl:{
            type: Number,
            // default:()=>1           
        },
        // 配置 参数
        config:{
            type: Object,
            default:()=>{}              
        }
    }
}
</script>