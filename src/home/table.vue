<style lang="scss">
  .weima-home-table{
    text-align:center;

    .title{
        text-align: left;
    }

    .table-box{
        width:100%;
        border-radius: 3px;
        font-size:12px;
        border-left: 1px solid #e8eaec;
        border-top: 1px solid #e8eaec;

        thead{
            width:50%;
            padding:5px 10px;
            border-bottom:  1px solid #e8eaec;
            border-right:  1px solid #e8eaec;

            th{
                width:50%;
                padding:5px 10px;
                white-space: nowrap;
                overflow: hidden;
                background-color: #f8f8f9;                
                border-bottom:  1px solid #e8eaec;
                border-right:  1px solid #e8eaec;
            }
        }


        tbody{

            tr{
                transition: background-color .2s ease-in-out;
                cursor: move;

                &:hover{
                    background-color: #ebf7ff;
                }
            }

            td{
                word-break:break-all;
                padding:5px 10px;
                border-bottom:  1px solid #e8eaec;
                border-right:  1px solid #e8eaec;
            }
        }

    }

    ul{
        li{
            -moz-user-select: none; 
            -webkit-user-select: none; 
            -ms-user-select: none; 
            -khtml-user-select: none; 
            user-select: none;

            list-style: none;
            width: 50%;
            float: left;
            padding: 3px 12px;
            text-align: right;
            cursor: all-scroll;
            font-size: 13px;

            display: inline-block;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;

            transition: all 0.3s;

            &:hover{
                transform: scale(1.2,1.2);
                background: #abdcff;
            }            

        }
    }
  }



</style>
<template>
    <div class="weima-home-table">
        <p class="title">报表选择（拖拽填充）</p>    
        <Row>
            <Col span="8"> 
                <p>A 类别</p>
            </Col>  
            <Col span="8"> 
                <p>B 类别</p>
            </Col> 
            <Col span="8"> 
                <p>C 类别</p>
            </Col>                      
        </Row>  
        <Row>
            <Col span="8"> 
                <ul>
                    <li 
                        v-for="(o,i) in data1" :key="i" :title="o['name']"
                        :draggable="true"
                        @dragstart="dragStart($event,o)"
                        @dragend="dragEnd"
                    >{{ o["name"] }}</li>
                </ul>
            </Col>  
            <Col span="8"> 
                <ul>
                    <li 
                        v-for="(o,i) in data2" :key="i" :title="o['name']"
                        :draggable="true"
                        @dragstart="dragStart($event,o)"
                        @dragend="dragEnd"                        
                    >{{ o["name"] }}</li>
                </ul>
            </Col> 
            <Col span="8"> 
                <ul>
                    <li 
                        v-for="(o,i) in data3" :key="i" :title="o['name']"
                        :draggable="true"
                        @dragstart="dragStart($event,o)"
                        @dragend="dragEnd"
                    >{{ o["name"] }}</li>
                </ul>
            </Col>                      
        </Row>           
    <!-- <table class="table-box" border="0" cellspacing="0" cellpadding="0">
        <thead>
            <tr>
            <th v-for="(itemHed,i) in columns" :key="i">{{ itemHed["name"]||'' }}</th>
            </tr>
        </thead>
        <tbody>
            <tr 
            v-for="(itemTr,j) in data" :key="j"
                :draggable="true"
                @dragstart="dragStart($event,itemTr)"
                @dragend="dragEnd"
            >
            <td v-for="(itemTd,k) in Object.entries(itemTr)" :key="k">{{ itemTd[1]||'' }}</td>
            </tr>
        </tbody>
    </table>             -->
    </div>
</template>
<script>
export default {
    data () {
        return {
            // // 配置 table列
            // columns:[
            //     {
            //         name:"姓名",
            //         key:"name",
            //     }, 
            //     {
            //         name:"年纪",
            //         key:"age",
            //     }                
            // ],  
            
            // // table 数据
            // data:[

            // ]


            data1:[],           // A 类数据
            data2:[],           // b 类数据
            data3:[],           //  c 类数据    

            
            
        }
    },
    created() {
        this.initPage();  // 初始化
    }, 	        
    methods: {
        /**
         * 初始化
         */
        initPage: function(){
            // ajax 拿到数据
            // 模拟 数据
            this.data1=[
                {
                    name:"外贸订单 数据报表",
                },
                {
                    name:"内贸订单 数据报表",
                },
                {
                    name:"配件库存表 数据报表",
                },
                {
                    name:"20生产进度表 数据报表",
                },
                {
                    name:"3222库存表 数据报表",
                },
                {
                    name:"aakiucn 数据报表",
                }                                                  
            ];

            this.data2=[
                {
                    name:"8434订单 数据报表",
                },
                {
                    name:"3232内贸订单 数据报表",
                } 
            ];
            
            this.data3=[
                {
                    name:"1q订单 数据报表",
                },
                {
                    name:"w2内贸订单 数据报表",
                } 
            ];            
        },
        /**
         *  面板 拖拽
         */
        dragStart: function (event, item) {
            event.dataTransfer.setData('item', JSON.stringify(item) );
        },
        dragEnd: function (event) {
            event.dataTransfer.clearData();
        },  
    },
    props: {

    }
}
</script>