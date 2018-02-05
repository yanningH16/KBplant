<template>
  <div class="getwayManger">
    <div class="search">
      <div class="left">
        <span>渠道名称</span>
        <el-input v-model="channelName" placeholder="输入渠道名称" style="width:180px;"></el-input>
        <em class="btn" @click="getList">查询</em>
      </div>
      <div class="right">
        <em class="btn-b" @click="userSet([{},2])">添加渠道</em>
      </div>
    </div>
    <div class="table">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="channelId" label="渠道ID" align="center" width="185">
        </el-table-column>
        <el-table-column prop="name" label="渠道名称" align="center">
        </el-table-column>
        <el-table-column prop="price" label="单价(元)" align="center">
        </el-table-column>
        <el-table-column prop="balance" label="账户余额" align="center">
        </el-table-column>
        <el-table-column prop="rechargeSum" label="累计充值" align="center">
        </el-table-column>
        <el-table-column prop="recipetContent" label="收款帐号" align="center">
        </el-table-column>
        <el-table-column prop="serviceQq" label="客服QQ" align="center">
        </el-table-column>
        <el-table-column prop="serviceTelephone" label="客服电话" align="center">
        </el-table-column>
        <el-table-column prop="gmtCreate" label="添加时间" align="center" width="185">
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button @click="userSet([scope.row,0])" type="text" size="small">充值</el-button>
            <el-dropdown @command="userSet">
              <span style="font-size:12px;color:#409EFF;">
                更多
                <i class="el-icon-arrow-down"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item :command="[scope.row,1]">编辑</el-dropdown-item>
                <el-dropdown-item :command="[scope.row,3]">扣除金额</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pager">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="pageSizeArray" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="pageTotal">
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
        <!-- <div class="cont" style="text-align:center;margin-bottom:20px;">
          <span style="display:inline-block;width:60px;text-align:right;">收款帐号</span>
          <el-input v-model="rechargeObj.getAccount" style="width:300px;margin-left:10px;" placeholder="请输入内容"></el-input>
        </div> -->
        <div class="buttons" style="text-align:center;margin-top:40px;">
          <span class="btn-b" style="margin-right:10px;" @click="rechargeObj.show = false">取消</span>
          <span class="btn" @click="sureToRecharge">确定</span>
        </div>
      </el-dialog>
      <el-dialog title="扣除余额" :append-to-body="true" :visible.sync="deleMoneyObj.show" width="600px" top="25vh">
        <div class="cont" style="text-align:center;">
          <span>金额</span>
          <el-input v-model="deleMoneyObj.money" style="width:300px;margin-left:10px;" placeholder="请输入内容"></el-input>
        </div>
        <div class="cont" style="text-align:center;margin-top:20px;">
          <span>备注</span>
          <el-input v-model="deleMoneyObj.common" style="width:300px;margin-left:10px;" placeholder="请输入内容"></el-input>
        </div>
        <div class="buttons" style="text-align:center;margin-top:40px;">
          <span class="btn-b" style="margin-right:10px;" @click="deleMoneyObj.show = false">取消</span>
          <span class="btn" @click="sureToDele">确定</span>
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
            <el-option v-for="(item,index) in bankArr" :key="index" :label="item.bankName" :value="item.bankName">
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
import { mapGetters } from 'vuex'
import md5 from 'md5'
export default {
  name: 'getwayManger',
  mixins: [pageCommon],
  data () {
    return {
      currentPage: 1,
      channelName: '',
      bankArr: [],
      apiUrl: '/api/channel/getPagingListByChannelName',
      rechargeObj: {
        show: false,
        row: '',
        money: '',
        common: ''
      },
      deleMoneyObj: {
        show: false,
        common: '',
        money: ''
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
      tableData: []
    }
  },
  computed: {
    params () {
      return {
        channelName: this.channelName,
        pageNo: this.pageNo,
        pageSize: this.pageSize
      }
    },
    ...mapGetters([
      'userInfo'
    ])
  },
  methods: {
    setList (data) {
      this.tableData = data
    },
    handleClick (row) {
      console.log(row)
    },
    userSet (command) {
      if (command[1] === 0) { // 添加金额
        this.rechargeObj.show = true
        this.rechargeObj.row = command[0]
      } else if (command[1] === 1) { // 编辑分站信息
        this.editObj.type = 0
        let row = command[0]
        this.editObj = { // 编辑渠道
          show: this.editObj.show,
          type: this.editObj.type,
          stationId: row.channelId,
          wayName: row.name,
          payer: row.recipetUserName,
          getBankName: row.recipetBankName,
          otherBnakName: row.recipetBankName,
          getBankAccount: row.recipetAccount,
          kefuChat: row.serviceWechatNum,
          kefuQQ: row.serviceQq,
          kefuPhone: row.serviceTelephone,
          adminAccount: row.adminUserName,
          adminPassword: row.adminPassword,
          yuantongPrice: row.price
        }
        this.editObj.show = true
      } else if (command[1] === 2) { // 添加分站
        this.editObj.type = 1
        for (let m in this.editObj) {
          if (!(m === 'type' || m === 'show')) {
            this.editObj[m] = ''
          }
        }
        this.editObj.show = true
      } else if (command[1] === 3) { // 扣除金额
        this.deleMoneyObj.show = true
        this.deleMoneyObj.row = command[0]
      }
    },
    // 确认充值
    sureToRecharge () {
      this.$ajax.post('/api/channel/recharge/addMoneyToChannelFund', {
        money: this.rechargeObj.money,
        comment: this.rechargeObj.common,
        channelId: this.rechargeObj.row.channelId,
        operateUserId: this.userInfo.platformAccountId
      }).then((data) => {
        if (data.data.code === '200') {
          this.rechargeObj.show = false
          this.$message({
            message: '操作成功!',
            type: 'success'
          })
          this.getList()
          for (let m in this.rechargeObj) {
            if (!(m === 'show')) {
              this.rechargeObj[m] = ''
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
    },
    // 确认扣除金额
    sureToDele () {
      this.$ajax.post('/api/channel/recharge/reduceMoneyFromChannelFund', {
        money: this.deleMoneyObj.money,
        comment: this.deleMoneyObj.common,
        channelId: this.deleMoneyObj.row.channelId,
        operateUserId: this.userInfo.platformAccountId
      }).then((data) => {
        if (data.data.code === '200') {
          this.deleMoneyObj.show = false
          this.getList()
          this.$message({
            message: '操作成功!',
            type: 'success'
          })
          for (let m in this.deleMoneyObj) {
            if (!(m === 'show')) {
              this.deleMoneyObj[m] = ''
            }
          }
        } else {
          this.$message({
            message: data.data.message,
            type: 'warning'
          })
        }
      }).catch((err) => {
        console.log(err)
        this.$message.error('服务器错误！')
      })
    },
    // 点击确认按钮
    sureToPost () {
      let url = ''
      if (this.editObj.type === 0) {
        url = '/api/channel/updateChannelInfo'
      } else if (this.editObj.type === 1) {
        url = '/api/channel/addChannel'
      }
      this.$ajax.post(url, {
        channelId: this.editObj.stationId || '',
        channelName: this.editObj.wayName,
        recipetContent: (this.editObj.getBankName === '999' ? this.editObj.otherBnakName : this.editObj.getBankName) + '-' + this.editObj.payer + '-' + this.editObj.getBankAccount,
        recipetName: this.editObj.payer,
        recipetAccount: this.editObj.getBankAccount,
        recipetBankName: (this.editObj.getBankName === '999' ? this.editObj.otherBnakName : this.editObj.getBankName),
        serviceQQ: this.editObj.kefuQQ,
        serviceWechatNum: this.editObj.kefuChat,
        servicePhone: this.editObj.kefuPhone,
        adminUserName: this.editObj.adminAccount,
        adminPassword: md5(this.editObj.adminPassword),
        price: this.editObj.yuantongPrice
      }).then((data) => {
        if (data.data.code === '200') {
          this.editObj.show = false
          this.$message({
            message: '操作成功!',
            type: 'success'
          })
          this.getList()
          for (let m in this.editObj) {
            if (!(m === 'show' || m === 'type')) {
              this.editObj[m] = ''
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
    },
    // 获取银行列表
    getBank () {
      this.$ajax.post('/api/config/bankCard/getBankInfoList', {
      }).then((data) => {
        if (data.data.code === '200') {
          this.bankArr = data.data.data
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
  },
  mounted () {
    this.getBank()
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
