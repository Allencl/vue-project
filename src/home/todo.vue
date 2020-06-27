<style lang="scss">

    .weima-home-todo{
        
        .demo-badge{
            text-align: center;
            padding: 10px;
            float: left;
            margin-right: 28px;
            margin-bottom: 18px;
            width: 62px;
            height: 62px;
            line-height: 42px;
            background: #eee;
            border-radius: 6px;
            display: inline-block;
            transition: all 0.3s;

            &:hover{
                transform: scale(1.2,1.2);
                background: #abdcff;
            } 


        }

        .ivu-badge{
            .ivu-badge-count {
                right: 28px;
            }
        }

        .box{
            margin-top: 10px;
            padding: 16px;
        }
    }


</style>
<template>
    <div class="weima-home-todo bi-module-box">
        <p>处理事项</p>
        <div style="width:100%;" class="box">
                <Badge overflow-count="999" :count="28" type="warning">
                    <a href="#" class="demo-badge">代办</a>
                </Badge>
                <Badge overflow-count="999" :count="25" type="success">
                    <a href="#" class="demo-badge">已办</a>
                </Badge>
                <Badge overflow-count="999" :count="625" type="normal">
                    <a href="#" class="demo-badge">转办</a>
                </Badge>
                <Badge overflow-count="999" :count="125" type="info">
                    <a href="#" class="demo-badge">待回复</a>
                </Badge>
                <Badge overflow-count="999" :count="215" type="normal">
                    <a href="#" class="demo-badge">草稿</a>
                </Badge>
                <Badge overflow-count="999" :count="225" type="warning">
                    <a href="#" class="demo-badge">参与的</a>
                </Badge>
        </div>
    </div>
</template>
<script>

// 处理事项
export default {
    data () {
        return {
            
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