<style lang="scss">
    .echarts-html{
        // >div{
        //         width: 100% !important;
        //         height: 100% !important;
        //     canvas{
        //         width: 100% !important;
        //         height: 100% !important;
        //     }
        // }
    }
</style>
<template>
    <div style="width:100%;height:100%;" ref="main" class="echarts-html"></div>
</template>
<script>
import * as echarts from 'echarts';

export default {
    data () {
        return {
            echartObj:undefined  // echart

        }
    },
    created(){
        this.$nextTick(()=>{
            this.initPage();  // 初始化
        });
    },        
    methods: { 
        /**
         * 刷新
         */
        updateFunc:function(option){
            // this.initPage(option);
            this.echartObj.resize();
        },
        /**
         * 初始化
         *  */  
        initPage: function(option){
            var obj=this.$refs["main"];
            var myChart = echarts.init(obj);
            let _option=this.option;    

            this.echartObj=myChart;
            _option && myChart.setOption(option||_option);
        },       
    },   
    props: {
        // 配置 参数
        option:{
            type: Object,
            default:()=>{}         
        }
    }         
}
</script>