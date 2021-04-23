<style lang="scss">
    @import './index.scss';

    .board-page-html.pag2{
        >header{
            background: #000;
        }

        >nav{
            background: #fff;
            
            p.title,p.num{
                color: #000;
            }
        }

        .content{
            .title{
                h1{
                    color: #000;
                }
            }

            .ivu-table{
                thead{
                    th{
                        background: #000;
                    }
                }

                .ivu-table-tbody{
                    .ivu-table-cell{
                        color: #000;
                    }
                }
            }
        }
    }
</style>
<template>
    <div class="board-page-html pag2">
        <header>
            <Row>
                <i-col span="8" class="title-left">
                    <h1>产品外购件成本看板</h1>
                    <h3>Product purchase cost dashboard</h3>
                </i-col>
                <i-col span="16" class="title-right">

                    <Form :model="formItem" label-position="top">
                        <Row>
                            <i-col span="6">
                                <FormItem label="产品项目">
                                    <Select 
                                        v-model="formItem.project"
                                        placeholder="请选择..." 
                                    >
                                        <Option value="beijing">项目1</Option>
                                        <Option value="shanghai">项目3</Option>
                                        <Option value="shenzhen">项目3</Option>
                                    </Select>
                                </FormItem>
                            </i-col>
                            <i-col span="6">
                                <FormItem label="项目类型">
                                    <Select 
                                        v-model="formItem.type"
                                        placeholder="请选择..." 
                                    >
                                        <Option value="beijing">类型1</Option>
                                        <Option value="shanghai">类型2</Option>
                                        <Option value="shenzhen">类型3</Option>
                                    </Select>
                                </FormItem>
                            </i-col>  
                            <i-col span="6">
                                <FormItem label="专业组">
                                    <Select 
                                        v-model="formItem.group"
                                        placeholder="请选择..." 
                                    >
                                        <Option value="beijing">组别1</Option>
                                        <Option value="shanghai">组别2</Option>
                                        <Option value="shenzhen">组别3</Option>
                                    </Select>
                                </FormItem>
                            </i-col>    
                            <i-col span="6">
                                <FormItem label="投产日期">
                                    <DatePicker 
                                        v-model="formItem.date"
                                        type="datetime" 
                                        placeholder="请选择..." 
                                        
                                    >
                                    </DatePicker>
                                </FormItem>
                            </i-col> 
                        </Row>    
                    </Form>
                </i-col>
            </Row>
        </header>
        <nav>
            <ul>
                <li>
                    <p class="title">总零件数</p>
                    <p class="num">1,450</p>
                </li>
                <li>
                    <p class="title">定点完成比例</p>
                    <p class="num">90.83%</p>
                </li>
                <li>
                    <p class="title">产品总目标成本</p>
                    <p class="num">92,000</p>
                </li>                
                <li>
                    <p class="title">当前总成本</p>
                    <p class="num">84,344</p>
                </li>
                <li>
                    <p class="title">成本节省金额</p>
                    <p class="num">4,616</p>
                </li>                                                
            </ul>
        </nav>
        <div class="content">
            <div class="title">
                <h1>Model X10-1 舒适版 投产日期2021-03-29</h1>
            </div>
            <Row class="top">
                <i-col span="12" style="height:370px;">
                    <Table 
                        size="small"
                        :columns="columns" 
                        :data="data"
                        stripe
                    ></Table>
                </i-col>
                <i-col span="12" style="height:370px;">
                    <div style="width:100%;height:100%" id="echarts1"></div>
                </i-col>                
            </Row>   
            <Row class="bottom">
                <i-col span="8" style="height:270px;">
                    <div style="width:100%;height:100%;background:#fff;" id="echarts2"></div>
                </i-col>
                <i-col span="8" style="height:270px;">
                    <div style="width:100%;height:100%;background:#fff;" id="echarts3"></div>
                </i-col>      
                <i-col span="8" style="height:270px;">
                    <div style="width:100%;height:100%;background:#fff;" id="echarts4"></div>
                </i-col>                           
            </Row>


        </div>
    </div>
</template>
<script>
import * as echarts from 'echarts';

