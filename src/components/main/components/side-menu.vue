<template>
  <div class="side-menu-wrapper">
    <slot></slot>
    <Menu ref="menu" accordion @on-select="handleSelect" :active-name=activeName :open-names=openNames theme="dark" width="auto" >
      <template v-for="item in menuList">
        <template v-if="item.children && item.children.length >= 0">
          <Submenu :name="item.name" :key="`menu-${item.name}`">
            <template slot="title">
              <Icon :type="item.meta.icon"></Icon>
              <span class="menu-name">{{showTitle(item)}}</span>
            </template>
            <template v-for="subitem in item.children">
              <MenuItem :name="subitem.name" :key="`subitem-${subitem.name}`">
                {{showTitle(subitem)}}
              </MenuItem>
            </template>
          </Submenu>
        </template>
      </template>
      <!-- <Submenu name="1">
        <template slot="title">
          <Icon type="ios-navigate"></Icon>Item 1
        </template>
        <MenuItem name="1-1">Option 1</MenuItem>
        <MenuItem name="1-2">Option 2</MenuItem>
        <MenuItem name="1-3">Option 3</MenuItem>
      </Submenu>-->
    </Menu>
  </div>
</template>
<script>
import mixin from './mixin'

export default {
  name: "SideMenu",
  mixins:[mixin],
  data() {
    return {};
  },
  props: {
    menuList: {
      type: Array,
      default() {
        return [];
      }
    },
    activeName:{
      type:String,
      default:'',
    },
    openNames:{
      type:Array,
      default:()=>[],
    }
  },
  mounted() {
  },
  watch:{
    openNames(newVal){
      this.$nextTick(() => {
        this.$refs.menu.updateOpened()
      })
    }
  },
  methods: {
    handleSelect(name){
      this.$emit('on-select',name)
    }
  },
};
</script>
<style lang="less" scoped>
.collapsed-menu{
  .menu-name,
  /deep/.ivu-menu-submenu-title-icon{
    display: none;
  }
  /deep/.ivu-menu-submenu-title{
    text-align: center;
  }
}
</style>
