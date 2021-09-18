<style scoped>
    .layout-con{
        height: 100%;
        width: 100%;
    }
    .menu-item span{
        display: inline-block;
        overflow: hidden;
        width: 69px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
    }
    .menu-item i{
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
    }
    .collapsed-menu span{
        width: 0px;
        transition: width .2s ease;
    }
    .collapsed-menu i{
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
    }
</style>
<template>
    <div class="layout">
        <Layout :style="{minHeight: '100vh'}">
            <Sider collapsible :collapsed-width="78" v-model="isCollapsed">
                <Menu theme="dark" width="auto" @on-select="menuSelect" :class="menuitemClasses">
                    <MenuItem 
                      v-for="(o,i) in menuList"
                      :key="i"
                      :name="o.path"
                    >
                      <Icon style="font-size:12px" type="ios-navigate"></Icon>
                      <span style="font-size:12px">{{o.name}}</span>
                    </MenuItem>
                </Menu>
            </Sider>
            <Layout>
                <Content :style="{background:'#fff',padding: '0 16px 16px'}">
                  <router-view></router-view>
                </Content>
            </Layout>
        </Layout>
    </div>
</template>
<script>
export default {
  data () {
      return {
          isCollapsed: false,
          menuList:[
            {name:"测试页面",path:"/wis/test"},
            {name:"首页-可拖拽",path:"/wis/homeDrag"},
            {name:"首页2",path:"/wis/home3"},
            {name:"富文本编辑器",path:"/wis/tinymce"},
            {name:"Table-动态列",path:"/wis/dynamic/table"},
            {name:"大金-布局图",path:"/wis/home2"},
            {name:"日历",path:"/wis/calendar"},
            {name:"注册",path:"/wis/components"},
            {name:"看板",path:"/wis/board"},


          ]
      };
  },
  computed: {
      menuitemClasses: function () {
          return [
              'menu-item',
              this.isCollapsed ? 'collapsed-menu' : ''
          ]
      }
  },
  methods:{
    menuSelect:function(path){
      this.$router.push({path:path})
    }
  }
}
</script>
