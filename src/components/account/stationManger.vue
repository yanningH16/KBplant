<template>
  <div class="stationManger">
    <div class="search">
      <span>站点名称</span>
      <el-input placeholder="输入站点名称" style="width:180px;"></el-input>
      <em class="btn">查询</em>
    </div>
    <div class="table">
      <el-table :data="userList" style="width: 100%">
        <el-table-column fixed="left" prop="userName" label="站点ID" align="center" width="100">
        </el-table-column>
        <el-table-column prop="userName" label="站点名称" align="center" width="200">
        </el-table-column>
        <el-table-column prop="userName" label="单价(元)" align="center" width="120">
        </el-table-column>
        <el-table-column prop="userName" label="账户余额" align="center" width="120">
        </el-table-column>
        <el-table-column prop="userName" label="累计充值" align="center" width="120">
        </el-table-column>
        <el-table-column prop="userName" label="收款帐号" align="center" width="120">
        </el-table-column>
        <el-table-column prop="userName" label="客服QQ" align="center" width="120">
        </el-table-column>
        <el-table-column prop="userName" label="客服电话" align="center" width="120">
        </el-table-column>
        <el-table-column prop="userName" label="添加时间" align="center" width="120">
        </el-table-column>
        <el-table-column fixed="right" label="管理员" align="center" width="120">
          <template slot-scope="scope">
            <el-button type="text" size="small">123456</el-button>
          </template>
        </el-table-column>
        <el-table-column prop="userName" label="域名" align="center" width="120">
        </el-table-column>
        <el-table-column prop="userName" label="渠道名称" align="center" width="120">
        </el-table-column>
      </el-table>
    </div>
    <div class="pager">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
      </el-pagination>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'stationManger',
  data () {
    return {
      currentPage: 1,
      userList: [{
        userName: 'nfasnffsafn'
      }]
    }
  },
  methods: {
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.stationManger
  margin 20px
  padding 20px
  background #ffffff
  font-size 14px
  ::-webkit-scrollbar
    display block
    width 100%
    height 8px
  ::-webkit-scrollbar-thumb
    background #eeeeee
    border-radius 5px
  .search
    padding-bottom 20px
    span
      margin-right 10px
    .btn
      margin-left 20px
</style>
