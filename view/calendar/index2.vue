<style lang="less">
.transfer-class-calendar{
  .ivu-color-picker-picker-panel{
    visibility: hidden;
  }
}

.calendar-html{
  .calendar-container{
    
    >div{
      display: inline-block;
      // border-top: 1px solid #ccc;
      // border-left: 1px solid #ccc;
      width: 761px;
      // background: chartreuse;
      width: 536px;

      span:nth-child(1){
        width: 77px;
        border-top: 1px solid #ccc;  
        border-left: 1px solid #ccc;  
      }
      span:nth-child(2){
        border-top: 1px solid #ccc;  
      }  
      span:nth-child(3){
        border-top: 1px solid #ccc;  
      }           
      span:nth-child(4){
        width: 77px;
        border-left: 1px solid #ccc;  
      }
      span:nth-child(7){
        height: 77px;
        border-top: 1px solid #ccc;  
        border-left: 1px solid #ccc;  
      }
      span:nth-child(8){
        height: 77px;
        border-top: 1px solid #ccc;  
      }      
      span:nth-child(12){
        height: 77px;
        border-top: 1px solid #ccc;  
      } 
      span:nth-child(13){
        height: 77px;
        border-top: 1px solid #ccc;  
      } 
      span:nth-child(14){
        border-left: 1px solid #ccc;  
      }
      span:nth-child(21){
        border-left: 1px solid #ccc;  
      }
      span:nth-child(28){

        border-left: 1px solid #ccc;  
      }
      span:nth-child(31){
        border-left: 1px solid #ccc;  
      }      


      span:nth-child(1){
        margin-left: 151px;
        background:#ff0000;
      }

      span:nth-child(3){
        margin-right: 100px;
      }

      span:nth-child(4){
        margin-left: 151px;
      }  

      span:nth-child(6){
        margin-right: 100px;
      } 

      span:nth-child(28){
        margin-left: 151px;
        width: 77px;
      } 
      span:nth-child(31){
        width: 77px;
        margin-left: 227px;
      } 

      span{
        position: relative;
        display: inline-block;
        text-align: center;
        width: 76px;
        height: 76px;
        border-right: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        text-align: center;
        line-height: 60px;

        .ivu-color-picker{
          position: absolute;
          left: 11px;
          bottom: -15px;
        }

      }
    }
  }
}
</style>
<template>
  <div class="calendar-html">
    <div>
      <Button type="primary" @click="saveData">保存</Button>
      <Button type="primary" @click="getData">查询</Button>
    </div>
    <div>
      <h3 style="margin-bottom: 20px;text-align: center;font-size: 32px;">
        安全绿十字
      </h3>
    </div>
    <div>
      <VForm :labelWidth="140" :hideBtn="true" :model="maintainForm" ref="maintainForm" type='Page'>
      <Row>
          <i-col span="6">
              <div style="margin-left: 70px">
                <span>选择年月：</span><DatePicker type="month" name="date" v-model="maintainForm.date" style="width: 150px"></DatePicker>
              </div>
              <br/>

          </i-col>
        <i-col span="18">
          <div class="calendar-container">
            <div>
              <span v-for="(o,index) in data" :key="index" :style="`background:${o['color']||'#fff'}`">
                  <b :style="`color:${o['color']?'#fff':'#000'}`">{{o["value"]}}</b>
                  <ColorPicker
                      v-model="o['color']"
                      transfer-class-name="transfer-class-calendar"
                      size="small"
                      :hue="false"
                      :editable="false"
                      :transfer="true"
                      :recommend="true"
                      :colors="['#006600','#003399','#FFCC00','#990000']"
                  />
              </span>
            </div>
          </div>
        </i-col>

      </Row>
      </VForm>
    </div>
  </div>
</template>
<script>
export default {
  created() {
    // this.getData();
  },
  data () {
    return {
      maintainForm:{},
      value:'',
                data:[
                    {
                        value:1,
                        color:""
                    },
                    {
                        value:2,
                        color:""
                    },
                    {
                        value:3,
                        color:""
                    },
                    {
                        value:4,
                        color:""
                    },
                    {
                        value:5,
                        color:""
                    },
                    {
                        value:6,
                        color:""
                    },
                    {
                        value:7,
                        color:""
                    },
                    {
                        value:8,
                        color:""
                    },
                    {
                        value:9,
                        color:""
                    },
                    {
                        value:10,
                        color:""
                    },
                    {
                        value:11,
                        color:""
                    },
                    {
                        value:12,
                        color:""
                    },
                    {
                        value:13,
                        color:""
                    },
                    {
                        value:14,
                        color:""
                    },
                    {
                        value:15,
                        color:""
                    },
                    {
                        value:16,
                        color:""
                    },
                    {
                        value:17,
                        color:""
                    },
                    {
                        value:18,
                        color:""
                    },
                    {
                        value:19,
                        color:""
                    },
                    {
                        value:20,
                        color:""
                    },
                    {
                        value:21,
                        color:""
                    },
                    {
                        value:22,
                        color:""
                    },
                    {
                        value:23,
                        color:""
                    },
                    {
                        value:24,
                        color:""
                    },
                    {
                        value:25,
                        color:""
                    },
                    {
                        value:26,
                        color:""
                    },
                    {
                        value:27,
                        color:""
                    },
                    {
                        value:28,
                        color:""
                    },
                    {
                        value:29,
                        color:""
                    },
                    {
                        value:30,
                        color:""
                    },
                    {
                        value:31,
                        color:""
                    }                                                                                                                                                                                                                                                                                                                                
                ]
    }
  },
  methods: {
    /**
     * 保存数据
     */
    saveData: function(){
      let me = this;
      if(null == me.maintainForm.lineId){
        app.utils.showMessage('请选择产线！', 2);
        return;
      }
      if(null == me.maintainForm.teamWorkTimeId){
        app.utils.showMessage('请选择班次！', 2);
        return;
      }
      app.utils.ajaxRequest({
        hideMsg: false,
        url: app.Config.serverPath + 'tbPpSafetyCrossRecord/saveData.do',
        params: {
          'month': me.maintainForm.date,
          'lineId': me.maintainForm.lineId,
          'teamWorkTimeId': me.maintainForm.teamWorkTimeId,
          'data': JSON.stringify(me.data)
        },
        callBack: function callBack(r) {
          me.getData();
        }

      })
    },

  },
}
</script>