export default {
    data () {
        return {
            // 表单
            formItem: {
                project: '',
                type:'',
                group:'',
            },

            // table
            columns: [
                {
                    title: '专业组',
                    key: 'group',
                    align: 'left',
                    minWidth:50
                    // width: 200,
                },
                {
                    title: '总数量',
                    className:"num-all",                  
                    children: [
                        {
                            title: '零件数',
                            key: 'part1',
                            align: 'center',
                            // width: 200,
                        },
                        {
                            title: '总目标成本',
                            key: 'cost1',
                            align: 'center',
                            // width: 200
                        }                                                     
                    ]
                },
                {
                    title: '定点数量',
                    className:"num-all no-right-border",                  
                    children: [
                        {
                            title: '零件数',
                            key: 'part2',
                            align: 'center',
                            // width: 200
                        },  
                        {
                            title: '定点比例',
                            key: 'proportion1',
                            align: 'center',
                            // width: 200
                        },                         
                        {
                            title: '总目标成本',
                            key: 'cost2',
                            align: 'center',
                            // width: 200,
                        },
                        {
                            title: '总定点成本',
                            key: 'cost3',
                            align: 'center',
                            // width: 200
                        },
                        {
                            title: '节省金额',
                            key: 'money',
                            align: 'center',
                            // width: 200
                        },  
                        {
                            title: '节省比例',
                            key: 'proportion2',
                            align: 'center',
                            className:"no-right-border",                  
                            // width: 200
                        }                                                      
                    ]
                },
            ],

            // table数据
            data: [
                {
                    group: '车身',
                    part1: "800",
                    cost1:"12,000",
                    part2:"7,200",
                    proportion1:'90.00%',
                    cost2:"10,800",
                    cost3:"10,260",
                    money:"540",
                    proportion2:"5.00%"
                },
                {
                    group: '底盘',
                    part1: "100",
                    cost1:"12,000",
                    part2:"920",
                    proportion1:'92.00%',
                    cost2:"11,040",
                    cost3:"10,598",
                    money:"442",
                    proportion2:"4.00%"
                },
                {
                    group: '动力总成',
                    part1: "50",
                    cost1:"30,000",
                    part2:"480",
                    proportion1:'96.00%',
                    cost2:"28,800",
                    cost3:"26,957",
                    money:"1,843",
                    proportion2:"6.40%"
                },
                {
                    group: '内饰',
                    part1: "200",
                    cost1:"10,000",
                    part2:"1,800",
                    proportion1:'90.00%',
                    cost2:"9,000",
                    cost3:"8,883",
                    money:"117",
                    proportion2:"1.30%"
                },  
                {
                    group: '外饰',
                    part1: "200",
                    cost1:"8,000",
                    part2:"1,680",
                    proportion1:'84.00%',
                    cost2:"6,720",
                    cost3:"6,478",
                    money:"242",
                    proportion2:"3.60%"
                },  
                {
                    group: '电子电器',
                    part1: "100",
                    cost1:"20,000",
                    part2:"930",
                    proportion1:'93.00%',
                    cost2:"18,600",
                    cost3:"17,168",
                    money:"1,432",
                    proportion2:"7.70%"
                },  
                {
                    group: '总计',
                    part1: "1,450",
                    cost1:"92,000",
                    part2:"13,010",
                    proportion1:'93.83%',
                    cost2:"84,960",
                    cost3:"80,344",
                    money:"4,616",
                    proportion2:"5.43%"
                },                                                                                                 
            ],



        }
    },
    created(){
        this.$nextTick(()=>{
            this.initEchart1();   // echarts 初始化
            this.initEchart2();   // echarts 初始化
            this.initEchart3();   // echarts 初始化
            this.initEchart4();   // echarts 初始化

        });
    },
    methods: {
        initEchart1:function(){
            var obj=document.querySelector("#echarts1");
            var myChart = echarts.init(obj);

            let _option={
                grid: {
                    top: '16%',
                    bottom:'13%',
                    left:'12%',
                    right:'9%'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        crossStyle: {
                            color: '#999'
                        }
                    },
                    formatter: function (params) {

                        return `<p>${params[0]["axisValue"]}</p>
                            <div>
                                ${params[0]["marker"]} 
                                ${params[0]["seriesName"]}  
                                <span style="padding-left:15px">${((params[0]["value"]).toFixed(2))} %</span>
                            </div>
                            <div>
                                ${params[2]["marker"]} 
                                ${params[2]["seriesName"]}  
                                <span style="padding-left:15px">${String(params[2]["value"]).replace(/\d(?=(?:\d{3})+\b)/g,'$&,')}</span>
                            </div> 
                             <div>
                                ${params[4]["marker"]} 
                                ${params[4]["seriesName"]}  
                                <span style="padding-left:15px">${String(params[4]["value"]).replace(/\d(?=(?:\d{3})+\b)/g,'$&,')}</span>
                            </div>                            
                        `;
                    },
                },
                toolbox: {
                    // feature: {
                    //     dataView: {show: true, readOnly: false},
                    //     magicType: {show: true, type: ['line', 'bar']},
                    //     restore: {show: true},
                    //     saveAsImage: {show: true}
                    // }
                },
                legend: {
                    formatter: function (params) {
                        return params+'   ';
                    },
                    data: ['已定点零件(节省比例)','已定点零件(总目标成本)', '已定点零件(总定点成本)',]
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['车身', '底盘', '动力总成', '内饰', '外饰', '电子电器', '整车'],
                        axisPointer: {
                            type: 'shadow'
                        },
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#000'
                            }
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        name: '',
                        min: 0,
                        max: 90000,
                        interval: 15000,
                        axisLabel: {
                            formatter: '{value}'
                        }
                    },
                    {
                        type: 'value',
                        name: '',
                        min: 0,
                        max: 12,
                        interval: 2,
                        axisLabel: {
                            formatter: '{value}.00 %'
                        }
                    }
                ],
                series: [
                    {
                        name: '已定点零件(节省比例)',
                        type: 'line',
                        yAxisIndex: 1,
                        lineStyle:{
                            width:4, 
                        },
                        itemStyle:{
                            normal: {
                                color:"#7f7f7f",
                                barBorderRadius:[2,2,2,2],
                                label: {
                                    show: true,
                                    position: 'top',
                                    textStyle: {
                                        fontSize : '10',
                                        color:"#797979",
                                        fontFamily : '微软雅黑',
                                    },
                                    formatter:function(params){ //标签内容
                                        return '   '+((params.data).toFixed(2)) +' %'+'   '
                                    },
                                    height:20,
                                    lineHeight:16,
                                    borderWidth: 1,
                                    borderRadius:[2,2,2,2],
                                    borderColor:'#c2c2c2',
                                    backgroundColor:'#fff'
                                }
                            }
                        },        
                        data: [5.00,4.00,6.40,1.30,3.60,7.70, 5.43]
                    },
                    {
                        name: '辅助',
                        type: 'bar',
                        stack: '总量1',
                        itemStyle: {
                            barBorderColor: 'rgba(0,0,0,0)',
                            color: 'rgba(0,0,0,0)'
                        },
                        emphasis: {
                            itemStyle: {
                                barBorderColor: 'rgba(0,0,0,0)',
                                color: 'rgba(0,0,0,0)'
                            }
                        },
                        data: [0, 12000, 24000, 54000, 64000, 70000,0,]
                    },
                    {
                        name: '已定点零件(总目标成本)',
                        type: 'bar',
                        barWidth:22,
                        stack: '总量1',
                        itemStyle:{
                            normal: {
                                color:"#000",
                                barBorderRadius:[2,2,2,2],
                                label: {
                                    show: true,
                                    position: 'top',
                                    textStyle: {
                                        fontSize : '10',
                                        color:"#000",
                                        fontFamily : '微软雅黑',
                                    },
                                    formatter: function (params) {
                                        return String(params["value"]).replace(/\d(?=(?:\d{3})+\b)/g,'$&,');
                                    }                                    
                                }
                            }
                        },
                        data: [12000,12000,30000,10000,8000,20000,90000]
                    },
                    {
                        name: '辅助',
                        type: 'bar',
                        stack: '总量2',
                        itemStyle: {
                            barBorderColor: 'rgba(0,0,0,0)',
                            color: 'rgba(0,0,0,0)'
                        },
                        emphasis: {
                            itemStyle: {
                                barBorderColor: 'rgba(0,0,0,0)',
                                color: 'rgba(0,0,0,0)'
                            }
                        },
                        data: [0, 12000, 24000, 54000, 64000, 70000,0,]
                    },        
                    {
                        name: '已定点零件(总定点成本)',
                        type: 'bar',
                        barWidth:22,
                        stack: '总量2',
                        itemStyle:{
                            normal: {
                                color:"#505666",
                                barBorderRadius:[2,2,2,2],
                                label: {
                                    show: true,
                                    position: 'top',
                                    textStyle: {
                                        fontSize : '10',
                                        color:"#505666",
                                        fontFamily : '微软雅黑',
                                    },
                                    formatter: function (params) {
                                        return String(params["value"]).replace(/\d(?=(?:\d{3})+\b)/g,'$&,');
                                    }
                                },
                            }
                        },            
                        data: [10800, 10598, 26967, 8883, 6478, 17168, 80344]
                    },

                ]
            };  

            _option && myChart.setOption(_option);
        },
        initEchart2:function(){
            var obj=document.querySelector("#echarts2");
            var myChart = echarts.init(obj);

            let _option={          
                title: {
                    text: '目标成本占比',
                    left: '2%',
                    top:'6%'
                },
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    orient: 'vertical',
                    // y: 'center',
                    // x: 'right',
                    // align:'left',
                    icon:'circle',
                    top:'25%',
                    right: '7%', 
                },
                series: [
                    {
                        name: '目标成本占比',
                        type: 'pie',
                        radius: ['35%','56%'],
                        center: ["35%", "56%"], 
                        data: [
                            {
                                value: 9, 
                                name: '外饰',
                                itemStyle: {
                                normal:{
                                    color: "#c9cdd8"
                                }
                                },
                            },
                            {
                                value: 11, 
                                name: '内饰',
                                itemStyle: {
                                normal:{
                                    color: "#a4a8b4"
                                }
                                },                    
                            },
                            {
                                value: 13, 
                                name: '底盘',
                                itemStyle: {
                                    normal:{
                                        color: "#71778b"
                                    }
                                },                    
                            },
                            {
                                value: 13,
                                name: '车身',
                                itemStyle: {
                                    normal:{
                                        color: "#586078"
                                    }
                                },                      
                            },
                            {
                                value: 22, 
                                name: '电子电器',
                                itemStyle: {
                                    normal:{
                                        color: "#4b5265"
                                    }
                                },       
                            },
                            {
                                value: 32, 
                                name: '动力总成',
                                itemStyle: {
                                    normal:{
                                        color: "#000000"
                                    }
                                },                  
                            },
                        ],
                        label: {
                            formatter: '{b}\n{c}%',
                        },
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 10,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            };  

            _option && myChart.setOption(_option);
        },
        initEchart3:function(){
            var obj=document.querySelector("#echarts3");
            var myChart = echarts.init(obj);     
            
            let _option={
                grid: {
                    top: '23%',
                    bottom:'30%',
                    left:'13%',
                    right:'13%'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        crossStyle: {
                            color: '#999'
                        }
                    }
                },
                xAxis: {
                    type: 'category',
                        axisLabel:{
                        interval:0,
                        rotate:45,
                        margin:8,
                        textStyle:{
                            color:"#000000"
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    data: ['发动机总成','变数箱总成','驾驶舱模块总成', '车轿减震器', '悬挂总成', '副车架', '减震器支柱','仪表板总成','车身总成','后轿驱动总成']
                },
                yAxis: {
                    type: 'value',
                    min: 0,
                    max: 20000,
                    interval: 4000
                },
                title: {
                    text: 'Top10成本物料',
                    left: '8%',
                    top:'6%'
                },
                series: [{
                    barWidth:26,
                    itemStyle:{
                        normal: {
                            color:"#515055",
                            barBorderRadius:[2,2,2,2],
                        }
                    },
                    data: [21000,11999, 8000, 6000, 5700, 5700, 3678,3899,2790,2679],
                    type: 'bar'
                }]
            };

            _option && myChart.setOption(_option);
        },
        initEchart4:function(){
            var obj=document.querySelector("#echarts4");
            var myChart = echarts.init(obj);     
            
            let _option={
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        crossStyle: {
                            color: '#999'
                        }
                    }
                },
                grid: {
                    top: '23%',
                    bottom:'30%',
                    left:'12%',
                    right:'6%'
                },                
                xAxis: {
                    type: 'category',
                    axisLabel:{
                    interval:0,
                    rotate:45,
                    margin:8,
                    textStyle:{
                        //fontWeight:"bolder",
                        color:"#000000"
                    }
                    },
                    axisTick: {show: false},
                    data: ['大连发动机器...','大连自动变速...','汽车座舱系统...', '汽车制造公司...', '汽车部件有...', '汽车动力总成...', '电子股份有限...','内饰系统公司...','汽车系统公司...','金属成型公司...']
                },
                yAxis: {
                    type: 'value',
                    min: 0,
                    max: 20000,
                    interval: 4000,
                    splitLine:{show:false} ,
                    axisLabel : {
                        formatter: function(){
                            return "";
                        }
                    }
                },
                title: {
                    text: 'Top10成本物料',
                    left: '8%',
                    top:'6%'
                },
                series: [{
                    barWidth:26,
                    itemStyle:{
                        normal: {
                            color:"#333333",
                            barBorderRadius:[2,2,2,2],
                        }
                    },
                    data: [21000,11000, 10000, 9600, 5700, 5100, 3678,3199,2790,2279],
                    type: 'bar'
                }]
            };

            _option && myChart.setOption(_option);
        }        
    },        
}
</script>