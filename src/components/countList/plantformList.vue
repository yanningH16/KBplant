<template>
  <div class="plantformList">
    <div class="search">
      <div class="left">
        <span>日期查询</span>
        <el-date-picker v-model="searchTime" type="date" style="width:180px;" placeholder="选择日期">
        </el-date-picker>
        <em class="btn">查询</em>
      </div>
    </div>
    <div class="table">
      <el-table :data="userList" style="width: 100%">
        <el-table-column fixed="left" prop="userName" label="日期" align="center" width="100">
        </el-table-column>
        <el-table-column prop="userName" label="任务数" align="center" width="200">
        </el-table-column>
        <el-table-column prop="userName" label="订单数" align="center" width="120">
        </el-table-column>
        <el-table-column prop="userName" label="下单用户数" align="center" width="120">
        </el-table-column>
        <el-table-column prop="userName" label="新注册用户数" align="center" width="120">
        </el-table-column>
        <el-table-column prop="userName" label="新用户首次充值" align="center" width="120">
        </el-table-column>
        <el-table-column prop="userName" label="新用户充值金额" align="center" width="120">
        </el-table-column>
        <el-table-column prop="userName" label="充值笔数" align="center" width="120">
        </el-table-column>
        <el-table-column prop="userName" label="充值金额" align="center" width="120">
        </el-table-column>
        <el-table-column fixed="right" label="总站利润" align="center" width="120">
          <template slot-scope="scope">
            <el-button type="text" size="small">122.33</el-button>
          </template>
        </el-table-column>
        <el-table-column prop="userName" label="用户帐户余额" align="center" width="120">
        </el-table-column>
        <el-table-column prop="userName" label="用户消费余额" align="center" width="120">
        </el-table-column>
        <el-table-column prop="userName" label="站点利润" align="center" width="120">
        </el-table-column>
        <el-table-column prop="userName" label="渠道利润" align="center" width="120">
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
  name: 'plantformList',
  data () {
    return {
      searchTime: '',
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
.plantformList
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
    display flex
    .left
      flex 1
      span
        margin-right 10px
      .btn
        margin-left 20px
    .right
      flex 1
      text-align right
</style>
