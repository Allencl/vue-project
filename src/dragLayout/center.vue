<style lang="scss">
  .drag-content-iframe{
    .box-content{
      width:600px;
      height:600px;
      border:1px solid red;

      &.gridding{
        // position: relative; background: linear-gradient(-90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px) 10px 10px / 20px 20px, linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px) 0% 0% / 20px 20px; height: 400px; width: 400px; border: 1px solid blue; box-sizing: content-box;
        // position: relative; background: linear-gradient(-90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px) 10px 10px / 20px 20px, linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px) 0% 0% / 20px 20px; height: 400px; width: 400px; border: 1px solid blue; box-sizing: content-box;
        position: relative;background: linear-gradient(-90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px) 0% 0% / 20px 20px, linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px) 0% 0% / 20px 20px;
      }
    }
  }


</style>

<template>
  <div class="drag-content-iframe">
    <Row>
        <i-col span="2">
          <Checkbox v-model="configJson['grid']">网格</Checkbox>
        </i-col>
        <i-col span="4">
          <label>宽</label>
          <InputNumber 
            v-model="configJson['width']"
            :min="600"  
            size="small"
          ></InputNumber>
        </i-col>
        <i-col span="4">
          <label>高</label>
          <InputNumber 
            v-model="configJson['height']"
            :min="600" 
            size="small"
          ></InputNumber>
        </i-col>

    </Row>
    <div 
      :class="`box-content ${configJson['grid']?'gridding':''}`" 
    >
      <vue-draggable-resizable 
        :parent="true"
        :grid=[20,20] 

        :x="0"
        :y="0"


        @dragging="onDragElement" 
        @resizing="onResizeElement"     
      >
        <div style="width: 100%;height: 100%;">
          <div style="width:100%;height:100%;" id="main"></div>
        </div>
      </vue-draggable-resizable>
    </div>
  </div>

</template>

<script>
import VueDraggableResizable from 'vue-draggable-resizable';
import * as echarts from 'echarts';


export default {
  components: {
      VueDraggableResizable 
  },
  data: function () {
    return {

      //数据
      configJson:{
        width:600,  
        height:600,
        grid: true, // 网格
      }
    }
  },
  created() {
    setTimeout(()=>{
      this.initPage();  // 初始化
    },2000);
  }, 
  methods: {
    initPage: function(){
      var chartDom = document.getElementById('main');
      var myChart = echarts.init(chartDom);
      var option;

      option = {
          xAxis: {
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
              type: 'value'
          },
          series: [{
              data: [150, 230, 224, 218, 135, 147, 260],
              type: 'line'
          }]
      };

      option && myChart.setOption(option);
    },
    onDragElement:function(...aaa){
      console.log(aaa);
    },
    onResizeElement:function(){
      console.log(222);

    }
  }
}
</script>