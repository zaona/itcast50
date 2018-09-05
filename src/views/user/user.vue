<template>
   <el-card class="card">
       <el-breadcrumb class="details" separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>用户管理</el-breadcrumb-item>
          <el-breadcrumb-item>权限列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-row>
            <el-col :span="24">
                <el-input clearable v-model="serchValue" placeholder="请输入内容" style="width: 300px">
                   <el-button slot="append" icon="el-icon-search" @click="handleSearch"></el-button>
                </el-input>
                <el-button type="success" plain>成功按钮</el-button>
            </el-col>
        </el-row>
        <!-- 搜索 -->
        <el-table
            V-loading="loading"
            :data="tableData"
            border
            stripe
            style="width: 100%">
            <el-table-column
                type="index"
                width="50">
            </el-table-column>
            <el-table-column
                prop="username"
                label="姓名"
                width="180">
            </el-table-column>
            <el-table-column
                prop="email"
                label="邮箱"
                width="180">
            </el-table-column>
            <el-table-column
                prop="mobile"
                label="电话">
            </el-table-column>
            <el-table-column
                prop="create_time"
                label="时间">
                <template slot-scope="scope">
                    {{ scope.row.create_time | fmtData('YYYY-MM-DD') }}
                </template>
            </el-table-column>
            <el-table-column
                label="用户状态">
                <template slot-scope="scope">
                  <el-switch
                    v-model="scope.row.mg_state"
                    active-color="#13ce66"
                    inactive-color="#ff4949">
                  </el-switch>
                </template>
            </el-table-column>
            <el-table-column
                label="操作">
                <template slot-scope="scope">
                  <el-button plain size="mini" type="primary" icon="el-icon-edit"></el-button>
                  <el-button plain size="mini" type="success" icon="el-icon-check"></el-button>
                  <el-button plain size="mini" type="danger" icon="el-icon-delete"></el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="1"
        :page-sizes="[2, 3, 4, 5]"
        :page-size="pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
        </el-pagination>
   </el-card>
</template>

<script>
export default {
  data () {
    return {
      tableData: [],
      loading: true,
      pagenum: 1,
      pagesize: 2,
      total: 0,
      serchValue: ''
    }
  },
  created () {
      this.loadData()
  },
  methods: {
        loadData () {
          this.loading = true
          const token = sessionStorage.getItem('token')
          this.$http.defaults.headers.common['Authorization'] = token
          this.$http
            .get(`users?pagenum=${this.pagenum}&pagesize=${this.pagesize}&query=${this.serchValue}`)
            .then((response)=>{
                console.log(response)
                this.loading = false
                const { meta: { msg, status}} = response.data
          if (status === 200) {
            this.tableData = response.data.data.users
            this.total = response.data.data.total
          } else {
            this.$message.error(msg)
          }
        }).catch((err) => {
          console.log(err)
        })
    },
    handleSizeChange(val) {
        //每页的条数
        this.pagesize = val
        this.loadData()
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
          //第几页
          this.pagenum = val
          this.loadData()
        console.log(`当前页: ${val}`);

      },
      handleSearch () {
        //   alert(1)
          this.loadData()
      }
  }
}
</script>
<style>
.card {
    height: 100%;
}
.details {
    padding: 10px;
}
</style>
