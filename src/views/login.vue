<template>
    <div>
        <el-form label-position="top" label-width="80px" :model="formData">
        <el-form-item label="用户名">
            <el-input v-model="formData.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
            <el-input v-model="formData.password"></el-input>
        </el-form-item>
        <el-button type="primary">主要按钮</el-button>
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
  }
}
</script>

<style>

</style>
