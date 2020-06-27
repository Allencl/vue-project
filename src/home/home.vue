<style lang="scss">
  .weima-home{
    .module-box{
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
  <div class="weima-home">
    <customTable 
      :currentTpl="currentTpl"
      :config="table_config"
      @templateChange="_templateChange"
    />

    <Row>
      <Col span="8">
        <div class="module-box" style="height:230px">
          <TodoPage 
            :config="config_todo"
          />
        </div>
      </Col>
      <Col span="8">
        <div class="module-box" style="height:230px">
          <ProjectPage 
            :config="config_project"
          />
        </div>
      </Col>      
      <Col span="8">
        <div class="module-box" style="height:230px">
          <NoticePage 
            :config="config_notice"
          />
        </div>
      </Col>       
    </Row>

    <!-- <Row>
        <Col span="8">
          <div class="module-box detail" >
            <customTemplate 
              :currentTpl="currentTpl"
              @templateChange="_templateChange"
            />
          </div>
        </Col>
    </Row>     -->
    <Row>
        <Col span="12">
            <div 
              class="module-box"
              style="height:250px"
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
              style="height:250px"
              @drop="dropHandle($event,'domestic')"
              @dragover.prevent
            >
              <DomesticTrade 
                :currentTpl="currentTpl"
                :config="config_domestic"
              />
            </div>
        </Col>  
        <Col span="12">
            <div 
              class="module-box"
              style="height:250px"
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
              style="height:250px"
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
              style="height:250px"
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
              style="height:250px"
              @drop="dropHandle($event,'puality')"
              @dragover.prevent
            >
              <Puality 
                :currentTpl="currentTpl"
                :config="config_puality"
              />
            </div>
        </Col>                       
    </Row>
 
  </div>  
</template>
<script>

  import customTable from "./table.vue";             // table
  // import customTemplate from "./template.vue";       // 模板切换

  import TodoPage from "./todo.vue";                  // 处理事项
  import ProjectPage from "./project.vue";            // 项目信息
  import NoticePage from "./notice.vue";            //  系统公告



  import ForeignTrade from "./BI/foreignTrade.vue";            // 报表 外贸订单
  import DomesticTrade from "./BI/domesticTrade.vue";          // 报表 内贸订单
  import Inventory from "./BI/inventory.vue";                 // 报表 配件库存表
  import Inventory2 from "./BI/inventory2.vue";                 // 报表 配件库存表2
  import Production from "./BI/production.vue";               // 报表 各产品生产进度表
  import Puality from "./BI/quality.vue";                    // 报表 月度质量趋势表






  export default {
    components: {
      customTable,

      TodoPage,
      ProjectPage,
      NoticePage,

      ForeignTrade,
      DomesticTrade,
      Inventory,
      Inventory2,
      Production,
      Puality
    },
    data () {
      return {
        currentTpl:1,   // 当前模板  默认模板一 
        table_config:{},   // 拖拽 table 配置文件

        config_todo:{},    // 配置文件 处理事项
        config_project:{},    // 配置文件 项目信息
        config_notice:{},    // 配置文件 系统 公告


        

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
          currentTpl:1,     // 当前模板
          table_config:{},  // 拖拽 table 配置文件

        } 


        this.currentTpl = config["currentTpl"];  // 设置模板
      },
      /**
       * 模板切换
       */
      _templateChange: function(num){
        this.currentTpl=num;
      },
      /**
       *  面板 拖拽
       */ 
      dropHandle: function (event,key) {
        let row = JSON.parse( event.dataTransfer.getData('item') );  

        this.bufferConfig();  // 缓存数据

        // 跟新模块数据
        switch ( key ) {
          case 'foreign':         // 外贸 订单
            this.config_foreign=row;
            break;
          case 'domestic':        // 内贸 订单
            this.config_domestic=row;
            break;
          case 'inventory':      // 配件库存表
            this.config_inventory=row;
            break;
          case 'inventory2':      // 配件库存表2
            this.config_inventory2=row;
            break;            
            
          case 'production':    // 各产品生产进度表
            this.config_production=row;
            break;
          case 'puality':      // 月度质量趋势表
            this.config_puality=row;
            break;
                                                      
          default:
            break;
        }

      },
      /**
       * 缓存 数据 
       * */    
      bufferConfig:function(){
        // 缓存 数据
        let config = {
          currentTpl:this.currentTpl,   // 当前模板
        }
      }
    }
  }
</script>