<style lang="scss">

</style>
<template>
    <div>
        <h1>nini</h1>
    </div>
</template>
<script>


export default {  
    components: {

    }, 
    props: {
        // 配置文件
        config:{
            type: Object,
            default:()=>{}      
        },
    },        
    data () {
        return {
        }
    },  
     watch:{
        // 监听 配置参数
        'config':{ 
            deep:true,
            handler:function(newV){
                console.log('watch中：',newV);
            }
        }
    },             
    methods: {
        /**
         *  初始化
         */
        initPage: function(){
            // 请求数据 替换 config
        }
    },
}
</script>