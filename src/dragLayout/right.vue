<style lang="scss">
    .design-right-page{
        // padding-left: 6px;
        // padding-right: 6px;

        .data-search-box{
            padding-left: 6px;
            padding-right: 6px; 
            margin-bottom: 16px;  

            .ivu-input-search,.ivu-input{
                font-size: 12px;
            }          
        }

        .data-list{
            padding-left: 6px;
            padding-right: 6px;

            li{
                list-style: none;
                width: 100%;
                border: 1px solid #e8eaec;
                padding: 3px 6px;
                margin-bottom: 6px;
                border-radius: 4px;
                transition: all 0.3s ease-out;
                cursor: all-scroll;
                height: 28px;
            
                &:hover{
                    transform: scale(1.05,1.05)
                }    

                .head{
                    position: relative;

                    i{
                        position: absolute;
                        left: 0px;
                        top: 5px;
                    }

                    span{
                        width: 90%;
                        display: inline-block;
                        overflow: hidden;
                        text-overflow:ellipsis;
                        white-space: nowrap;
                        padding-left: 22px;
                        font-weight: 700;
                        position: relative;
                        top: 2px;
                        font-size: 12px;
                    } 
                }

                .description{

                }

            }
        }
    }
</style>
<template>
    <div class="design-right-page">
        <Tabs value="name1">
            <TabPane label="属性" name="tabs1">
                属性的内容
            </TabPane>
            <TabPane label="数据源" name="tabs2">
                <div>
                    <div class="data-search-box">
                        <Input 
                            v-model="searchDate"
                            size="small"
                            @on-search="onSearch" search enter-button="查询" placeholder="查询..." />
                    </div>

                    <ul class="data-list">
                        <li 
                            v-for="(o,i) in data"
                            :key="i"
                            :draggable="true"
                            @dragstart="dragStart($event,o)"
                            @dragend="dragEnd"
                        >
                            <div>
                                <div class="head" :title="o['lable']">
                                    <Icon type="ios-link" />
                                    <span>{{o["lable"]}}</span>
                                </div>
                                <!-- <div class="description">
                                    描述
                                </div> -->
                            </div>
                        </li>
                    </ul>
                </div>
            </TabPane>
        </Tabs>
    </div>
</template>
<script>


export default {
    data () {
        return {
            tabsname:'tabs1',   // tabs
            searchDate:"",  // 查询
           
            // 数据源
            data:[
                {
                    lable:"数据源1",
                    type:'dragData', 
                    option:{
                        xAxis: {
                            type: 'category',
                            data: ['星期一', '星期二', '星期三']
                        },
                        yAxis: {
                            type: 'value'
                        },
                        series: [{
                            data: [150, 230, 224],
                            type: 'line'
                        }]
                    }
                },
                {
                    lable:"数据源2",
                    type:'dragData', 
                },
                {
                    lable:"数据源3",
                    type:'dragData', 

                },
                {
                    lable:"数据源4",
                    type:'dragData', 

                },  
                {
                    lable:"数据源5",
                    type:'dragData', 

                }                                                                
            ]

        }
    },
    created(){

    },        
    methods: {   
        /**
         * 查询 
         * */  
        onSearch:function(){
            console.log( this.searchDate.trim() );
        },
        /**
         *  面板 拖拽
         */
        dragStart: function (event, item={}) {
            event.stopPropagation();   
            event.dataTransfer.setData('item', JSON.stringify(item) );
        },
        dragEnd: function (event) {
            event.stopPropagation();  
            event.dataTransfer.clearData();
        },               
    },   
    props: {

    }         
}
</script>