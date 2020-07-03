<style lang="scss">
  .weima-large-screen{
    background: url(./Img/bag.png);

    .text-color{
      color: blue;
    }

    .head-box{
      position: relative;

      .text-box{
        position: absolute;
        top: 0px;
        width: 100%;
        text-align: center;  

        img{
          top: 12px;
          /* margin-top: 10px; */
          position: relative;
          right: 16px;
        }   

        span{
          font-size: 26px;
          font-weight: bold;
        }   
      }
    }

    .module-box{
      // margin: 6px 4px;
      position: relative;

      .img-border{
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
      }

      .head-tittle{
        text-align: center;

        >div{
          position: relative;
          min-width: 100px;
          display: inline-block;
          padding: 3px 14px;
        }
      }

      
            


      &.detail{
        height: 120px;
        padding: 5px 8px;
      }
    }

    .bi-module-box{
      padding: 5px 8px;
      height: 100%;
    }
  }


</style>
<template>
  <div class="weima-large-screen">

    <Row>
      <div class="head-box">
        <img :src="imgBag" alt="" style="width:100%">
        <div class="text-box">
          <img :src="imgIcon" alt="">
          <span>威马质量数据监控平台</span>
        </div>
      </div>
    </Row>  

    <!-- 报表 模板1 begin -->
    <div v-if="currentTpl==1">
      <div style="background:#ccc;margin-bottom:10px;">111</div>
      <div style="background:#ccc">222</div>


      <img :src="imgMark22" alt="" style="margin-left:30px;">
      <img :src="imgMark222" alt="" style="margin-left:30px;">

      <img :src="imgMark33" alt="" style="margin-left:30px;">
      <img :src="imgMark333" alt="" style="margin-left:30px;">

      <Row>
        <Col span="4">
          <Row> 
            <Col span="24"> 
              <div class="module-box" style="height:300px">
                <img class="img-border" :src="imgBorder" alt="">
              </div>               
            </Col>    
            <Col span="24">    
              <div class="module-box" style="height:300px">
                <img class="img-border" :src="imgBorder" alt="">
              </div>            
            </Col> 
          </Row>   
        </Col>  
        <Col span="16">
          <div class="module-box" style="height:600px">
            <img class="img-border" :src="imgBorder" alt="">
          </div>        
        </Col> 
        <Col span="4">
          <Row> 
            <Col span="24">    
              <div class="module-box" style="height:300px">
                <img class="img-border" :src="imgBorder" alt="">
              </div>            
            </Col>    
            <Col span="24">   
              <div class="module-box" style="height:300px">
                <img class="img-border" :src="imgBorder" alt="">
              </div>             
            </Col> 
          </Row>   
        </Col>                                       
      </Row>
      <Row> 
        <Col span="8">
          <div class="module-box" style="height:300px">
            <img class="img-border" :src="imgBorder" alt="">
          </div>         
        </Col>
        <Col span="8">
          <div class="module-box" style="height:300px">
            <img class="img-border" :src="imgBorder" alt="">
          </div>         
        </Col>
        <Col span="8">
          <div class="module-box" style="height:300px">
            <img class="img-border" :src="imgBorder" alt="">
          </div>         
        </Col>                
      </Row>       
    </div>
    <!-- 报表 模板1  end -->

    <!-- 报表 模板2 begin -->
    <div v-if="currentTpl==2">
      <Row>
        <Col span="12">
          <div class="module-box" style="height:600px">
            <img class="img-border" :src="imgBorder" alt="">
          </div>        
        </Col>         
        <Col span="12">
          <Row> 
            <Col span="24"> 
              <div class="module-box" style="height:300px">
                <img class="img-border" :src="imgBorder" alt="">
              </div>               
            </Col>    
            <Col span="24">    
              <div class="module-box" style="height:300px">
                <img class="img-border" :src="imgBorder" alt="">
              </div>            
            </Col> 
          </Row>   
        </Col>                                       
      </Row>
      <Row> 
        <Col span="8">
          <div class="module-box" style="height:300px">
            <img class="img-border" :src="imgBorder" alt="">
          </div>         
        </Col>
        <Col span="8">
          <div class="module-box" style="height:300px">
            <img class="img-border" :src="imgBorder" alt="">
          </div>         
        </Col>
        <Col span="8">
          <div class="module-box" style="height:300px">
            <img class="img-border" :src="imgBorder" alt="">
          </div>         
        </Col>                
      </Row>       
    </div>
    <!-- 报表 模板2  end -->

    <!-- 报表 模板3 begin -->
    <div v-if="currentTpl==3">
      <Row>
        <Col span="12">
          <div class="module-box" style="height:600px">
            <img class="img-border" :src="imgBorder" alt="">
          </div>        
        </Col>         
        <Col span="12">
          <Row> 
            <Col span="24"> 
              <div class="module-box" style="height:300px">
                <img class="img-border" :src="imgBorder" alt="">
              </div>               
            </Col>    
            <Col span="24">    
              <div class="module-box" style="height:300px">
                <img class="img-border" :src="imgBorder" alt="">
              </div>            
            </Col> 
          </Row>   
        </Col>                                       
      </Row>
      <Row> 
        <Col span="6">
          <div class="module-box" style="height:300px">
            <img class="img-border" :src="imgBorder" alt="">
          </div>         
        </Col>        
        <Col span="6">
          <div class="module-box" style="height:300px">
            <img class="img-border" :src="imgBorder" alt="">
          </div>         
        </Col>
        <Col span="6">
          <div class="module-box" style="height:300px">
            <img class="img-border" :src="imgBorder" alt="">
          </div>         
        </Col>
        <Col span="6">
          <div class="module-box" style="height:300px">
            <img class="img-border" :src="imgBorder" alt="">
          </div>         
        </Col>                
      </Row>       
    </div>
    <!-- 报表 模板3  end -->


    <Row v-else></Row>
    <!-- <div class="head-tittle">
      <div>
        <span class="text-color">楼层监控数据</span>
      </div>               
    </div> -->
  </div>  
