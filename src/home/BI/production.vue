<style lang="scss">

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
        <p class="head-title">各产品生产进度表</p>
        <div v-show="typeHTML=='BI'" style="width:100%;height:100%;" id="productionID"></div>
        <div v-show="typeHTML=='HTML'" style="width:100%;height:100%;position: relative;">
            <div style="width:96%;height:100%;position:absolute;z-index:3"></div>
            <div style="width:100%;height:100%;position:absolute;z-index:1">
                <iframe src ="https://www.w3school.com.cn/index.html" width="100%" height="90%" frameborder="0">
                </iframe>  
            </div>          
        </div>
        <!-- <div v-else></div> -->
    </div>
</template>
<script>

import echarts from 'echarts';


// 各产品生产进度表 
export default {
    data () {
        return {
            echartObj:undefined,   // echart 对象
            typeHTML:'BI',
            
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
            console.log("各产品生产进度表 配置参数切换了");
            console.log(this.config);

            this.typeHTML = (this.config["type"]=="html")?"HTML":"BI";
            this.$nextTick(()=>{
                setTimeout(()=>{
                    // document.querySelector("#productionID").style.visibility="hidden"; 
                    // this.typeHTML = 'HTML';
                    this.echartObj && this.echartObj.resize();

                },500);
                
            });
            // 模拟刷新 后面可以删掉
            // document.querySelector("#productionID").style.visibility="hidden"; 
            // setTimeout(()=>{
            //     document.querySelector("#productionID").style.visibility="inherit"
            // },500);
            // 模拟刷新 后面可以删掉

        },
        
    },                
    methods: {
        /**
         * 初始化
         */
        initPage: function(){
            var echartObj = echarts.init(document.querySelector('#productionID'));

            const option = {
                grid: {
                    left: '30px',
                    right: '30px',
                    top: '30px',
                    bottom: '50px'
                },
                xAxis: {},
                yAxis: {},
                series: [{
                    symbolSize: 20,
                    data: [
                        [10.0, 8.04],
                        [8.0, 6.95],
                        [13.0, 7.58],
                        [9.0, 8.81],
                        [11.0, 8.33],
                        [14.0, 9.96],
                        [6.0, 7.24],
                        [4.0, 4.26],
                        [12.0, 10.84],
                        [7.0, 4.82],
                        [5.0, 5.68]
                    ],
                    type: 'scatter'
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