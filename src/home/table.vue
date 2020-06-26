<style lang="scss">
  .weima-home-table{
    text-align:center;
    width: 210px;
    // height: 500px;
    background: burlywood;

    .title{
        text-align: left;
        padding: 12px 16px;
        cursor: all-scroll;
        // border-bottom: 1px solid red;

        -moz-user-select: none; 
        -webkit-user-select: none; 
        -ms-user-select: none; 
        -khtml-user-select: none; 
        user-select: none;

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
            width: 100%;
            // width: 50%;
            // float: left;
            padding: 3px 26px;
            text-align: left;
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

    .toggle-icon{
        cursor: pointer;
        position: absolute;
        /* float: right; */
        padding: 10px;
        top: 6px;
        right: 0px;
    }

    .content-box{
        min-height: 300;
        overflow-x: hidden;
        overflow-y: auto;
        padding: 10px 0px;
        border-top: 1px solid red;


       &.hidden{
           display: none;
       }  
    }

    &.global-diff{
        position: fixed;
        top: 50px;
        right: 10px;
        z-index: 101; 
        transition: none; 

        .ivu-card-head{
            padding: 0;
            user-select:none;
        }
        
        .diff-title{
            font-size: 14px;
            padding: 15px 13px;
            height: 43px; 
            cursor: all-scroll;           
        }

        .close-icon{
            margin-top: -5px;
            margin-right: -7px;

            i{
                cursor: pointer;
                font-size: 16px;
                padding: 5px;
            }
        }

        .empty-btn{

            margin-top: 12px;
            height: 32px;

            >span{
                display: block;
                float: left;
                margin-right: 5px;
                margin-bottom: 10px;
            }

        }
    }

  }



</style>
<template>
    <div 
        class="weima-home-table global-diff" 
        id="drag_box"
    > 
        <p
            id="drag"
            v-drag
            class="title"
        >
            <Icon type="ios-hand" />
            <b>报表选择（拖拽填充）</b>
            <Icon v-if="toggle_icon" class="toggle-icon" type="ios-arrow-up" @click="_toggleIcon" />
            <Icon v-else class="toggle-icon" type="ios-arrow-down"  @click="_toggleIcon" />
        </p>

        <div slot="content">
            <div style="overflow-y: hidden;" :class="`content-box ${toggle_icon?'hidden':''}`">
                <Row>
                    <Col span="24"> 
                        <ul>
                            <li 
                                v-for="(o,i) in data" :key="i" :title="o['name']"
                                :draggable="true"
                                @dragstart="dragStart($event,o)"
                                @dragend="dragEnd"
                            >
                                <Icon type="ios-hand-outline" />
                                {{ o["name"] }}
                            </li>
                        </ul>
                    </Col>  
                    
                </Row> 
            </div> 

        </div>

    </div>

</template>
<script>
export default {
    props: {
        // 配置 参数
        config:{
            type: Object,
            default:()=>{}              
        }        
    },    
    data () {
        return {
            toggle_icon:false,  

            data:[],           // 数据
 

            
            
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
            this.data=[
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
                },
                {
                    name:"22323进度表 数据报表",
                },
                {
                    name:"yyy库存表 数据报表",
                },
                {
                    name:"ytrgdg 数据报表",
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
         * icon 切换
         */
        _toggleIcon: function(){
            this.toggle_icon=!this.toggle_icon;
        },
        /**
         *  面板 拖拽
         */
        dragStart: function (event, item) {
            event.stopPropagation();   
            event.dataTransfer.setData('item', JSON.stringify(item) );
        },
        dragEnd: function (event) {
            event.stopPropagation();  
            event.dataTransfer.clearData();
        },  
    },
    directives: {
        drag: {
            bind: function (el) {
                setTimeout(()=>{
                    let odiv = document.querySelector('#drag_box');
                    
                    el.onmousedown = (e) => {
                        let disX = e.clientX - odiv.offsetLeft;
                        let disY = e.clientY - odiv.offsetTop;
                        
                        document.onmousemove = (e)=>{
                            let left = e.clientX - disX;    
                            let top = e.clientY - disY;
                        
                            odiv.positionX = top;
                            odiv.positionY = left;
                                                
                            odiv.style.left = left + 'px';
                            odiv.style.top = top + 'px';
                        };
                        document.onmouseup = (e) => {
                            document.onmousemove = null;
                            document.onmouseup = null;
                        };
                    };                    
                },500);
            }
        }
    }
}
</script>