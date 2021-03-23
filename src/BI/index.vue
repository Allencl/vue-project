<style lang="scss">
    .design-center-page{
        .ivu-layout-sider{
            background: #fff;
        }

        .side-column{
            padding: 12px 12px;
        }
    }
</style>
<template>
    <div class="design-center-page">
        <Layout>
            <Layout>
                <Sider 
                    hide-trigger
                    :width="200"
                    class="side-column"
                >
                    <LeftPage />             
                </Sider>
                <Content :style="{overflow:'auto',height:documentHeight+'px',padding: '8px 8px', minHeight: '280px', background: '#fff'}">
                    <CenterPage 
                    />
                </Content>
                <Sider 
                    hide-trigger
                    :width="200"
                    class="side-column"
                >
                    Sider
                </Sider>
            </Layout>
        </Layout>
    </div>
</template>
<script>
  import LeftPage from "./left.vue";      // 左边侧栏
  import CenterPage from "./center.vue";  // 中间


    export default {
        components: {
           LeftPage,
           CenterPage 
        },
        data (_this) {
            return {
                documentHeight:document.documentElement.clientHeight-(_this.tabsArray?116:68),  // 窗口高度

            }
        },
        created(){
            var that=this;
            window.onresize = function(){ 
                that.updataWindow();
            };
        },        
        methods: {   
            /**
             * 刷新
             */
            updataWindow: function(){
                this.documentHeight=document.documentElement.clientHeight-(this.tabsArray?116:68);  // 窗口高度
            },                    
        },        
    }
</script>