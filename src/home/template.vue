<style lang="scss">

    .weima-home-tpl{
        margin-top: 10px;
        margin-bottom: 16px;

        .switch-box{
            // padding-top: 30px;
            text-align: center;

            .mark-text{
                font-size: 12px;
                -moz-user-select: none; 
                -webkit-user-select: none; 
                -ms-user-select: none; 
                -khtml-user-select: none; 
                user-select: none;                
                // padding-right: 12px;
            }
        } 
    }
      
</style>
<template>
    <div class="weima-home-tpl">
        <Row>
            <Col span="8" class="switch-box">
                <span class="mark-text">模板一</span>
                <i-switch size="default" v-model="tep1" @on-change="changeHandle" :before-change="handleBeforeChange">
                    <Icon type="md-checkmark" slot="open"></Icon>
                    <Icon type="md-close" slot="close"></Icon>
                </i-switch>        
            </Col>
            <Col span="8" class="switch-box">
                <span class="mark-text">模板二</span>
                <i-switch size="default" v-model="tep2" @on-change="changeHandle" :before-change="handleBeforeChange">
                    <Icon type="md-checkmark" slot="open"></Icon>
                    <Icon type="md-close" slot="close"></Icon>
                </i-switch>        
            </Col>
            <Col span="8" class="switch-box">
                <span class="mark-text">模板三</span>
                <i-switch size="default" v-model="tep3" @on-change="changeHandle" :before-change="handleBeforeChange">
                    <Icon type="md-checkmark" slot="open"></Icon>
                    <Icon type="md-close" slot="close"></Icon>
                </i-switch>        
            </Col>        
        </Row>
    </div>
</template>
<script>
  export default {
    data () {
      return {
          tep1:false,
          tep2:false,
          tep3:false,

      }
    },
    created() {

        // 初始化
        switch (this.currentTpl) {
            case 1:
                this.tep1=true;
                break;
            case 2:
                this.tep2=true;
                break;
            case 3:
                this.tep3=true;
                break;                        
            default:
                break;
        }
    }, 	        
    methods: {
        /**
         * 切换
         */
        changeHandle: function(){
            let config = {
                "1":this.tep1,
                "2":this.tep2,
                "3":this.tep3,
            };

            this.$emit("templateChange",Number( Object.entries(config).filter(o=>o[1])[0][0] ));
        },
        /**
         * 切换 
        */
        handleBeforeChange: function(){
            let that=this;
            return new Promise((resolve) => {
                that.tep1=false;
                that.tep2=false;         
                that.tep3=false;         
                
                that.$nextTick(()=>{
                    resolve();
                });
            });
        }
    },
    props: {
        currentTpl:{
            type: Number,
            // default:()=>1           
        }
    }
}
</script>
