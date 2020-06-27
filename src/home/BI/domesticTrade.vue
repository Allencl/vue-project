<style lang="scss">


</style>
<template>
    <div class="bi-module-box">
        <p>外贸订单</p>
        <div style="width:100%;height:100%;" id="domesticID"></div>
    </div>
</template>
<script>

import echarts from 'echarts';


// 外贸 订单
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
            console.log("外贸订单 配置参数切换了");
            console.log(this.config);

            // 模拟刷新 后面可以删掉
            document.querySelector("#domesticID").style.visibility="hidden"; 
            setTimeout(()=>{
                document.querySelector("#domesticID").style.visibility="inherit"
            },500);
            // 模拟刷新 后面可以删掉

        },
        
    },                
    methods: {
        /**
         * 初始化
         */
        initPage: function(){
            var echartObj = echarts.init(document.querySelector('#domesticID'));

            const option = {
                grid: {
                    left: '30px',
                    right: '30px',
                    top: '30px',
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