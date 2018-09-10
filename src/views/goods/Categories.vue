<template>
    <el-card class="card">
        <!-- 面包屑导航栏 -->
      <el-breadcrumb class="details" separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>用户管理</el-breadcrumb-item>
        <el-breadcrumb-item>权限列表</el-breadcrumb-item>
      </el-breadcrumb>
      <!-- 按钮 -->
      <el-button type="success" plain style="margin-top:10px; margin-bottom:10px">添加分类</el-button>
      <!-- 表格 -->
      <el-table
      border
      stripe
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="cat_name"
        label="分类名称"
        width="300">
      </el-table-column>
      <el-table-column
        prop="cat_level"
        label="级别"
        width="180">
        <template slot-scope="scope">
          <span v-if="scope.row.cat_level === 0">一级</span>
          <span v-if="scope.row.cat_level === 1">二级</span>
          <span v-if="scope.row.cat_level === 2">三级</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        label="是否有效">
        <template slot-scope="scope">
          {{ scope.row.cat_deleted ? '无效' : '有效' }}
        </template>
      </el-table-column>
      <el-table-column
        label="操作">
        <template slot-scope="scope">
          <el-button plain size="mini" type="primary" icon="el-icon-edit"></el-button>
          <el-button plain size="mini" type="danger" icon="el-icon-delete" @click="handledelete(scope.row)"></el-button>
        </template>
      </el-table-column>
    </el-table>
    </el-card>
</template>

<script>
export default {
  data () {
    return {
      tableData:[]
    }
  },
  created () {
      this.loadData()
  },
  methods: {
    async loadData () {
      const response = await this.$http.get('categories?type=3&pagenum=1&pagesize=5')
      const {meta: {msg, status } } = response.data
      if (status === 200) {
        this.tableData = response.data.data.result;
      } else {
          this.$message.error(msg);
          
      }
    },
    async handledelete (cat) {
        await this.$confirm('确认要删除么？', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
        .then(async ()=>{
          const response = await this.$router.delete(`categories/${cat.cat_id}`)
          const { meta: {msg, status } } = response.data
          if (status === 200) {
            this.$message.success(msg)
            this.loadData()
          }
        })
        .catch(()=>{
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
  }
  }
}
</script>

<style scoped>

</style>
