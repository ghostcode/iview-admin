<template>
    <div class="header-bar">
      header-bar
      <User></User>
    </div>
</template>
<script>
import User from './user'

export default {
    name: 'HeaderBar',
    components:{
      User,
    },
    data() {
        return {

        }
    },
}
</script>
<style lang="less" scoped>
 .header-bar{
   padding:0 20px;
 }
</style>
