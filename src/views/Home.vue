<template>
 <el-container>
   <el-header>
     <el-row>
      <el-col :span="3">
           <div class="grid-content bg-purple">
               <img src="@/assets/logo.png" alt="">
         </div>
      </el-col>
       <el-col :span="20"><div class="grid-content bg-purple-light middle">电商后台管理系统</div></el-col>
       <el-col :span="1"><div class="grid-content bg-purple-light"><a href="#" class="logout" @click="handleLogout">退出</a></div></el-col>
    </el-row>
   </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu default-active="2-1" class="menu" :unique-opened="true" :router="true">
        <!-- 用户管理-->
          <el-submenu index="1">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span>用户管理</span>
            </template>
          <el-menu-item index="/user">
              <i class="el-icon-location"></i>
            用户列表
          </el-menu-item>
        </el-submenu>
        <!-- 权限管理-->
        <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>权限管理</span>
        </template>
                  <el-menu-item index="/roles">
              <i class="el-icon-menu"></i>
            角色列表
          </el-menu-item>
            <el-menu-item index="/rights">
              <i class="el-icon-view"></i>
            权限列表
          </el-menu-item>
        </el-submenu>
        <!-- 商品管理-->
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>商品管理</span>
        </template>
                  <el-menu-item index="/goodsadd">
              <i class="el-icon-menu"></i>
            商品列表
          </el-menu-item>
            <el-menu-item index="3-1">
              <i class="el-icon-view"></i>
            分类參數
          </el-menu-item>
           <el-menu-item index="/categories">
              <i class="el-icon-view"></i>
            商品分类
          </el-menu-item>
        </el-submenu>
        <!--订单管理-->
        <el-submenu index="4">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span>订单管理</span>
            </template>
          <el-menu-item index="4-1">
              <i class="el-icon-location"></i>
            订单列表
          </el-menu-item>
        </el-submenu>
        <!--数据统计-->
          <el-submenu index="5">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span>数据统计</span>
            </template>
          <el-menu-item index="5-1">
              <i class="el-icon-location"></i>
            数据报表
          </el-menu-item>
        </el-submenu>
        </el-menu>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
    </el-container>
 </el-container>
 </template>

<script>
export default {
  beforeCreate () {
    const token = sessionStorage.getItem('token')
    if (!token) {
      this.$message.warning('请登录')
      this.$router.push({name: 'login'})
    }
  },
  methods: {
    handleLogout () {
      sessionStorage.clear()
      this.$router.push({name: 'login'})
      this.$message.success('退出成功')
    }
  }
}
</script>

<style>
  .el-aside {
    height: 100%;
  }
  .el-container {
      height: 100%;
  }
  .middle {
      text-align: center;
      font-size: 24px;
      color: #fff;
  }
  .logout {
      text-decoration: none;
  }
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    /* text-align: center; */
    padding: 0;
    line-height: 60px;
  }

  .el-aside {
    /* background-color: #D3DCE6; */
    color: #333;
    /* text-align: center; */
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    /* text-align: center; */
    /* line-height: 160px; */
  }

</style>
