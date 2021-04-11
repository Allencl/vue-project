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


        }
    },
    created(){
        this.$nextTick(()=>{
            this.initPage();  // 初始化
        });
    },        
    methods: {   
        initPage: function(){
            var obj=this.$refs["main"];
            var myChart = echarts.init(obj);


            var option = {
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: [150, 230, 224, 218, 135, 147, 260],
                    type: 'line'
                }]
            };

            option && myChart.setOption(option);
        },                
    },        
}
</script>