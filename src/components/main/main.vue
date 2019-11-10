<template>
  <Layout class="akc-layout">
    <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
      <side-menu @on-select="goToPage" :active-name="activeName" :open-names="openNames" :menu-list="menuList"></side-menu>
    </Sider>
    <Layout>
      <Header :style="{padding: 0}" class="layout-header-bar">
        <Icon
          @click.native="collapsedSider"
          :class="rotateIcon"
          :style="{margin: '0 20px'}"
          type="md-menu"
          size="24"
        ></Icon>
      </Header>
      <Content :style="{margin: '20px', background: '#fff', minHeight: '260px'}">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </Content>
    </Layout>
  </Layout>
</template>
<script>
import SideMenu from "./components/side-menu.vue";

import "./main.less";

export default {
  name: "Main",
  data() {
    return {
      isCollapsed: false,
      activeName:this.$route.name,
      openNames:[''],
      // openNames:['_about'],
    };
  },
  components: {
    SideMenu
  },
  computed: {
    rotateIcon() {
      return ["menu-icon", this.isCollapsed ? "rotate-icon" : ""];
    },
    menuitemClasses() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    },
    menuList(){
      return this.$store.getters.menuList
    }
  },
  mounted() {
    this.openNames = this.getOpenedNamesByActiveName(this.activeName)
    console.log(this.openNames,'==========')
  },
  methods: {
    goToPage(route){
      console.log(route)

      if(typeof route === 'string') name = route

      this.$router.push({
        name,
      }).catch(e=>{})
    },
    collapsedSider() {
      this.$refs.side1.toggleCollapse();
    },
    getOpenedNamesByActiveName (name) {
      let x = this.$route.matched.map(item => item.name).filter(item => item !== name)
      return x
    },
  }
};
</script>
<style lang="less" scoped>
.akc-layout {
  height: 100%;
  background: #f5f7f9;
  position: relative;
  overflow: hidden;
}
.layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
.layout-logo-left {
  width: 90%;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  margin: 15px auto;
}
.menu-icon {
  transition: all 0.3s;
}
.rotate-icon {
  transform: rotate(-90deg);
}
.menu-item span {
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width 0.2s ease 0.2s;
}
.menu-item i {
  transform: translateX(0px);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
}
.collapsed-menu span {
  width: 0px;
  transition: width 0.2s ease;
}
.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
  vertical-align: middle;
  font-size: 22px;
}
</style>
