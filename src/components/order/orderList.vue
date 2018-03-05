<template>
  <div class="orderList">
    <div class="search">
      <ul class="left">
        <li>
          <span>物流平台</span>
          <el-select v-model="postObj.logisticsType" style="width:170px;margin-right:20px;" placeholder="请选择">
            <el-option label="全部" value="">
            </el-option>
            <el-option label="圆通" value="1">
            </el-option>
          </el-select>
        </li>
        <li>
          <span>电商平台</span>
          <el-select v-model="postObj.shopType" style="width:170px;margin-right:20px;" placeholder="请选择">
            <el-option label="全部" value="">
            </el-option>
            <el-option label="淘宝" value="1">
            </el-option>
            <el-option label="天猫" value="2">
            </el-option>
            <el-option label="京东" value="3">
            </el-option>
            <el-option label="拼多多" value="4">
            </el-option>
          </el-select>
        </li>
        <li>
          <span>付款状态</span>
          <el-select v-model="postObj.payStatus" style="width:170px;margin-right:20px;" placeholder="请选择">
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
          <span>快递单号</span>
          <el-input v-model="postObj.logisticsOrderId" style="width:170px;margin-right:20px;" placeholder="请输入内容"></el-input>
        </li>
        <li>
          <span>站点ID</span>
          <el-input v-model="postObj.substationId" style="width:170px;margin-right:20px;" placeholder="请输入内容"></el-input>
        </li>
        <li>
          <span>任务ID</span>
          <el-input v-model="postObj.sellerTaskId" style="width:170px;margin-right:20px;" placeholder="请输入内容"></el-input>
        </li>
        <li>
          <span>订单号</span>
          <el-input v-model="postObj.thirdOrderId" style="width:170px;margin-right:20px;" placeholder="请输入内容"></el-input>
        </li>
        <li>
          <span>用户名</span>
          <el-input v-model="postObj.sellerUserName" style="width:170px;margin-right:20px;" placeholder="请输入内容"></el-input>
        </li>
        <li>
          <span>发件手机</span>
          <el-input v-model="postObj.senderTelephone" style="width:170px;margin-right:20px;" placeholder="请输入内容"></el-input>
        </li>
        <li>
          <span>收件手机</span>
          <el-input v-model="postObj.receiveTelephone" style="width:170px;margin-right:20px;" placeholder="请输入内容"></el-input>
        </li>
        <li>
          <span>快递单状态</span>
          <el-select v-model="postObj.orderStatus" style="width:170px;margin-right:20px;" placeholder="请选择">
            <el-option label="全部" value="">
            </el-option>
            <el-option label="未获取运单" value="0">
            </el-option>
            <el-option label="已获取运单" value="1">
            </el-option>
            <el-option label="订单取消" value="2">
            </el-option>
          </el-select>
        </li>
        <li style="width:auto;margin-left:15px;">
          <span>发布日期</span>
          <el-date-picker v-model="postObj.time" value-format="yyyy-MM-dd HH:mm:ss" :default-time="['00:00:00', '23:59:59']" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" style="width:350px;margin-right:20px;">
          </el-date-picker>
        </li>
        <li style="text-align:left;">
          <span @click="getList" class="btn" style="text-align:center;">查询</span>
        </li>
        <li style="flex:1;text-align:right;">
          <span @click="sureToReget" class="btn-b" style="text-align:center;margin-right:20px;">重新获取</span>
          <!-- 选择复选框导出方式 -->
          <!-- <span @click="sureToLinkOrder" class="btn-b" style="text-align:center;">导出订单</span> -->
          <!-- 根据自己添加编号导出 -->
          <span @click="showGetOrder" class="btn-b" style="text-align:center;">导出订单</span>
        </li>
      </ul>
    </div>
    <div class="table">
      <el-table :data="userList" @selection-change="handleSelectionChange" style="width: 100%">
        <el-table-column type="selection" width="50">
        </el-table-column>
        <el-table-column fixed="left" prop="channelId" label="渠道ID" align="center" width="110">
        </el-table-column>
        <el-table-column prop="channelName" label="渠道名称" align="center" width="120">
        </el-table-column>
        <el-table-column prop="substationId" label="站点ID" align="center" width="110">
        </el-table-column>
        <el-table-column prop="substationName" label="分站名称" align="center" width="120">
        </el-table-column>
        <el-table-column prop="userName" label="用户名" align="center" width="120">
        </el-table-column>
        <el-table-column prop="logisticsType" label="快递公司" align="center" width="120">
          <template slot-scope="scope">
            <span>{{ scope.row.logisticsType == 1 ? '圆通' : '--' }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="shopType" label="平台" align="center" width="120">
          <template slot-scope="scope">
            <span>{{ scope.row.shopType == 1 ? '淘宝' : scope.row.shopType == 2 ? '天猫' :scope.row.shopType == 3 ? '京东' :scope.row.shopType == 4 ? '拼多多' : '--' }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="userName" label="发货信息" align="center" width="200">
          <template slot-scope="scope">
            <div style="text-align:left;font-size:12px;">
              <p>发货人姓名: {{ scope.row.senderName || '--' }}</p>
              <p>发货人电话: {{ scope.row.senderTelephone || '--' }}</p>
              <p>发货人地址: {{ ((scope.row.senderProvince||'')+(scope.row.senderCity||'')+(scope.row.senderRegion||'')+(scope.row.senderAddress||'')) || '--' }}</p>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="userName" label="收货信息" align="center" width="200">
          <template slot-scope="scope">
            <div style="text-align:left;font-size:12px;">
              <p>收货人姓名: {{ scope.row.receiveName || '--' }}</p>
              <p>收货人电话: {{ scope.row.receiveTelephone || '--' }}</p>
              <p>收货人地址: {{ ((scope.row.receiveProvince||'')+(scope.row.receiveCity||'')+(scope.row.receiveRegion||'')+(scope.row.receiveAddress||'')) || '--' }}</p>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="userName" label="订单信息" align="center" width="220">
          <template slot-scope="scope">
            <div style="text-align:left;font-size:12px;">
              <p>平台订单号: {{ scope.row.thirdOrderId || '--' }}</p>
              <p>快递单号: {{ scope.row.logisticsOrderId || '--' }}</p>
              <p>物品质量: {{ scope.row.weight || '--' }}KG</p>
              <p>商品名称: {{ scope.row.productName || '--' }}</p>
            </div>
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" align="center" width="120">
          <template slot-scope="scope">
            <el-button v-if="scope.row.status==0" @click="handleClick(scope.row)" type="text" size="small">修改订单</el-button>
            <el-button v-else type="text" size="small">--</el-button>
          </template>
        </el-table-column>
        <el-table-column prop="status" label="状态" align="center" width="130">
          <template slot-scope="scope">
            <div style="text-align:left;font-size:12px;">
              <p>商家{{ scope.row.payStatus==0 ? '未支付' : scope.row.payStatus==1 ? '支付成功' : scope.row.payStatus==2 ? '任务删除' : '--' }}</p>
              <p>站点{{ scope.row.payStatus==0 ? '未支付' : scope.row.payStatus==1 ? '支付成功' : scope.row.payStatus==2 ? '任务删除' : '--' }}</p>
              <p>渠道{{ scope.row.payStatus==0 ? '未支付' : scope.row.payStatus==1 ? '支付成功' : scope.row.payStatus==2 ? '任务删除' : '--' }}</p>
              <p>快递单: {{ scope.row.status==0 ? '未获取运单' : scope.row.status==1 ? '已获取运单' : scope.row.status==2 ? '订单取消' : '--' }}</p>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="gmtCreate" label="发布时间" align="center" width="180">
        </el-table-column>
        <el-table-column prop="gmtCreate" label="出单号时间" align="center" width="180">
          <template slot-scope="scope">
            <span v-if="scope.row.status==1">{{ scope.row.gmtModify || '--' }}</span>
            <span v-else>--</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pager">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="pageSizeArray" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="pageTotal">
      </el-pagination>
    </div>
    <div class="alertGrounp">
      <el-dialog title="导出订单列表" :append-to-body="true" :visible.sync="getOrderListObj.show" width="600px" top="25vh">
        <div class="cont" style="text-align:center;margin-bottom:20px;">
          <span style="display:inline-block;width:60px;text-align:right;">导出方式</span>
          <p style="display:inline-block;width:300px;text-align:left;margin-left:10px;">
            <el-radio v-model="getOrderListObj.getWay" label="third">订单号</el-radio>
            <el-radio v-model="getOrderListObj.getWay" label="logistic">快递单号</el-radio>
          </p>
        </div>
        <div class="cont" style="text-align:center;margin-bottom:20px;">
          <span style="display:inline-block;width:60px;text-align:right;">筛选条件</span>
          <el-input v-model="getOrderListObj.filter" type="textarea" :autosize="{minRows: 3, maxRows: 10}" resize="none" style="width:300px;margin-left:10px;vertical-align:top;" placeholder="请输入内容">
          </el-input>
        </div>
        <div class="buttons" style="text-align:center;margin-top:40px;">
          <!-- <span class="btn-b" style="margin-right:10px;" @click="getOrderListObj.show = false">取消</span> -->
          <span v-show="getOrderListObj.isPosting" class="btn" @click="sureToFilterOrder">确定</span>
          <span v-show="!getOrderListObj.isPosting" class="btn">
            <em class="el-icon-loading"></em>
          </span>
        </div>
      </el-dialog>
      <el-dialog title="修改订单" :append-to-body="true" :visible.sync="fixOrderObj.show" width="600px" top="15vh">
        <div class="cont" style="text-align:center;margin-bottom:20px;">
          <span style="display:inline-block;width:100px;text-align:right;">收件人姓名</span>
          <el-input v-model="fixOrderObj.receiveName" style="width:300px;margin-left:10px;" placeholder="请输入内容"></el-input>
        </div>
        <div class="cont" style="text-align:center;margin-bottom:20px;">
          <span style="display:inline-block;width:100px;text-align:right;">收件人手机</span>
          <el-input v-model="fixOrderObj.receiveTelephone" style="width:300px;margin-left:10px;" placeholder="请输入内容"></el-input>
        </div>
        <div class="cont" style="text-align:center;margin-bottom:20px;">
          <span style="display:inline-block;width:100px;text-align:right;">收件人省</span>
          <el-input v-model="fixOrderObj.receiveProvince" style="width:300px;margin-left:10px;" placeholder="请输入内容"></el-input>
        </div>
        <div class="cont" style="text-align:center;margin-bottom:20px;">
          <span style="display:inline-block;width:100px;text-align:right;">收件人市</span>
          <el-input v-model="fixOrderObj.receiveCity" style="width:300px;margin-left:10px;" placeholder="请输入内容"></el-input>
        </div>
        <div class="cont" style="text-align:center;margin-bottom:20px;">
          <span style="display:inline-block;width:100px;text-align:right;">收件人区</span>
          <el-input v-model="fixOrderObj.receiveRegion" style="width:300px;margin-left:10px;" placeholder="请输入内容"></el-input>
        </div>
        <div class="cont" style="text-align:center;margin-bottom:20px;">
          <span style="display:inline-block;width:100px;text-align:right;">收件人详细地址</span>
          <el-input v-model="fixOrderObj.receiveAddress" style="width:300px;margin-left:10px;" placeholder="请输入内容"></el-input>
        </div>
        <div class="buttons" style="text-align:center;margin-top:40px;">
          <span class="btn-b" style="margin-right:10px;" @click="fixOrderObj.show = false">取消</span>
          <span class="btn" @click="sureToFix">确定</span>
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import { pageCommon } from '../../assets/js/mixin'
export default {
  name: 'orderList',
  mixins: [pageCommon],
  data () {
    return {
      currentPage: 1,
      apiUrl: '/api/order/search/getSellerOrderByCondition',
      postObj: {
        logisticsOrderId: '',
        shopType: '',
        sellerShipAddressId: '',
        logisticsType: '',
        payStatus: '',
        orderStatus: '',
        senderTelephone: '',
        receiveTelephone: '',
        sellerTaskId: '',
        thirdOrderId: '',
        time: '',
        substationId: '',
        sellerUserName: ''
      },
      // 修改订单
      fixOrderObj: {
        show: false,
        sellerOrderId: '',
        receiveName: '',
        receiveTelephone: '',
        receiveProvince: '',
        receiveCity: '',
        receiveRegion: '',
        receiveAddress: ''
      },
      getOrderListObj: {
        show: false,
        isPosting: true,
        getWay: 'third',
        filter: ''
      },
      userList: [],
      multipleSelection: []
    }
  },
  computed: {
    params () {
      return {
        currPageNo: this.pageNo,
        limit: this.pageSize,
        logisticsOrderId: this.postObj.logisticsOrderId,
        shopType: this.postObj.shopType,
        // sellerShipAddressId: this.postObj.,
        logisticsType: this.postObj.logisticsType,
        payStatus: this.postObj.payStatus,
        orderStatus: this.postObj.orderStatus,
        senderTelephone: this.postObj.senderTelephone,
        receiveTelephone: this.postObj.receiveTelephone,
        sellerTaskId: this.postObj.sellerTaskId,
        thirdOrderId: this.postObj.thirdOrderId,
        createStartTime: this.postObj.time[0],
        createEndTime: this.postObj.time[1],
        substationId: this.postObj.substationId,
        sellerUserName: this.postObj.sellerUserName
      }
    }
  },
  methods: {
    setList (data) {
      this.userList = data
    },
    sureToFix () {
      this.$ajax.post('/api/order/operate/fixTaskOrder', this.fixOrderObj).then((data) => {
        if (data.data.code === '200') {
          this.$message({
            message: '操作成功',
            type: 'success'
          })
          this.getList()
          this.fixOrderObj.show = false
        } else {
          this.$message({
            message: data.data.message,
            type: 'warning'
          })
        }
      }).catch(() => {
        this.$message.error('服务器错误！')
      })
    },
    handleClick (row) {
      let obj = {
        show: this.fixOrderObj.show || '',
        sellerOrderId: row.sellerOrderId || '',
        receiveName: row.receiveName || '',
        receiveTelephone: row.receiveTelephone || '',
        receiveProvince: row.receiveProvince || '',
        receiveCity: row.receiveCity || '',
        receiveRegion: row.receiveRegion || '',
        receiveAddress: row.receiveAddress || ''
      }
      this.fixOrderObj = obj
      this.fixOrderObj.show = true
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    // 确认导出订单
    sureToLinkOrder () {
      let arr = []
      for (let m of this.multipleSelection) {
        arr.push(m.sellerOrderId)
      }
      window.open('/api/task/downloadSellerOrdersByOrderIds/excel?orderIds=' + JSON.stringify(arr))
    },
    // 点击显示导出弹框
    showGetOrder () {
      this.getOrderListObj.show = true
      this.getOrderListObj.isPosting = true
    },
    // 确认根据条件导出订单
    sureToFilterOrder () {
      let orders = this.getOrderListObj.filter
      orders = orders.trim()
      orders = orders.replace(/^\n/, '')
      orders = orders.replace(/\n$/, '')
      let res = orders.replace(/\n/g, ',')
      // 开启菊花
      this.getOrderListObj.isPosting = false
      window.open('/api/task/downloadSellerOrdersByCondition/excel?orderIds=' + res + '&type=' + this.getOrderListObj.getWay)
      this.getOrderListObj.show = false
      this.getOrderListObj.filter = ''
    },
    // 确认重新获取运单号
    sureToReget () {
      let arr = []
      for (let m of this.multipleSelection) {
        arr.push(m.sellerOrderId)
      }
      this.$ajax.post('/api/order/operate/reGetLogisticsOrderIds', {
        sellerOrderIds: arr
      }).then((data) => {
        if (data.data.code === '200') {
          this.$message({
            message: '操作成功',
            type: 'success'
          })
          this.getList()
        } else {
          this.$message({
            message: data.data.message,
            type: 'warning'
          })
        }
      }).catch(() => {
        this.$message.error('服务器错误！')
      })
    },
    initTime () {
      let time = new Date()
      let year = time.getFullYear()
      let month = time.getMonth() + 1 <= 9 ? '0' + (time.getMonth() + 1) : (time.getMonth() + 1)
      let day = time.getDate() <= 9 ? '0' + time.getDate() : time.getDate()
      let time1 = year + '-' + month + '-' + day + ' 00:00:00'
      let time2 = year + '-' + month + '-' + day + ' 23:59:59'
      this.postObj.time = [time1, time2]
    }
  },
  created () {
    this.initTime()
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.orderList
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
    .right
      width 100px
      text-align center
      align-self center
</style>
