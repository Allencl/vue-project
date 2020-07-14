<style lang="scss">

</style>
<template>
    <div class="home-darg">
        <homePage 
           :config="configData" 
        />
    </div>
</template>
<script>

import homePage from "./home.vue";          // home
import configJson from "./config.js";     // 配置文件

export default {  
    components: {
      homePage,
    },      
    data () {
        return {
            configData:configJson,   // 配置文件
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