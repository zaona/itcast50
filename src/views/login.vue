<template>
    <div class="login-wrap">
        <el-form label-position="top" label-width="80px" :model="formData" class="login-form">
        <el-form-item label="用户名">
            <el-input v-model="formData.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
            <el-input type="password" v-model="formData.password"></el-input>
        </el-form-item>
        <el-button type="primary" class="login-btn" @click="handleLogin">登录</el-button>
        </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formData: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    handleLogin () {
      this.$http
        .post('login', this.formData)
        .then((result) => {
          const data = result.data
          const {meta: {status, msg}} = data
          if (status === 200) {
            const token = data.data.token
            sessionStorage.setItem('token', token)
            this.$message.success(msg)
          } else {
            this.$message.console.error(msg)
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style>
.login-wrap {
  background-color: #324152;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-form {
  width: 500px;
  padding: 30px;
  border-radius: 5px;
  background-color: #fff;
}
.login-btn {
  margin-top: 40px;
  width: 500px;
}

</style>
