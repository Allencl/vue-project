<style lang="scss">

  .custom-drag-home{
    // position: relative;
    width: fit-content;

    &.gridding{
      background-image: 
        linear-gradient(#000 1px, transparent 0),
        linear-gradient(90deg, #000 1px, transparent 0);
      background-size: 20px 20px;
    }

    .flip-list-move {
      // transition: transform 0.7s;
    }

    .no-move {
      // transition: transform 0.7s;
    }

    .ghost {
      opacity: 0.5;
      background: #c8ebfb;
    }


    
    .custom-home-list-group{

      >span{
        display: inline-block;
      }

      .custom-home-list-group-item{
        position: relative;
        // min-width: 100px;
        // min-height: 100px;
        float: left;
        margin: 6px 6px;
        border: 1px solid #dcdee2;
        border-color: #e8eaec;
        border-radius: 4px;
        box-shadow: 2px 2px 4px 1px rgba(184, 184, 184, 0.4);
        background: #fff;
        // transition: all 0.5s;

        .controller-box{
          display: none;
          position: relative;

          .ivu-tooltip{
            position: absolute;
            right: 20px;
            bottom: -12px;     
          }

          .right-bottom{
            position: absolute;
            right: -5px;
            bottom: -5px;
            display: block;
            width: 12px;
            height: 12px;
            background: #fff;
            border: 1px solid #ccc;
            z-index: 111;
            cursor: nw-resize;
          }
        }


        &.is-checked{
          border-width: 1.5px;
          border-style: dashed;
          box-shadow: none;
          border-color: rgba(100,149,237,0.8);
          border-radius: 0px;

          .move-handle{
            display: block;
          }

          .controller-box{
            position: absolute;
            top: 0px;
            left: 0px;
            z-index: 11;
            display: block;
            width: 100%;
            height: 100%;
            background: rgba(240,250,255,0.9);
          }
        }

        .move-handle{
          display: none;
          position: absolute;
          top: 0px;
          left: 0px;
          z-index: 111;
          line-height: 30px;
          text-align: center;
          cursor: all-scroll;
          width: 30px;
          height: 30px;
          transition: all 0.2s;
          color: #fff;
          font-size: 22px;
          background-color: #FFD700;

          &:hover{
            transform: rotate(45deg);
          }
        }
      }
    }

  }




</style>
<template>
  <div :class="`custom-drag-home ${tooltipAction?'gridding':''}`">
    <!-- <div>
      <button class="btn btn-secondary button" @click="resetHandle">重置</button>
    </div> -->
    <customTable 
      @addModle="addModleHandle"
    />


    <div v-if="config['chidden']['length']">
      <draggable
        class="custom-home-list-group"
        v-model="list"
        v-bind="dragOptions"
        handle=".handle"
        @start="drag = true"
        @end="drag = false"
      >
        <!-- <transition-group type="transition" :name="!drag ? 'flip-list' : null"> -->
        <transition-group type="transition">
          <div
            v-for="(o,i) in list"
            :key="i"
            :class="`custom-home-list-group-item ${keyChecked==o['_key']?'is-checked':''}`"
            :style="`height:${o.height}px;width:${o.width}px;`"
            v-on:click="groupItemClick(o,$event)"
            v-on:dblclick="groupItemDblclick(o,$event)"
            @drop="dropHandle(o,$event)"
            @dragover.prevent
          >
            <div class="handle move-handle"><Icon type="md-move" /></div>
            <div class="controller-box">
              <b v-drag_arrows="{data:o}" class="right-bottom" :title="`${o['width']} x ${o['height']}`"></b>
              <Tooltip v-if="tooltipAction" :content="`${o['width']} x ${o['height']}`" placement="bottom-start" always></Tooltip>
            </div>
            <!-- <div><Icon type="md-move" /></div> -->
            <div>
              <h1>
                <BIPage 
                  :config="o['config_chart']"
                />
              </h1>
            </div>
          </div>
        </transition-group>
      </draggable>
    </div>


  </div>
</template>

<script>
import draggable from "vuedraggable";
import customTable from "./table.vue";        // table
import BIPage from "./BI/index.vue";          // BI 报表


export default {
  // name: "transition-example-2",
  // display: "Transitions",
  // order: 7,
  components: {
    draggable,
    customTable,
    BIPage
  },
  props: {
    // 配置文件
    config:{
        type: Object,
        default:()=>{}      
    },
  },   
  data(_this) {
    return {
      drag: false,
      keyChecked: undefined,      // 选中的 盒子
      tooltipAction:false,        // 


      // list 数据
      list:(_this.config['chidden']||[]).map((o,i)=> Object.assign({},o,{_key:i})),
      

    };
  },
  computed: {
    dragOptions() {
      return {
        animation: 600,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
      };
    }
  },  
  watch: {
      // 监听 控制器
      'keyChecked'(){
          if( this.keyChecked!=undefined ){
            this.tooltipAction=false;
            this.$nextTick(()=>{
              this.tooltipAction=true;
            });            
          }else{
            this.tooltipAction=false;
          }
      },    
  },   
  created() {
      let that=this;

      document.addEventListener("click",(event)=>{
        that.keyChecked=undefined;
      });
  }, 
  methods: {
    /**
     * 添加 模型
     */
    addModleHandle: function(){
      console.log("aaaa");
    },
    /*
      * 选中 盒子 双击
     */
    groupItemDblclick: function(option,event){
      this.keyChecked=option['_key'];
      event.stopPropagation();    
    }, 
    /**
     * 选中 盒子 单机
     */
    groupItemClick: function(option,event){
      event.stopPropagation();  
    },
    /**
     * 重置
     */
    resetHandle: function(){
      // console.log(this.list);
      this.list = this.list.sort((a, b) => a._key - b._key);
    },
    /**
     *  面板 拖拽
     */ 
    dropHandle: function (option,event) {
      let row = JSON.parse( event.dataTransfer.getData('item') );  

      console.log( option );
      console.log( row );

    },    
  },
  directives:{
    drag_arrows(el,option){
      el.onmousedown = function(e){
        var pNode=e.target.parentNode.parentNode;
        var disX=e.pageX;
        var disY=e.pageY;
        var disW=option.value.data["width"];
        var disH=option.value.data["height"];

        document.onmousemove = function (e){
          var newW=disW+(e.pageX-disX);
          var newH=disH+(e.pageY-disY);

          option.value.data["width"]=newW>=200?newW:200;
          option.value.data["height"]=newH>=200?newH:200;
        }

        document.onmouseup = function(event){
          document.onmousemove = document.onmouseup = null;
        }
      }
    }
  }
}
</script>


