<template>
  <div class="userRechargeList">
    <div class="search">
      <ul class="left">
        <li>
          <span>付款方式</span>
          <el-select v-model="payWay" style="width:180px;margin-right:20px;" placeholder="请选择">
            <el-option label="全部" value="">
            </el-option>
            <el-option label="支付宝转账" value="1">
            </el-option>
            <el-option label="网银转账" value="2">
            </el-option>
          </el-select>
        </li>
        <li>
          <span>充值状态</span>
          <el-select v-model="payStatus" style="width:180px;margin-right:20px;" placeholder="请选择">
            <el-option label="全部" value="">
            </el-option>
            <el-option label="等待付款" value="1">
            </el-option>
            <el-option label="充值完成" value="2">
            </el-option>
          </el-select>
        </li>
        <li>
          <span>用户名</span>
          <el-input v-model="userName" style="width:180px;margin-right:20px;" placeholder="请输入内容"></el-input>
        </li>
        <li>
          <span>站点ID</span>
          <el-input v-model="stationId" style="width:180px;margin-right:20px;" placeholder="请输入内容"></el-input>
        </li>
        <li>
          <span>充值日期</span>
          <el-date-picker v-model="payTime" type="date" style="width:180px;margin-right:20px;" placeholder="选择日期">
          </el-date-picker>
        </li>
        <li style="text-align:left;">
          <span class="btn" style="text-align:center;">查询</span>
        </li>
      </ul>
    </div>
    <div class="table">
      <el-table :data="userList" style="width: 100%">
        <el-table-column fixed="left" prop="plusLev" label="用户ID" align="center" width="100">
        </el-table-column>
        <el-table-column prop="plusLev" label="站点ID" align="center" width="200">
        </el-table-column>
        <el-table-column prop="plusLev" label="充值编号" align="center" width="120">
        </el-table-column>
        <el-table-column prop="plusLev" label="交易号" align="center" width="120">
        </el-table-column>
        <el-table-column prop="plusLev" label="收款帐号" align="center" width="120">
        </el-table-column>
        <el-table-column prop="plusLev" label="付款方式" align="center" width="120">
        </el-table-column>
        <el-table-column prop="plusLev" label="付款说明" align="center" width="120">
        </el-table-column>
        <el-table-column fixed="right" label="充值状态" align="center" width="120">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">充值完成</el-button>
          </template>
        </el-table-column>
        <el-table-column prop="plusLev" label="充值金额" align="center" width="120">
        </el-table-column>
        <el-table-column prop="plusLev" label="充值前金额" align="center" width="120">
        </el-table-column>
        <el-table-column prop="plusLev" label="充值后金额" align="center" width="120">
        </el-table-column>
        <el-table-column prop="plusLev" label="最后登录时间" align="center" width="120">
        </el-table-column>
        <el-table-column prop="plusLev" label="备注" align="center" width="120">
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
  name: 'userRechargeList',
  data () {
    return {
      currentPage: 1,
      userList: [{
        plusLev: 'gsagasgas'
      }]
    }
  },
  methods: {
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    },
    handleClick (row) {
      console.log(row)
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.userRechargeList
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
    display flex
    .left
      flex 1
      display flex
      flex-wrap wrap
      li
        width 270px
        margin-bottom 20px
        text-align right
        span
          text-align right
          margin-right 5px
</style>
