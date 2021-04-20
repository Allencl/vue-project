<style lang="scss">
    .board-page{

    }
</style>
<template>
    <div>
                <header>
            <Row>
                <i-col span="6">
                    <h1>产品外购件成本看板</h1>
                    <h3>Product purchase cost dashboard</h3>
                </i-col>
                <i-col span="18">

                    <Form :model="formItem" label-position="top">
                        <Row>
                            <i-col span="6">
                                <FormItem label="产品项目">
                                    <Select v-model="formItem.project">
                                        <Option value="beijing">New York</Option>
                                        <Option value="shanghai">London</Option>
                                        <Option value="shenzhen">Sydney</Option>
                                    </Select>
                                </FormItem>
                            </i-col>
                            <i-col span="6">
                                <FormItem label="项目类型">
                                    <Select v-model="formItem.type">
                                        <Option value="beijing">New York</Option>
                                        <Option value="shanghai">London</Option>
                                        <Option value="shenzhen">Sydney</Option>
                                    </Select>
                                </FormItem>
                            </i-col>  
                            <i-col span="6">
                                <FormItem label="专业组">
                                    <Select v-model="formItem.group">
                                        <Option value="beijing">New York</Option>
                                        <Option value="shanghai">London</Option>
                                        <Option value="shenzhen">Sydney</Option>
                                    </Select>
                                </FormItem>
                            </i-col>    
                            <i-col span="6">
                                <FormItem label="投产日期">
                                    <DatePicker 
                                        v-model="formItem.date"
                                        type="datetime" 
                                        placeholder="Select date" 
                                        style="width: 200px"
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
            <Row>
                <i-col span="4">
                    <p>总零件数</p>
                    <p>1,450</p>
                </i-col>
                <i-col span="4">
                    <p>定点完成比例</p>
                    <p>90.83%</p>
                </i-col>
                <i-col span="4">
                    <p>产品总目标成本</p>
                    <p>92,000</p>
                </i-col>                
                <i-col span="4">
                    <p>当前总成本</p>
                    <p>84,344</p>
                </i-col>
                <i-col span="4">
                    <p>成本节省金额</p>
                    <p>4,616</p>
                </i-col>                                                
            </Row>
            <a href="index.asp">Home</a>
            <a href="html5_meter.asp">Previous</a>
            <a href="html5_noscript.asp">Next</a>
        </nav>
        <div>
            <h1>Model X10-1 舒适版 投产日期2021-03-29</h1>
            <Row>
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
            <Row>
                <i-col span="8" style="height:270px;">
                    <div style="width:100%;height:100%" id="echarts2"></div>
                </i-col>
                <i-col span="8" style="height:270px;">
                    <div style="width:100%;height:100%" id="echarts3"></div>
                </i-col>      
                <i-col span="8" style="height:270px;">
                    <div style="width:100%;height:100%" id="echarts4"></div>
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
                    align: 'center',
                    // width: 200,
                },
                {
                    title: '总数量',
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
                        },
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
                        }                                                      
                    ]
                },
                {
                    title: '定点数量',
                    children: [
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
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        crossStyle: {
                            color: '#999'
                        }
                    }
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
                    data: ['已定点零件(节省比例)','已定点零件(总目标成本)', '已定点零件(总定点成本)',]
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['车身', '底盘', '动力总成', '内饰', '外饰', '电子电器', '整车'],
                        axisPointer: {
                            type: 'shadow'
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
                                color:"#0a1f77",
                                barBorderRadius:[2,2,2,2],
                                label: {
                                    show: true,
                                    position: 'top',
                                    textStyle: {
                                        fontSize : '10',
                                        color:"#0a1f77",
                                        fontFamily : '微软雅黑',
                                    },
                                    formatter:function(params){ //标签内容
                                        return '   '+((params.data).toFixed(2)) +' %'+'   '
                                    },
                                    height:20,
                                    lineHeight:16,
                                    borderWidth: 1,
                                    borderRadius:[2,2,2,2],
                                    borderColor:'#d2d2d2',
                                    backgroundColor:'#fff'
                                }
                            }
                        },        
                        data: [5.00,4.00,6.40,1.30,3.60,7.70, 5.43]
                    },
                    {
                        name: '已定点零件(总目标成本)',
                        type: 'bar',
                        barWidth:26,
                        itemStyle:{
                            normal: {
                                color:"#0ccaee",
                                barBorderRadius:[2,2,2,2],
                                label: {
                                    show: true,
                                    position: 'top',
                                    textStyle: {
                                        fontSize : '10',
                                        color:"#0a1f77",
                                        fontFamily : '微软雅黑',
                                    }
                                }
                            }
                        },
                        data: [12000, 31000, 69789,71352, 75734, 80876, 87367]
                    },
                    {
                        name: '已定点零件(总定点成本)',
                        type: 'bar',
                        barWidth:26,
                        itemStyle:{
                            normal: {
                                color:"#169c91",
                                barBorderRadius:[2,2,2,2],
                                label: {
                                    show: true,
                                    position: 'top',
                                    textStyle: {
                                        fontSize : '10',
                                        color:"#0a1f77",
                                        fontFamily : '微软雅黑',
                                    }
                                }
                            }
                        },            
                        data: [10800, 29589, 59632, 70897, 69879, 89678, 80876]
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
                    text: '某站点用户访问来源',
                    subtext: '纯属虚构',
                    left: 'center'
                },
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                },
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: '50%',
                        data: [
                            {value: 1048, name: '搜索引擎'},
                            {value: 735, name: '直接访问'},
                            {value: 580, name: '邮件营销'},
                            {value: 484, name: '联盟广告'},
                            {value: 300, name: '视频广告'}
                        ],
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
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
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                        axisTick: {
                            alignWithLabel: true
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: [
                    {
                        name: '直接访问',
                        type: 'bar',
                        barWidth: '60%',
                        data: [10, 52, 200, 334, 390, 330, 220]
                    }
                ]
            };

            _option && myChart.setOption(_option);
        },
        initEchart4:function(){
            var obj=document.querySelector("#echarts4");
            var myChart = echarts.init(obj);     
            
            let _option={
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                        axisTick: {
                            alignWithLabel: true
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: [
                    {
                        name: '直接访问',
                        type: 'bar',
                        barWidth: '60%',
                        data: [10, 52, 200, 334, 390, 330, 220]
                    }
                ]
            };

            _option && myChart.setOption(_option);
        }        
    },        
}
</script>