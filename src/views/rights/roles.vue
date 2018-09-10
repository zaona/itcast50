<template>
  <el-card class="card">
      <!-- 面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>角色管理</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 按钮 -->
    <el-button style="margin-top:10px; margin-bottom:10px" type="success" plain>添加角色</el-button>
    <!-- 表格 -->
    <el-table
      border
      stripe
      :data="tableData"
      style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="scope">
          <el-row
            v-for="level1 in scope.row.children"
            :key="level1.id">
            <el-col :span="4">
              <el-tag
                closable @close="hanldClose(scope.row, level1.id)">
                {{level1.authName}}
              </el-tag>
            </el-col>
            <el-col :span="20">
              <el-row
              v-for="level2 in level1.children" :key="level2.id" >
                <el-col :span="4">
                  <el-tag closable type="success" @close="hanldClose(scope.row, level2.id)">
                    {{level2.authName}}
                  </el-tag>
                </el-col>
                <el-col :span="20">
                  <el-row>
                    <el-col>
                      <el-tag class="level3" closable type="danger" @close="hanldClose(scope.row, level3.id)"
                      v-for="level3 in level2.children" :key="level3.id">
                        {{level3.authName}}
                      </el-tag>
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
          <el-row v-if="scope.row.children.length === 0">
            <el-col :span="24">没有分配权限</el-col>
          </el-row>
        </template>
      </el-table-column>
      <el-table-column
        type="index"
        width="60">
      </el-table-column>
      <el-table-column
        prop="roleName"
        label="角色名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="roleDesc"
        label="角色描述"
        width="280">
      </el-table-column>
      <el-table-column
        label="操作">
        <template slot-scope="scope">
          <el-button plain size="mini" type="success" icon="el-icon-check"></el-button>
          <el-button plain size="mini" type="danger" icon="el-icon-delete"></el-button>
          <el-button plain size="mini" type="primary" icon="el-icon-edit"></el-button>
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
          const response = await this.$http.get('roles')
          const { meta: {msg, status} } = response.data
          this.tableData = response.data.data
      },
      async hanldClose (row, id) {
        const response = await this.$http.delete(`roles/${row.id}/rights/${id}`)
        const { meta: {msg, status } } = response.data
        if (status == 200) {
            this.$message.seccuss(msg)
            this.loadData()
        } else {
            this.$message.error(msg)
        }
      }
  }
}
</script>

<style>
.level3 {
    margin-right: 5px;
    margin-bottom: 5px;
}
</style>
