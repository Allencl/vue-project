<style lang="scss">


</style>
<template>
    <div>
        <p>{{ currentTpl }}</p>
    </div>
</template>
<script>
export default {
    data () {
        return {

            
            
        }
    },
    created() {
        this.initPage();  // 初始化
    }, 	
    watch: {
        // 监听 模板
        'currentTpl'(){
            console.log("模块1 模板切换了");
        },
        // 监听 配置参数
        'config'(){
            console.log("模块1 配置参数切换了");
            console.log(this.config);
        },
        
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