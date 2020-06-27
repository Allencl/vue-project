<style lang="scss">
    .weima-home-notice{

        .title{
            text-align: left;
            padding: 12px 16px;
            cursor: all-scroll;
            // border-bottom: 1px solid red;

        }

        ul{
            max-height: 170px;
            overflow-x: hidden;
            overflow-y: auto;
        }

        li{
            list-style: none;
            padding: 6px 10px;
            font-size: 12px;


            display: block;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }

        .box{
            padding: 10px;
            padding-right: 0px;


        }

        .head-title{
            -moz-user-select: none; 
            -webkit-user-select: none; 
            -ms-user-select: none; 
            -khtml-user-select: none; 
            user-select: none;            
       } 
    }

</style>
<template>
    <div class="weima-home-notice bi-module-box">
        <p class="head-title">系统公告</p>
        <div style="width:100%;" class="box">
            <ul>
                <li v-for="(o,i) in data" :key="i" :title="o['name']">
                    <span>{{ o['name'] }}</span>
                </li>                                                                        
            </ul>
        </div>
    </div>
</template>
<script>

// 系统公告
export default {
    data () {
        return {
            data:[],
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
            // 模拟数据
            this.data = [
                {
                    name:"1、xxxxxxxQSI 系统提示"
                },
                {
                    name:"2、rrrrrrrrrQSI 邮件提示"
                },
                {
                    name:"3、hhhhhhhhhhQSI 系统上线"
                }
            ];
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