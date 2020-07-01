<style lang="scss">
  .weima-large-screen{
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
          background: #fff;
      // height: 150px;
      // background: wheat;
      // border: 1px solid red;
      border: 1px solid #eee;
      // border: 1px solid #eee;
      margin: 6px 4px;
      box-shadow: 4px 6px 3px 1px rgba(184, 184, 184, 0.4);

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
      <Row>
          <Col span="12">
              <div 
                class="module-box"
                style="height:300px"
                @drop="dropHandle($event,'production')"
                @dragover.prevent
              >
                <Production 
                  :currentTpl="currentTpl"
                  :config="config_production"
                />
              </div>
          </Col>   
          <Col span="12">
              <div 
                class="module-box"
                style="height:300px"
                @drop="dropHandle($event,'inventory')"
                @dragover.prevent
              >
                <Inventory 
                  :currentTpl="currentTpl"
                  :config="config_inventory"
                />
              </div>
          </Col>              
          <Col span="12">
              <div 
                class="module-box"
                style="height:300px"
                @drop="dropHandle($event,'foreign')"
                @dragover.prevent
              >
                <ForeignTrade 
                  :currentTpl="currentTpl"
                  :config="config_foreign"
                />
              </div>
          </Col>
          <Col span="12">
              <div 
                class="module-box"
                style="height:300px"
                @drop="dropHandle($event,'domestic')"
                @dragover.prevent
              >
                <DomesticTrade 
                  :currentTpl="currentTpl"
                  :config="config_domestic"
                />
              </div>
          </Col>                                       
      </Row>
    </div>
    <!-- 报表 模板1  end -->


    <!-- 报表 模板2 begin -->
    <div v-if="currentTpl==2">
      <Row>
          <Col span="8">
              <div 
                class="module-box"
                style="height:300px"
                @drop="dropHandle($event,'production')"
                @dragover.prevent
              >
                <Production 
                  :currentTpl="currentTpl"
                  :config="config_production"
                />
              </div>
          </Col>   
          <Col span="8">
              <div 
                class="module-box"
                style="height:300px"
                @drop="dropHandle($event,'inventory')"
                @dragover.prevent
              >
                <Inventory 
                  :currentTpl="currentTpl"
                  :config="config_inventory"
                />
              </div>
          </Col>     
          <Col span="8">
              <div 
                class="module-box"
                style="height:300px"
                @drop="dropHandle($event,'inventory2')"
                @dragover.prevent
              >
                <Inventory2 
                  :currentTpl="currentTpl"
                  :config="config_inventory2"
                />
              </div>
          </Col>   
          <Col span="8">
              <div 
                class="module-box"
                style="height:300px"
                @drop="dropHandle($event,'puality')"
                @dragover.prevent
              >
                <Puality 
                  :currentTpl="currentTpl"
                  :config="config_puality"
                />
              </div>
          </Col>                            
          <Col span="8">
              <div 
                class="module-box"
                style="height:300px"
                @drop="dropHandle($event,'foreign')"
                @dragover.prevent
              >
                <ForeignTrade 
                  :currentTpl="currentTpl"
                  :config="config_foreign"
                />
              </div>
          </Col>
          <Col span="8">
              <div 
                class="module-box"
                style="height:300px"
                @drop="dropHandle($event,'domestic')"
                @dragover.prevent
              >
                <DomesticTrade 
                  :currentTpl="currentTpl"
                  :config="config_domestic"
                />
              </div>
          </Col> 

      </Row>
     </div>
    <!-- 报表 模板2  end -->


    <!-- 报表 模板3 begin -->
    <div v-if="currentTpl==3">
      <Row>
          <Col span="12">
              <div 
                class="module-box"
                style="height:612px"
                @drop="dropHandle($event,'production')"
                @dragover.prevent
              >
                <Production 
                  :currentTpl="currentTpl"
                  :config="config_production"
                />
              </div>
          </Col> 
          <Col span="12">
            <Row>
              <Col span="12">
                  <div 
                    class="module-box"
                    style="height:300px"
                    @drop="dropHandle($event,'inventory')"
                    @dragover.prevent
                  >
                    <Inventory 
                      :currentTpl="currentTpl"
                      :config="config_inventory"
                    />
                  </div>
              </Col>  
             <Col span="12">
                <div 
                  class="module-box"
                  style="height:300px"
                  @drop="dropHandle($event,'inventory2')"
                  @dragover.prevent
                >
                  <Inventory2 
                    :currentTpl="currentTpl"
                    :config="config_inventory2"
                  />
                </div>
              </Col>                           
              <Col span="12">
                  <div 
                    class="module-box"
                    style="height:300px"
                    @drop="dropHandle($event,'foreign')"
                    @dragover.prevent
                  >
                    <ForeignTrade 
                      :currentTpl="currentTpl"
                      :config="config_foreign"
                    />
                  </div>
              </Col>
              <Col span="12">
                  <div 
                    class="module-box"
                    style="height:300px"
                    @drop="dropHandle($event,'domestic')"
                    @dragover.prevent
                  >
                    <DomesticTrade 
                      :currentTpl="currentTpl"
                      :config="config_domestic"
                    />
                  </div>
              </Col>                 
 
 
            </Row>
          </Col>


                     
      </Row>

    </div>
    <!-- 报表 模板3  end -->

    <Row v-else></Row>
    
  </div>  
</template>
<script>


  import ForeignTrade from "./BI/foreignTrade.vue";            // 报表 外贸订单
  import DomesticTrade from "./BI/domesticTrade.vue";          // 报表 内贸订单
  import Inventory from "./BI/inventory.vue";                 // 报表 配件库存表
  import Inventory2 from "./BI/inventory2.vue";                 // 报表 配件库存表2
  import Production from "./BI/production.vue";               // 报表 各产品生产进度表
  import Puality from "./BI/quality.vue";                    // 报表 月度质量趋势表



  export default {
    components: {

      ForeignTrade,
      DomesticTrade,
      Inventory,
      Inventory2,
      Production,
      Puality
    },
    data () {
      return {
        currentTpl:1,

        imgBag: require("./Img/top.png"),   // 头 背景
        imgIcon: require("./Img/logo.png"),   // 头 icon

        

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