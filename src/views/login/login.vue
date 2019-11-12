<template>
    <div class="login">
      <LoginForm></LoginForm>
    </div>
</template>
<script>
import LoginForm from '@/components/login-form'

export default {
    name: 'Login',
    components:{
      LoginForm,
    },
    data() {
        return {

        }
    },
}
</script>
<style lang="less" scoped>
.login{
  display: flex;
  align-items: center;
  justify-content: center;
  width:100%;
  height:100%;
  background:url('../../assets/login_bg.jpg') center/cover no-repeat transparent;
}
</style>
