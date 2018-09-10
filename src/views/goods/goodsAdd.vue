<template>
 <el-card class="card">
   <el-breadcrumb class="details" separator-class="el-icon-arrow-right">
     <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
     <el-breadcrumb-item>商品管理</el-breadcrumb-item>
     <el-breadcrumb-item>商品分类</el-breadcrumb-item>
   </el-breadcrumb>
   <!-- 警告 -->
   <el-alert
    style="margin-top: 10px; margin-buttom: 10px"
    closable="false"
    title="消息提示的文案"
    type="info"
    center
    show-icon>
  </el-alert>
  <!-- 步骤条 -->
  <el-steps
    :active="active"
    finish-status="success"
    align-center
    style="margin-top:10px; margin-buttom:10px">
    <el-step title="基本信息"></el-step>
    <el-step title="商品参数"></el-step>
    <el-step title="商品属性"></el-step>
    <el-step title="商品图片"></el-step>
    <el-step title="商品内容"></el-step>
  </el-steps>
  <!-- tab栏 -->
    <el-tabs
      :tab-position="tabPosition"
      style="height: 200px;">
      <el-tab-pane label="用户管理">用户管理</el-tab-pane>
      <el-tab-pane label="配置管理">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
    </el-tabs>
 </el-card>
</template>

<script>
export default {
  data () {
    return {
      tabPosition:'left'
    }
  }
}
</script>

<style>

</style>
