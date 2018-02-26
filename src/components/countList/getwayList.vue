<template>
  <div class="getwayList">
    <div class="search">
      <div class="left">
        <span>日期查询</span>
        <el-date-picker v-model="time" value-format="yyyy-MM-dd HH:mm:ss" :default-time="['00:00:00', '23:59:59']" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" style="width:350px;margin-right:10px;">
        </el-date-picker>
        <span>渠道ID</span>
        <el-input v-model="channelId" style="width:180px;" placeholder="请输入内容"></el-input>
        <em @click="getList" class="btn">查询</em>
      </div>
    </div>
    <div class="table">
      <el-table :data="userList" style="width: 100%">
        <el-table-column fixed="left" prop="gmtCreate" label="日期" align="center" width="185">
        </el-table-column>
        <el-table-column prop="channelId" label="渠道ID" align="center" width="185">
        </el-table-column>
        <el-table-column prop="channelName" label="渠道名称" align="center" width="120">
        </el-table-column>
        <el-table-column prop="taskNum" label="任务数" align="center" width="120">
        </el-table-column>
        <el-table-column prop="orderNum" label="订单数" align="center" width="120">
        </el-table-column>
        <el-table-column prop="makeOrderUserNum" label="下单用户数" align="center" width="120">
        </el-table-column>
        <el-table-column prop="newRegisterNum" label="新注册用户数" align="center" width="120">
        </el-table-column>
        <el-table-column prop="newRechargeSum" label="新用户首次充值" align="center" width="120">
        </el-table-column>
        <el-table-column prop="newRechargeNum" label="新用户充值金额" align="center" width="120">
        </el-table-column>
        <el-table-column prop="rechargeNum" label="充值笔数" align="center" width="120">
        </el-table-column>
        <el-table-column prop="rechargeSum" label="充值金额" align="center" width="120">
        </el-table-column>
        <el-table-column fixed="right" label="渠道利润" align="center" width="120">
          <template slot-scope="scope">
            <el-button type="text" size="small">{{ scope.row.profit }}</el-button>
          </template>
        </el-table-column>
        <el-table-column prop="sellerAccountMoney" label="用户帐户余额" align="center" width="120">
        </el-table-column>
        <el-table-column prop="sellerCost" label="用户消费余额" align="center" width="120">
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
  name: 'getwayList',
  mixins: [pageCommon],
  data () {
    return {
      searchTime: '',
      apiUrl: '/api/statistics/search/getChannelStatisticsByCondition',
      channelId: '',
      time: '',
      currentPage: 1,
      userList: []
    }
  },
  computed: {
    params () {
      return {
        startTime: this.time[0],
        endTime: this.time[1],
        channelId: this.channelId,
        currPageNo: this.pageNo,
        limit: this.pageSize
      }
    }
  },
  methods: {
    setList (data) {
      this.userList = data
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.getwayList
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
