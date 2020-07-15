<style lang="scss">

  .custom-drag-home{

    .flip-list-move {
      transition: transform 0.7s;
    }

    .no-move {
      transition: transform 0.7s;
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
        min-width: 100px;
        min-height: 100px;
        float: left;
        margin: 6px 6px;
        border: 1px solid #dcdee2;
        border-color: #e8eaec;
        border-radius: 4px;
        box-shadow: 2px 2px 4px 1px rgba(184, 184, 184, 0.4);
        transition: all 0.5s;


        &.is-checked{
          border-width: 2px;
          border-style: dashed;
          box-shadow: none;
          border-color: rgba(100,149,237,0.8);
        }

        .move-handle{
          line-height: 30px;
          text-align: center;
          cursor: all-scroll;
          width: 30px;
          height: 30px;
          background: burlywood;
        }
      }
    }

  }




</style>
<template>
  <div class="custom-drag-home">
    <!-- <div>
      <button class="btn btn-secondary button" @click="resetHandle">重置</button>
    </div> -->

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
            v-on:click.self="groupItemHandle(o,$event)"
          >
            <div class="handle move-handle"><Icon type="md-move" /></div>
            <!-- <div><Icon type="md-move" /></div> -->
            
          </div>
        </transition-group>
      </draggable>
    </div>


  </div>
</template>

<script>
import draggable from "vuedraggable";

export default {
  // name: "transition-example-2",
  // display: "Transitions",
  // order: 7,
  components: {
    draggable
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
      keyChecked: undefined,   // 选中的 盒子
      eventTarget: undefined,  // 目标 event

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
  created() {
      // document.addEventListener("click",(e)=>{
      //     // this.$el.contains();
      //     setTimeout(() => {
      //       console.log( 'ninini' );
      //         // console.log(e); 
      //         // console.log( this.$el.contains(this.eventTarget)  );
      //     },300);
      // });
  }, 
  methods: {
    /**
     * 选中 盒子
     */
    groupItemHandle: function(option,event){
      this.keyChecked=option['_key'];
      this.eventTarget=event.target;
      event.stopPropagation();
    },
    /**
     * 重置
     */
    resetHandle: function(){
      // console.log(this.list);
      this.list = this.list.sort((a, b) => a._key - b._key);
    }
  }
};
</script>


