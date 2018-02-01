<template>
  <div class="getwayManger">
    <div class="search">
      <div class="left">
        <span>渠道名称</span>
        <el-input v-model="channelName" placeholder="输入渠道名称" style="width:180px;"></el-input>
        <em class="btn">查询</em>
      </div>
      <div class="right">
        <em class="btn-b" @click="edit(1)">添加渠道</em>
      </div>
    </div>
    <div class="table">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="渠道ID" align="center">
        </el-table-column>
        <el-table-column prop="name" label="渠道名称" align="center">
        </el-table-column>
        <el-table-column prop="address" label="单价(元)" align="center">
        </el-table-column>
        <el-table-column prop="address" label="账户余额" align="center">
        </el-table-column>
        <el-table-column prop="address" label="累计充值" align="center">
        </el-table-column>
        <el-table-column prop="address" label="收款帐号" align="center">
        </el-table-column>
        <el-table-column prop="address" label="客服QQ" align="center">
        </el-table-column>
        <el-table-column prop="address" label="客服电话" align="center">
        </el-table-column>
        <el-table-column prop="address" label="添加时间" align="center">
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button @click="recharge(scope.row)" type="text" size="small">充值</el-button>
            <el-button @click="edit(0,scope.row)" type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pager">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
      </el-pagination>
    </div>
    <div class="alertGroup">
      <el-dialog title="渠道充值" :append-to-body="true" :visible.sync="rechargeObj.show" width="600px" top="25vh">
        <div class="cont" style="text-align:center;margin-bottom:20px;">
          <span style="display:inline-block;width:60px;text-align:right;">金额(元)</span>
          <el-input v-model="rechargeObj.money" style="width:300px;margin-left:10px;" placeholder="请输入内容"></el-input>
        </div>
        <div class="cont" style="text-align:center;margin-bottom:20px;">
          <span style="display:inline-block;width:60px;text-align:right;">备注</span>
          <el-input v-model="rechargeObj.common" style="width:300px;margin-left:10px;" placeholder="请输入内容"></el-input>
        </div>
        <div class="cont" style="text-align:center;margin-bottom:20px;">
          <span style="display:inline-block;width:60px;text-align:right;">收款帐号</span>
          <el-input v-model="rechargeObj.getAccount" style="width:300px;margin-left:10px;" placeholder="请输入内容"></el-input>
        </div>
        <div class="buttons" style="text-align:center;margin-top:40px;">
          <span class="btn-b" style="margin-right:10px;" @click="rechargeObj.show = false">取消</span>
          <span class="btn" @click="rechargeObj.show = false">确定</span>
        </div>
      </el-dialog>
      <el-dialog :title="editObj.type==0 ? '渠道编辑' : '添加渠道'" :append-to-body="true" :visible.sync="editObj.show" width="600px" top="5vh">
        <div v-if="editObj.type==0" class="cont" style="text-align:center;margin-bottom:20px;">
          <span style="display:inline-block;width:80px;text-align:right;">站点编码</span>
          <el-input v-model="editObj.stationId" style="width:300px;margin-left:10px;" placeholder="请输入内容"></el-input>
        </div>
        <div class="cont" style="text-align:center;margin-bottom:20px;">
          <span style="display:inline-block;width:80px;text-align:right;">渠道名称</span>
          <el-input v-model="editObj.wayName" style="width:300px;margin-left:10px;" placeholder="请输入内容"></el-input>
        </div>
        <div class="cont" style="text-align:center;margin-bottom:20px;">
          <span style="display:inline-block;width:80px;text-align:right;">收款人</span>
          <el-input v-model="editObj.payer" style="width:300px;margin-left:10px;" placeholder="请输入内容"></el-input>
        </div>
        <div class="cont" style="text-align:center;margin-bottom:20px;">
          <span style="display:inline-block;width:80px;text-align:right;">收款卡银行</span>
          <el-select v-model="editObj.getBankName" style="width:300px;margin-left:10px;" placeholder="请选择">
            <el-option label="未审核" value="1">
            </el-option>
            <el-option label="审核通过" value="2">
            </el-option>
            <el-option label="审核不通过" value="3">
            </el-option>
            <el-option label="其他" value="999">
            </el-option>
          </el-select>
        </div>
        <div class="cont" v-if="editObj.getBankName==999" style="text-align:center;margin-bottom:20px;">
          <span style="display:inline-block;width:80px;text-align:right;"></span>
          <el-input v-model="editObj.otherBnakName" style="width:300px;margin-left:10px;" placeholder="请输入内容"></el-input>
        </div>
        <div class="cont" style="text-align:center;margin-bottom:20px;">
          <span style="display:inline-block;width:80px;text-align:right;">收款卡号</span>
          <el-input v-model="editObj.getBankAccount" style="width:300px;margin-left:10px;" placeholder="请输入内容"></el-input>
        </div>
        <div class="cont" style="text-align:center;margin-bottom:20px;">
          <span style="display:inline-block;width:80px;text-align:right;">客服微信</span>
          <el-input v-model="editObj.kefuChat" style="width:300px;margin-left:10px;" placeholder="请输入内容"></el-input>
        </div>
        <div class="cont" style="text-align:center;margin-bottom:20px;">
          <span style="display:inline-block;width:80px;text-align:right;">客服QQ</span>
          <el-input v-model="editObj.kefuQQ" style="width:300px;margin-left:10px;" placeholder="请输入内容"></el-input>
        </div>
        <div class="cont" style="text-align:center;margin-bottom:20px;">
          <span style="display:inline-block;width:80px;text-align:right;">客服电话</span>
          <el-input v-model="editObj.kefuPhone" style="width:300px;margin-left:10px;" placeholder="请输入内容"></el-input>
        </div>
        <div class="cont" style="text-align:center;margin-bottom:20px;">
          <span style="display:inline-block;width:80px;text-align:right;">管理员帐号</span>
          <el-input v-model="editObj.adminAccount" style="width:300px;margin-left:10px;" placeholder="请输入内容"></el-input>
        </div>
        <div class="cont" style="text-align:center;margin-bottom:20px;">
          <span style="display:inline-block;width:80px;text-align:right;">管理员密码</span>
          <el-input v-model="editObj.adminPassword" type="password" style="width:300px;margin-left:10px;" placeholder="请输入内容"></el-input>
        </div>
        <div class="cont" style="text-align:center;margin-bottom:20px;">
          <span style="display:inline-block;width:80px;text-align:right;">圆通定价</span>
          <el-input v-model="editObj.yuantongPrice" style="width:300px;margin-left:10px;" placeholder="请输入内容"></el-input>
        </div>
        <div class="buttons" style="text-align:center;margin-top:40px;">
          <span class="btn-b" style="margin-right:10px;" @click="editObj.show = false">取消</span>
          <span class="btn" @click="sureToPost">确定</span>
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import { pageCommon } from '../../assets/js/mixin'
export default {
  name: 'getwayManger',
  mixins: [pageCommon],
  data () {
    return {
      currentPage: 1,
      channelName: '',
      apiUrl: '/api/channel/getPagingListByChannelName',
      rechargeObj: {
        show: false,
        money: '',
        common: '',
        getAccount: ''
      },
      editObj: {
        show: false,
        type: 0,
        stationId: '',
        wayName: '',
        payer: '',
        getBankName: '',
        otherBnakName: '',
        getBankAccount: '',
        kefuChat: '',
        kefuQQ: '',
        kefuPhone: '',
        adminAccount: '',
        adminPassword: '',
        yuantongPrice: ''
      },
      tableData: [{
        date: '2017-01-08',
        name: 'sdafsasafsa',
        address: 'fgsaasgasgas'
      }]
    }
  },
  computed: {
    params () {
      return {
        channelName: this.channelName,
        pageNo: this.pageNo,
        pageSize: this.pageSize
      }
    }
  },
  methods: {
    setList (data) {
      this.tableData = data
    },
    handleClick (row) {
      console.log(row)
    },
    recharge (row) {
      this.rechargeObj.show = true
    },
    edit (type, row) {
      this.editObj.type = type
      if (type === 0) {
        this.editObj = {
          show: this.editObj.show,
          type: this.editObj.type,
          stationId: row.stationId,
          wayName: row.channelName,
          payer: row.recipetName,
          getBankName: row.recipetBankName,
          otherBnakName: row.recipetBankName,
          getBankAccount: row.recipetAccount,
          kefuChat: row.serviceWechatNum,
          kefuQQ: row.serviceQQ,
          kefuPhone: row.servicePhone,
          adminAccount: row.adminUserName,
          adminPassword: row.adminPassword,
          yuantongPrice: row.price
        }
      }
      this.editObj.show = true
    },
    // 点击确认按钮
    sureToPost () {
      if (this.editObj.type === 0) {

      } else if (this.editObj.type === 1) {
        this.$ajax.post('/api/channel/addChannel', {
          channelName: this.editObj.wayName,
          recipetContent: '',
          recipetName: this.editObj.payer,
          recipetAccount: this.editObj.getBankAccount,
          recipetBankName: this.editObj.getBankName,
          serviceQQ: this.editObj.kefuQQ,
          serviceWechatNum: this.editObj.kefuChat,
          servicePhone: this.editObj.kefuPhone,
          adminUserName: this.editObj.adminAccount,
          adminPassword: this.editObj.adminPassword,
          price: this.editObj.yuantongPrice
        }).then((data) => {
          if (data.data.code === '200') {
            this.editObj.show = false
            this.$message({
              message: '添加成功!',
              type: 'success'
            })
            this.getList()
            for (let m of this.editObj) {
              if (!(m === 'show' || m === 'type')) {
                m = ''
              }
            }
          } else {
            this.$message({
              message: data.data.message,
              type: 'warning'
            })
          }
        }).catch((err) => {
          console.error(err)
        })
      }
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.getwayManger
  margin 20px
  padding 20px
  background #ffffff
  font-size 14px
  .search
    padding-bottom 20px
    border-bottom 1px solid #e5e5e5
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
  .table
    margin-top 20px
</style>
