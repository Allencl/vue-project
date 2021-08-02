<style lang="less">
    .design-center-page{
        .ivu-layout-sider{
            background: #fff;
        }

        .side-column-left{
            padding: 12px 12px;
        }

        .side-column-right{
            padding: 8px 8px;
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
                    class="side-column-left"
                >
                    <LeftPage />             
                </Sider>
                <Content :style="{overflow:'auto',height:documentHeight+'px',padding:'10px 10px', minHeight:'280px',background:'#fff'}">
                    <CenterPage />
                </Content>
                <Sider 
                    hide-trigger
                    :width="220"
                    class="side-column-right"
                >
                    <RightPage />
                </Sider>
            </Layout>
        </Layout>
    </div>
</template>
<script>
  import LeftPage from "./left.vue";      // 左边侧栏
  import CenterPage from "./center.vue";  // 中间
  import RightPage from "./right.vue";  // 中间


    export default {
        components: {
           LeftPage,
           CenterPage,
           RightPage 
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