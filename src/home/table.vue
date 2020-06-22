<style lang="scss">
  .weima-home-table{
    text-align:center;

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
  }



</style>
<template>
        <div class="weima-home-table">
            
            <table class="table-box" border="0" cellspacing="0" cellpadding="0">
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
            </table>            
        </div>
</template>
<script>
export default {
    data () {
        return {
            // 配置 table列
            columns:[
                {
                    name:"姓名",
                    key:"name",
                }, 
                {
                    name:"年纪",
                    key:"age",
                }                
            ],  
            
            // table 数据
            data:[

            ]
            
            
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
                    name:"bom",
                    age:122
                }
            ]
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