</template>
<script>


  // import ForeignTrade from "./BI/foreignTrade.vue";            // 报表 外贸订单
  // import DomesticTrade from "./BI/domesticTrade.vue";          // 报表 内贸订单
  // import Inventory from "./BI/inventory.vue";                 // 报表 配件库存表
  // import Inventory2 from "./BI/inventory2.vue";                 // 报表 配件库存表2
  // import Production from "./BI/production.vue";               // 报表 各产品生产进度表
  // import Puality from "./BI/quality.vue";                    // 报表 月度质量趋势表



  export default {
    components: {

      // ForeignTrade,
      // DomesticTrade,
      // Inventory,
      // Inventory2,
      // Production,
      // Puality
    },
    data () {
      return {
        currentTpl:1,

        imgBorder: require("./Img/border1-1.png"),   // 头 背景


        imgBag: require("./Img/top.png"),   // 头 背景
        imgIcon: require("./Img/logo.png"),   // 头 icon

        imgMark1: require("./Img/mark1.png"),   // mark1
        imgMark2: require("./Img/mark2.png"),   // mark2

        imgMark22: require("./Img/l_left_bottom.png"),   // mark2
        imgMark222: require("./Img/s_left_bottom.png"),   // mark2

        imgMark33: require("./Img/mark1.png"),   // mark2
        imgMark333: require("./Img/222.png"),   // mark2

        config_foreign:{},   // 配置文件 外贸订单
        config_domestic:{},   // 配置文件 内贸订单
        config_inventory:{},   // 配置文件 配件库存表
        config_inventory2:{},   // 配置文件 配件库存表2
        config_production:{},   // 配置文件 各产品生产进度表
        config_puality:{},   // 配置文件 月度质量趋势表


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
        // 模拟数据
        let config = {


        } 

      }
    }
  }
</script>