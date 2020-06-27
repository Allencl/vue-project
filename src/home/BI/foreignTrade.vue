<style lang="scss">


</style>
<template>
    <div class="bi-module-box">
        <p>内贸订单</p>
        <div style="width:100%;height:100%;" id="foreignID"></div>
    </div>
</template>
<script>

import echarts from 'echarts';


// 内贸 订单
export default {
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
            this.echartObj && this.echartObj.resize();

        },
        // 监听 配置参数
        'config'(){
            console.log("内贸订单 配置参数切换了");
            console.log(this.config);

            // 模拟刷新 后面可以删掉
            document.querySelector("#foreignID").style.visibility="hidden"; 
            setTimeout(()=>{
                document.querySelector("#foreignID").style.visibility="inherit"
            },500);
            // 模拟刷新 后面可以删掉

        },
        
    },                
    methods: {
        /**
         * 初始化
         */
        initPage: function(){
            var echartObj = echarts.init(document.querySelector('#foreignID'));

            const option = {
                grid: {
                    left: '30px',
                    right: '30px',
                    top: '30px',
                    bottom: '50px'
                },
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: [120, 200, 150, 80, 70, 110, 130],
                    type: 'bar',
                    showBackground: true,
                    backgroundStyle: {
                        color: 'rgba(220, 220, 220, 0.8)'
                    }
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