<template>
  <div class="login-form">
    <div class="form-header">
      <img class="logo" :src="maxLogo" alt="">
      <span class="welcome">{{welcome}}</span>
    </div>
    <Form ref="formInline" :model="formInline" :rules="ruleInline">
      <FormItem prop="user">
        <Input type="text" v-model="formInline.user" :placeholder=username>
          <Icon type="ios-person-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem prop="password">
        <Input type="password" v-model="formInline.password" :placeholder=password>
          <Icon type="ios-lock-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem>
        <Button type="primary" long @click="handleSubmit('formInline')">{{signin}}</Button>
      </FormItem>
    </Form>
  </div>
</template>
<script>
import maxLogo from "@/assets/aifadan_max.png"

export default {
  name: "LognFrom",
  data() {
    return {
      maxLogo,
      formInline: {
        user: "",
        password: ""
      },
      ruleInline: {
        user: [
          {
            required: true,
            message: "Please fill in the user name",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "Please fill in the password.",
            trigger: "blur"
          },
          {
            type: "string",
            min: 6,
            message: "The password length cannot be less than 6 bits",
            trigger: "blur"
          }
        ]
      }
    };
  },
  computed: {
    welcome(){
      return this.$t('welcome')
    },
    username(){
      return this.$t('username')
    },
    password(){
      return this.$t('password')
    },
    signin(){
      return this.$t('signin')
    }
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success("Success!");
        } else {
          this.$Message.error("Fail!");
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
.login-form {
  width: 300px;
  padding: 24px;
  background-color: #fff;
  border-radius: 4px;
  .form-header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .logo {
    width: 120px;
    margin-bottom:10px;
  }
  .welcome{
    margin-bottom: 10px;
  }
}
</style>
