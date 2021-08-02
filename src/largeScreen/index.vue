<style lang="less">

</style>
<template>
    <div id="largeScreenID">

        <!-- 报表 页面 begin -->
        <homePage v-if="typePage=='BI'" />
        <!-- 报表 页面 over -->


        <!-- 报表 第三方 页面 begin -->
        <iframe v-if="typePage=='iframe'" :height="`${windHeight}px`" src ="https://www.baidu.com/" frameborder="0" seamless width="100%" scrolling="no" ></iframe>
        <!-- 报表 第三方 页面 over -->

        <span v-else></span>
    </div>
</template>
<script>

import homePage from "./home.vue";          // 报表 页面


// 轮播 图标
export default {
    components: {homePage},    
    data () {
        return {
            // typePage:'iframe',    // 页面 类型
            typePage:'BI',          // 页面 类型
            
            windHeight:window.innerHeight-6,      // 屏幕高度
            
        }
    },
    created() {
      let that=this;

      // 全屏显示   
      setTimeout(()=>{
        var el = document.getElementById('largeScreenID');
        that.fullScreen( el );
      },500);

      window.onresize = function () {
        that.windHeight=window.innerHeight-6;
      };
    }, 	
    watch: {        
    },                
    methods: {
        /**
         *  进入全屏
         */
        fullScreen: function(dom){
            let el = document.documentElement;
            let rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullScreen;
            
            if (typeof rfs != "undefined" && rfs ) {
                rfs.call( dom || el );
            } else{
                alert("当前浏览器，不支持此功能！");
            }
        }
    },
}
</script>