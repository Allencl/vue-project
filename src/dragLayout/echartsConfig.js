export default [
    {
        title:"折线图",
        children:[
            {
                title:"基础折线图",
                img: require('./assets/zhexian_1.png'), 
                type:'dragEchart', 
                option:{
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
                }
            },
            {
                title:"基础平滑折线图",
                img: require('./assets/zhexian_2.png'), 
                type:'dragEchart', 
                option: {
                    xAxis: {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: [820, 932, 901, 934, 1290, 1330, 1320],
                        type: 'line',
                        smooth: true
                    }]
                }               
            },
            {
                title:"基础面积图",
                img: require('./assets/zhexian_3.png'),  
                type:'dragEchart', 
                option: {
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
                }            
            }                                        
        ]
    }
];