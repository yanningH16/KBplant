<template>
  <div class="orderList">
    <div class="search">
      <ul class="left">
        <li>
          <span>物流平台</span>
          <el-select v-model="platform" style="width:170px;margin-right:20px;" placeholder="请选择">
            <el-option label="全部" value="">
            </el-option>
            <el-option label="圆通" value="">
            </el-option>
          </el-select>
        </li>
        <li>
          <span>电商平台</span>
          <el-select v-model="shopPlatform" style="width:170px;margin-right:20px;" placeholder="请选择">
            <el-option label="全部" value="">
            </el-option>
            <el-option label="京东" value="0">
            </el-option>
            <el-option label="淘宝" value="1">
            </el-option>
            <el-option label="天猫" value="2">
            </el-option>
            <el-option label="拼多多" value="3">
            </el-option>
          </el-select>
        </li>
        <li>
          <span>是否付款</span>
          <el-select v-model="isPay" style="width:170px;margin-right:20px;" placeholder="请选择">
            <el-option label="全部" value="">
            </el-option>
            <el-option label="否" value="0">
            </el-option>
            <el-option label="是" value="1">
            </el-option>
          </el-select>
        </li>
        <li>
          <span>快递单号</span>
          <el-input v-model="postOrderNum" style="width:170px;margin-right:20px;" placeholder="请输入内容"></el-input>
        </li>
        <li>
          <span>站点ID</span>
          <el-input v-model="stationId" style="width:170px;margin-right:20px;" placeholder="请输入内容"></el-input>
        </li>
        <li>
          <span>任务ID</span>
          <el-input v-model="taskId" style="width:170px;margin-right:20px;" placeholder="请输入内容"></el-input>
        </li>
        <li>
          <span>订单号</span>
          <el-input v-model="orderNum" style="width:170px;margin-right:20px;" placeholder="请输入内容"></el-input>
        </li>
        <li>
          <span>用户名</span>
          <el-input v-model="userName" style="width:170px;margin-right:20px;" placeholder="请输入内容"></el-input>
        </li>
        <li>
          <span>发件手机</span>
          <el-input v-model="sendPhone" style="width:170px;margin-right:20px;" placeholder="请输入内容"></el-input>
        </li>
        <li>
          <span>收件手机</span>
          <el-input v-model="getPhone" style="width:170px;margin-right:20px;" placeholder="请输入内容"></el-input>
        </li>
        <li>
          <span>快递单状态</span>
          <el-select v-model="postStatus" style="width:170px;margin-right:20px;" placeholder="请选择">
            <el-option label="全部" value="">
            </el-option>
          </el-select>
        </li>
        <li>
          <span>发布日期</span>
          <el-date-picker v-model="sendOrderTime" type="date" style="width:170px;margin-right:20px;" placeholder="选择日期">
          </el-date-picker>
        </li>
        <li style="text-align:left;">
          <span class="btn" style="text-align:center;">查询</span>
        </li>
        <li style="flex:1;text-align:right;">
          <span @click="getOrderListObj.show=true" class="btn-b" style="text-align:center;">导出订单</span>
        </li>
      </ul>
    </div>
    <div class="table">
      <el-table :data="userList" @selection-change="handleSelectionChange" style="width: 100%">
        <el-table-column type="selection" width="50">
        </el-table-column>
        <el-table-column fixed="left" prop="userName" label="渠道" align="center" width="100">
        </el-table-column>
        <el-table-column prop="userName" label="站点ID" align="center" width="200">
        </el-table-column>
        <el-table-column prop="userName" label="用户名" align="center" width="120">
        </el-table-column>
        <el-table-column prop="userName" label="快递公司" align="center" width="120">
        </el-table-column>
        <el-table-column prop="userName" label="平台" align="center" width="120">
        </el-table-column>
        <el-table-column prop="userName" label="发货信息" align="center" width="180">
          <template slot-scope="scope">
            <div style="text-align:left;font-size:12px;">
              <p>发货人姓名: 黄酒年</p>
              <p>发货人电话: 15037188888</p>
              <p>发货人手机: 18671223658</p>
              <p>物品质量: 2.1KG</p>
              <p>发货人地址: 浙江省大法师两年内</p>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="userName" label="收货信息" align="center" width="180">
          <template slot-scope="scope">
            <div style="text-align:left;font-size:12px;">
              <p>收货人姓名: 黄酒年</p>
              <p>收货人电话: 15037188888</p>
              <p>收货人手机: 18671223658</p>
              <p>物品质量: 2.1KG</p>
              <p>发货人地址: 浙江省大法师两年内</p>
            </div>
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" align="center" width="120">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">修改订单</el-button>
          </template>
        </el-table-column>
        <el-table-column prop="userName" label="状态" align="center" width="100">
          <template slot-scope="scope">
            <div style="text-align:left;font-size:12px;">
              <p>商家未付款</p>
              <p>站点未付款</p>
              <p>渠道未付款</p>
              <p>快递单: 未下单</p>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="userName" label="发布时间" align="center" width="120">
        </el-table-column>
        <el-table-column prop="userName" label="出单号时间" align="center" width="120">
        </el-table-column>
      </el-table>
    </div>
    <div class="pager">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
      </el-pagination>
    </div>
    <div class="alertGrounp">
      <el-dialog title="导出订单列表" :append-to-body="true" :visible.sync="getOrderListObj.show" width="600px" top="25vh">
        <div class="cont" style="text-align:center;margin-bottom:20px;">
          <span style="display:inline-block;width:60px;text-align:right;">导出方式</span>
          <p style="display:inline-block;width:300px;text-align:left;margin-left:10px;">
            <el-radio v-model="getOrderListObj.getWay" label="1">订单号</el-radio>
            <el-radio v-model="getOrderListObj.getWay" label="2">快递单号</el-radio>
          </p>
        </div>
        <div class="cont" style="text-align:center;margin-bottom:20px;">
          <span style="display:inline-block;width:60px;text-align:right;">筛选条件</span>
          <el-input v-model="getOrderListObj.filter" type="textarea" :rows="3" resize="none" style="width:300px;margin-left:10px;vertical-align:top;" placeholder="请输入内容">
          </el-input>
        </div>
        <div class="buttons" style="text-align:center;margin-top:40px;">
          <span class="btn-b" style="margin-right:10px;" @click="getOrderListObj.show = false">取消</span>
          <span class="btn" @click="getOrderListObj.show = false">确定</span>
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'orderList',
  data () {
    return {
      currentPage: 1,
      getOrderListObj: {
        show: false,
        getWay: '1',
        filter: ''
      },
      userList: [{
        userName: '好傻啊gas'
      }],
      multipleSelection: []
    }
  },
  methods: {
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    }
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
