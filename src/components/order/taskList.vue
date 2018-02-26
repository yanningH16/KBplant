<template>
  <div class="taskList">
    <div class="search">
      <ul class="left">
        <li>
          <span>物流平台</span>
          <el-select v-model="logisticsType" style="width:180px;margin-right:20px;" placeholder="请选择">
            <el-option label="全部" value="">
            </el-option>
            <el-option label="圆通" value="1">
            </el-option>
          </el-select>
        </li>
        <li>
          <span>付款状态</span>
          <el-select v-model="status" style="width:180px;margin-right:20px;" placeholder="请选择">
            <el-option label="全部" value="">
            </el-option>
            <el-option label="未支付" value="0">
            </el-option>
            <el-option label="支付成功" value="1">
            </el-option>
            <el-option label="任务删除" value="2">
            </el-option>
          </el-select>
        </li>
        <li>
          <span>用户名</span>
          <el-input v-model="userName" style="width:180px;margin-right:20px;" placeholder="请输入内容"></el-input>
        </li>
        <li>
          <span>任务ID</span>
          <el-input v-model="sellerTaskId" style="width:180px;margin-right:20px;" placeholder="请输入内容"></el-input>
        </li>
        <li style="width:auto;">
          <span>提交日期</span>
          <el-date-picker v-model="time" value-format="yyyy-MM-dd HH:mm:ss" :default-time="['00:00:00', '23:59:59']" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" style="width:350px;margin-right:20px;">
          </el-date-picker>
        </li>
        <li style="text-align:left;">
          <span @click="getList" class="btn" style="text-align:center;">查询</span>
        </li>
        <!-- <li style="text-align:right;flex:1;">
          <span @click="sendOrderObj.show=true" class="btn-b" style="text-align:center;">提交订单</span>
        </li> -->
      </ul>
    </div>
    <div class="table">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="gmtCreate" label="提交日期" align="center">
        </el-table-column>
        <el-table-column prop="substationId" label="站点ID" align="center">
        </el-table-column>
        <el-table-column prop="userName" label="用户名" align="center">
        </el-table-column>
        <el-table-column prop="sellerTaskId" label="任务ID" align="center">
        </el-table-column>
        <el-table-column prop="logisticsType" label="快递公司" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.logisticsType == 1 ? '圆通' : '--' }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="totalNum" label="订单数" align="center">
        </el-table-column>
        <el-table-column prop="price" label="单价" align="center">
        </el-table-column>
        <el-table-column prop="actualCost" label="订单总价" align="center">
        </el-table-column>
        <!-- <el-table-column prop="address" label="导入结果" align="center" width="200">
          <template slot-scope="scope">
            <p style="font-size:12px;">
              导入成功:
              <span class="red">1</span>条 导入失败:
              <span class="red">0</span>条
            </p>
          </template>
        </el-table-column> -->
        <el-table-column prop="status" label="付款状态" align="center">
          <template slot-scope="scope">
            <span style="font-size:12px;" v-if="scope.row.status==0">未支付</span>
            <span style="font-size:12px;" v-if="scope.row.status==1" class="green">支付成功</span>
            <span style="font-size:12px;" v-if="scope.row.status==2">任务删除</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pager">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="pageSizeArray" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="pageTotal">
      </el-pagination>
    </div>
    <div class="alertGrounp">
      <el-dialog title="提交订单" :append-to-body="true" :visible.sync="sendOrderObj.show" width="600px" top="25vh">
        <div class="cont" style="text-align:center;">
          <span style="display:inline-block;width:60px;text-align:right;">任务批号</span>
          <el-input v-model="sendOrderObj.orderNumId" style="width:300px;margin-left:10px;" placeholder="请输入内容"></el-input>
        </div>
        <div class="buttons" style="text-align:center;margin-top:40px;">
          <span class="btn-b" style="margin-right:10px;" @click="sendOrderObj.show = false">取消</span>
          <span class="btn" @click="sendOrderObj.show = false">确定</span>
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import { pageCommon } from '../../assets/js/mixin'
export default {
  name: 'taskList',
  mixins: [pageCommon],
  data () {
    return {
      currentPage: 1,
      apiUrl: '/api/order/search/getSellerTaskByCondition',
      time: '',
      status: '',
      userName: '',
      logisticsType: '',
      sellerTaskId: '',
      sendOrderObj: {
        show: false,
        orderNumId: ''
      },
      tableData: []
    }
  },
  computed: {
    params () {
      return {
        currPageNo: this.pageNo,
        limit: this.pageSize,
        endTime: this.time[1],
        startTime: this.time[0],
        logisticsType: this.logisticsType,
        // sellerShopId: ,
        sellerTaskId: this.sellerTaskId,
        status: this.status,
        // substationId: ,
        userName: this.userName
      }
    }
  },
  methods: {
    setList (data) {
      this.tableData = data
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.taskList
  margin 20px
  padding 20px
  background #ffffff
  font-size 14px
  .red
    color #FB203A
  .green
    color #248F3A
  .search
    display flex
    border-bottom 1px solid #e5e5e5
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
  .table
    margin-top 20px
</style>
