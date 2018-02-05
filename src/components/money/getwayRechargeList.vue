<template>
  <div class="getwayRechargeList">
    <div class="search">
      <ul class="left">
        <li>
          <span>付款方式</span>
          <el-select v-model="payType" style="width:180px;margin-right:20px;" placeholder="请选择">
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
          <el-select v-model="rechargeStatus" style="width:180px;margin-right:20px;" placeholder="请选择">
            <el-option label="全部" value="">
            </el-option>
            <el-option label="等待付款" value="1">
            </el-option>
            <el-option label="充值完成" value="2">
            </el-option>
          </el-select>
        </li>
        <li>
          <span>站点ID</span>
          <el-input v-model="channelId" style="width:180px;margin-right:20px;" placeholder="请输入内容"></el-input>
        </li>
        <li style="text-align:left;">
          <span class="btn" @click="getList" style="text-align:center;">查询</span>
        </li>
      </ul>
    </div>
    <div class="table">
      <el-table :data="userList" style="width: 100%">
        <el-table-column fixed="left" prop="plusLev" label="渠道ID" align="center" width="100">
        </el-table-column>
        <el-table-column prop="plusLev" label="渠道名称" align="center" width="200">
        </el-table-column>
        <el-table-column prop="plusLev" label="充值编号" align="center" width="120">
        </el-table-column>
        <el-table-column prop="plusLev" label="交易号" align="center" width="120">
        </el-table-column>
        <el-table-column prop="plusLev" label="收款方式" align="center" width="120">
        </el-table-column>
        <el-table-column prop="plusLev" label="充值金额" align="center" width="120">
        </el-table-column>
        <el-table-column prop="plusLev" label="充值前金额" align="center" width="120">
        </el-table-column>
        <el-table-column prop="plusLev" label="充值后金额" align="center" width="120">
        </el-table-column>
        <el-table-column prop="plusLev" label="充值状态" align="center" width="120">
        </el-table-column>
        <el-table-column fixed="right" label="操作" align="center" width="150">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row, 1)" type="text" size="small">确认到账</el-button>
            <el-button @click="handleClick(scope.row, 0)" type="text" size="small">取消订单</el-button>
          </template>
        </el-table-column>
        <el-table-column prop="plusLev" label="充值时间" align="center" width="120">
        </el-table-column>
        <el-table-column prop="plusLev" label="备注" align="center" width="120">
        </el-table-column>
      </el-table>
    </div>
    <div class="pager">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="pageSizeArray" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="pageTotal">
      </el-pagination>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import { pageCommon } from '../../assets/js/mixin'
export default {
  name: 'getwayRechargeList',
  mixins: [pageCommon],
  data () {
    return {
      apiUrl: '/api/channel/recharge/getRechargeListForPlatform',
      payType: '',
      rechargeStatus: '',
      channelId: '',
      currentPage: 1,
      userList: []
    }
  },
  computed: {
    params () {
      return {
        payType: this.payType,
        rechargeStatus: this.rechargeStatus,
        channelId: this.channelId,
        pageNo: this.pageNo,
        pageSize: this.pageSize
      }
    }
  },
  methods: {
    setList (data) {
      this.userList = data
    },
    handleClick (row, type) {
      console.log(row, type)
      if (type === 0) {
        this.$confirm('此操作将取消该充值订单, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '取消成功!'
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          })
        })
      } else if (type === 1) {
        this.$confirm('此操作将确认充值成功, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '操作成功!'
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          })
        })
      }
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.getwayRechargeList
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
