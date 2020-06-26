<style lang="scss">


</style>
<template>
    <div class="bi-module-box">
        <p>处理事项</p>
        <div style="width:100%;height:200px" >
            <ul>
                <li>
                    <span>我的代办</span>
                </li>
                <li>
                    <span>我的已办</span>
                </li>    
                <li>
                    <span>我的转办</span>
                </li> 
                <li>
                    <span>我的待回复</span>
                </li> 
                <li>
                    <span>我的草稿</span>
                </li>    
                <li>
                    <span>我参与的</span>
                </li>                                                                         
            </ul>
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