<style lang="scss">


</style>
<template>
    <div class="bi-module-box">
        <p>配件库存表</p>
        <div style="width:100%;height:100%;" id="inventory2ID"></div>
    </div>
</template>
<script>

import echarts from 'echarts';


// 库存表 2
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
            console.log("库存表2 配置参数切换了");
            console.log(this.config);

            // 模拟刷新 后面可以删掉
            document.querySelector("#inventory2ID").style.visibility="hidden"; 
            setTimeout(()=>{
                document.querySelector("#inventory2ID").style.visibility="inherit"
            },500);
            // 模拟刷新 后面可以删掉

        },
        
    },                
    methods: {
        /**
         * 初始化
         */
        initPage: function(){
            var echartObj = echarts.init(document.querySelector('#inventory2ID'));

            const option = {
                grid: {
                    left: '30px',
                    right: '30px',
                    top: '30px',
                    bottom: '50px'
                },
                dataset: {
                    source: [
                        ['score', 'amount', 'product'],
                        [89.3, 58212, 'Matcha Latte'],
                        [57.1, 78254, 'Milk Tea'],
                        [74.4, 41032, 'Cheese Cocoa'],
                        [50.1, 12755, 'Cheese Brownie'],
                        [89.7, 20145, 'Matcha Cocoa'],
                        [68.1, 79146, 'Tea'],
                        [19.6, 91852, 'Orange Juice'],
                        [10.6, 101852, 'Lemon Juice'],
                        [32.7, 20112, 'Walnut Brownie']
                    ]
                },
                xAxis: {name: 'amount'},
                yAxis: {type: 'category'},
                series: [
                    {
                        type: 'bar',
                        encode: {
                            // Map the "amount" column to X axis.
                            x: 'amount',
                            // Map the "product" column to Y axis
                            y: 'product'
                        }
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