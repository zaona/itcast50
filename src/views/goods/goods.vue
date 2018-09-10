<template>
  <el-card class="card">
    <!-- 面包屑 -->
    <el-breadcrumb class="details" separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>商品分类</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 搜索 -->
    <el-row class="row">
      <el-col :span="24">
        <!-- 搜索文本框 -->
        <el-input
          clearable
          style="width: 300px"
          placeholder="请输入内容">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
        <el-button @click="$router.push('/goods/add')" type="success" plain>添加商品</el-button>
      </el-col>
    </el-row>
    <!-- 表格 -->
    <el-table
      border
      stripe
      :data="tableData"
      style="width: 100%">
      <el-table-column
        type="index"
        width="60">
      </el-table-column>
      <el-table-column
        prop="goods_name"
        label="商品名称"
        width="400">
      </el-table-column>
      <el-table-column
        prop="goods_price"
        label="商品价格(元)">
      </el-table-column>
      <el-table-column
        prop="goods_weight"
        label="商品重量">
      </el-table-column>
      <el-table-column
        prop="add_time"
        label="创建时间">
      </el-table-column>
      <el-table-column
        label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" icon="el-icon-edit" plain></el-button>
          <el-button size="mini" type="danger" icon="el-icon-delete" plain></el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
export default {
  data () {
      return {
        tableData: []
      }
  },
  created () {
      this.loadData()
  },
  methods: {
      async loadData () {
        const response = await this.$http.get('goods?pagenum=1&pagesize=5')
        const {meta: {msg, status} } = response.data
        if (status === 200) {
          this.tableData = response.data.data.goods
        } else {
            this.$message.error(msg)
        }
      }
  }
}
</script>

<style>
.row {
  margin-top: 10px;
  margin-bottom: 10px;
}
.el-table .cell {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>