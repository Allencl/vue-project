<style lang="scss">
    .switch-box{
        padding-top: 30px;
        text-align: center;

        .mark-text{
            padding-right: 10px;
        }
    }       
</style>
<template>
    <Row>
        <Col span="8" class="switch-box">
            <span class="mark-text">模板一</span>
            <i-switch v-model="tep1" :before-change="handleBeforeChange">
                <Icon type="md-checkmark" slot="open"></Icon>
                <Icon type="md-close" slot="close"></Icon>
            </i-switch>        
        </Col>
        <Col span="8" class="switch-box">
            <span class="mark-text">模板二</span>
            <i-switch v-model="tep2" :before-change="handleBeforeChange">
                <Icon type="md-checkmark" slot="open"></Icon>
                <Icon type="md-close" slot="close"></Icon>
            </i-switch>        
        </Col>
        <Col span="8" class="switch-box">
            <span class="mark-text">模板三</span>
            <i-switch v-model="tep3" :before-change="handleBeforeChange">
                <Icon type="md-checkmark" slot="open"></Icon>
                <Icon type="md-close" slot="close"></Icon>
            </i-switch>        
        </Col>        
    </Row>
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
