<template>
  <div class="userRechargeList">
    <div class="search">
      <ul class="left">
        <li>
          <span>付款方式</span>
          <el-select v-model="payType" style="width:180px;margin-right:20px;" placeholder="请选择">
            <el-option label="全部" value="">
            </el-option>
            <el-option label="网银转账" value="1">
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
            <el-option label="等待收货" value="2">
            </el-option>
            <el-option label="等待收款" value="3">
            </el-option>
            <el-option label="充值失败" value="4">
            </el-option>
            <el-option label="订单取消" value="5">
            </el-option>
            <el-option label="充值完成" value="6">
            </el-option>
          </el-select>
        </li>
        <li>
          <span>用户名</span>
          <el-input v-model="userName" style="width:180px;margin-right:20px;" placeholder="请输入内容"></el-input>
        </li>
        <li>
          <span>站点ID</span>
          <el-input v-model="substationId" style="width:180px;margin-right:20px;" placeholder="请输入内容"></el-input>
        </li>
        <li style="width:auto;">
          <span>充值日期</span>
          <el-date-picker v-model="time" value-format="yyyy-MM-dd" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" style="width:350px;margin-right:20px;">
          </el-date-picker>
        </li>
        <li style="text-align:left;">
          <span class="btn" @click="getList" style="text-align:center;">查询</span>
        </li>
      </ul>
    </div>
    <div class="table">
      <el-table :data="userList" style="width: 100%">
        <el-table-column fixed="left" prop="sellerAccountId" label="用户ID" align="center" width="185">
        </el-table-column>
        <el-table-column prop="substationId" label="站点ID" align="center" width="185">
        </el-table-column>
        <el-table-column prop="rechargeId" label="充值编号" align="center" width="185">
        </el-table-column>
        <el-table-column prop="rechargeId" label="交易号" align="center" width="120">
          <template slot-scope="scope">
            <span>{{ scope.row.aaa ? scope.row.aaa : '--' }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="receiptCardNo" label="收款帐号" align="center" width="200">
          <template slot-scope="scope">
            <span>{{ scope.row.payingBankName + '-' +scope.row.payingUserName + '-' + scope.row.payingCardNo }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="payTypeDetail" label="付款方式" align="center" width="120">
        </el-table-column>
        <el-table-column prop="comment" label="付款说明" align="center" width="120">
        </el-table-column>
        <el-table-column fixed="right" label="充值状态" align="center" width="120">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">{{ scope.row.stautsDetail }}</el-button>
          </template>
        </el-table-column>
        <el-table-column prop="money" label="充值金额" align="center" width="120">
        </el-table-column>
        <el-table-column prop="plusLev" label="充值前金额" align="center" width="120">
          <template slot-scope="scope">
            <span>{{ scope.row.beforMoney ? scope.row.beforMoney : '--' }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="plusLev" label="充值后金额" align="center" width="120">
          <template slot-scope="scope">
            <span>{{ scope.row.afterMoney ? scope.row.afterMoney : '--' }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="comment" label="备注" align="center" width="120">
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
  name: 'userRechargeList',
  mixins: [pageCommon],
  data () {
    return {
      currentPage: 1,
      apiUrl: '/api/seller/recharge/getRechargeListForPlatform',
      payType: '',
      rechargeStatus: '',
      userName: '',
      substationId: '',
      time: '',
      userList: []
    }
  },
  computed: {
    params () {
      return {
        payType: this.payType,
        rechargeStatus: this.rechargeStatus,
        userName: this.userName,
        substationId: this.substationId,
        startTime: this.time[0],
        endTime: this.time[1],
        pageNo: this.pageNo,
        pageSize: this.pageSize
      }
    }
  },
  methods: {
    setList (data) {
      this.userList = data
    },
    handleClick (row) {
      // console.log(row)
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
