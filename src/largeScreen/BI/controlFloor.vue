<style lang="less">
    .bi-module-box{
       .head-title{
            -moz-user-select: none; 
            -webkit-user-select: none; 
            -ms-user-select: none; 
            -khtml-user-select: none; 
            user-select: none;            
       } 
    }

</style>
<template>
    <div class="bi-module-box">
        <!-- 轮播 组件  -->
        <CarouselComponent 
            :carouselCurrent="1"
            :carouselAll="3"
        /> 
        <!-- 轮播 组件  -->

        <div style="width:100%;height:100%;" id="controlFloorID"></div>
    </div>
</template>
<script>

import echarts from 'echarts';
import CarouselComponent from "./../carousel.vue";          // 轮播组件 


// 监控楼层
export default {
    components: {CarouselComponent},    
    data () {
        return {
            echartObj:undefined,   // echart 对象

            
            
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
            this.$nextTick(()=>{
                this.echartObj && this.echartObj.resize();
            });

        },
        // 监听 配置参数
        'config'(){
            console.log("外贸订单 配置参数切换了");
            console.log(this.config);

            // 模拟刷新 后面可以删掉
            document.querySelector("#controlFloorID").style.visibility="hidden"; 
            setTimeout(()=>{
                document.querySelector("#controlFloorID").style.visibility="inherit"
            },500);
            // 模拟刷新 后面可以删掉

        },
        
    },                
    methods: {
        /**
         * 初始化
         */
        initPage: function(){
            var echartObj = echarts.init(document.querySelector('#controlFloorID'));

            const option = {
                grid: {
                    left: '10px',
                    right: '10px',
                    top: '15px',
                    bottom: '50px'
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                    type: 'line',
                    areaStyle: {}
                }]
            };

            echartObj.setOption(option);
            this.echartObj=echartObj;    // 缓存 对象
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