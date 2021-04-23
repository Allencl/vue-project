<style lang="scss">
    .transfer-class-calendar{
        .ivu-color-picker-picker-panel{
            visibility: hidden;
        }
    }

    .calendar-html{
        .calendar-container{


            >div{
                display: inline-block;
                border-top: 1px solid #ccc;
                border-left: 1px solid #ccc;
                width: 761px;

                span{
                    position: relative;
                    display: inline-block;
                    text-align: center;
                    width: 76px;
                    height: 76px;
                    border-right: 1px solid #ccc;
                    border-bottom: 1px solid #ccc;
                    text-align: center;
                    line-height: 60px;

                    .ivu-color-picker{
                        position: absolute;
                        left: 11px;
                        bottom: -15px;                        
                    }

                }                
            }
        }
    }
</style>
<template>
    <div class="calendar-html">
        <div>
            <Button type="primary" @click="saveData">保存</Button>
        </div>
        <div>
            <h3 style="margin-bottom: 20px;text-align: center;font-size: 32px;">
                安全绿十字
            </h3>
        </div>
        <div>
            <Row>
                <i-col push="2" span="6">
                    <DatePicker type="date" placeholder="选择日期" style="width: 200px"></DatePicker>
                </i-col>
                <i-col span="12">
                    <div class="calendar-container">
                        <div>
                            <span v-for="(o,index) in data" :key="index" :style="`background:${o['color']||'#fff'}`">
                                <b :style="`color:${o['color']?'#fff':'#000'}`">{{o["value"]}}</b>
                                <ColorPicker 
                                    v-model="o['color']" 
                                    transfer-class-name="transfer-class-calendar"
                                    size="small"
                                    :hue="false"
                                    :editable="false"
                                    :transfer="true"
                                    :recommend="true"
                                    :colors="['#006600','#003399','#FFCC00','#990000']"
                                />
                            </span>
                        </div>
                    </div>
                </i-col>
                <i-col push="1" span="6">
                    <Input v-model="value" placeholder="请输入..." style="width: 200px" />
                </i-col>
            </Row>            
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                value:'',

                data:[
                    {
                        value:1,
                        color:""
                    },
                    {
                        value:2,
                        color:""
                    },
                    {
                        value:3,
                        color:""
                    },
                    {
                        value:4,
                        color:""
                    },
                    {
                        value:5,
                        color:""
                    },
                    {
                        value:6,
                        color:""
                    },
                    {
                        value:7,
                        color:""
                    },
                    {
                        value:8,
                        color:""
                    },
                    {
                        value:9,
                        color:""
                    },
                    {
                        value:10,
                        color:""
                    },
                    {
                        value:11,
                        color:""
                    },
                    {
                        value:12,
                        color:""
                    },
                    {
                        value:13,
                        color:""
                    },
                    {
                        value:14,
                        color:""
                    },
                    {
                        value:15,
                        color:""
                    },
                    {
                        value:16,
                        color:""
                    },
                    {
                        value:17,
                        color:""
                    },
                    {
                        value:18,
                        color:""
                    },
                    {
                        value:19,
                        color:""
                    },
                    {
                        value:20,
                        color:""
                    },
                    {
                        value:21,
                        color:""
                    },
                    {
                        value:22,
                        color:""
                    },
                    {
                        value:23,
                        color:""
                    },
                    {
                        value:24,
                        color:""
                    },
                    {
                        value:25,
                        color:""
                    }                                                                                                                                                                                          
                ]
            }
        },
        watch: {
            "$http": function (newQuestion, oldQuestion) {
                console.log("wwww");
            }
        },
        created(){

            // function perf_observer(list, observer) { 
            //     let _getEntries=list.getEntries();
            //     let _src=_getEntries[0]["name"];
            //     console.log(_src);
            // } 
            // var observer2 = new PerformanceObserver(perf_observer); 
            // observer2.observe({entryTypes: ["resource"]});

            // Object.defineProperty(XMLHttpRequest.prototype,"status",{
            //     get: function(...status) {
            //         console.log(status);
            //     }
            // })


        },
        methods: {           
            /**
             * 保存数据
             */
            saveData: function(){
                // console.log(  );
                // this.$Notice.open({
                //     title: '保存数据',
                //     desc: JSON.stringify(this.data)
                // });    
                
                $.getScript("http://182.168.1.221/platform/aaa.js",function(){
                    // $this.attr("disabled", "true");
                    // console.log("aaaaaaa");
                });    
                
                // $.get("http://182.168.1.221/platform/index3.html",function(data,status){
                //     console.log('989');
                // });                



            },
            /**
             *  初始化
             */
            getData: function(){
                // 模拟 请求数据 替换 
                let that=this;

                setTimeout(()=>{

                },1000);
            }
        },        
    }
</script>