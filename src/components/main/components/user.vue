<template>
  <div class="user">
    <Dropdown
      @on-click="handleClick"
    >
      <a href="javascript:void(0)">
        {{userName}}
        <Icon type="ios-arrow-down"></Icon>
      </a>
      <DropdownMenu slot="list">
        <DropdownItem name="logout">退出登录</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </div>
</template>
<script>
export default {
  name: "User",
  data() {
    return {
      userName:'用户名'
    };
  },
  methods: {
    handleClick(name){
      console.log(name)
      switch(name){
        case 'logout':
          this.logout()
          break
      }
    },
    logout(){

    }
  },
};
</script>
<style lang="less" scoped>
.user {
  float: right;
}
</style>
