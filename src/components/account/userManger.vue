<template>
  <div class="userManger">
    <div class="search">
      <ul class="left">
        <li>
          <span>用户状态</span>
          <el-select v-model="userStatus" style="width:180px;margin-right:20px;" placeholder="请选择">
            <el-option label="全部" value="">
            </el-option>
          </el-select>
        </li>
        <li>
          <span>用户等级</span>
          <el-select v-model="userLev" style="width:180px;margin-right:20px;" placeholder="请选择">
            <el-option label="全部" value="">
            </el-option>
          </el-select>
        </li>
        <li>
          <span>用户名</span>
          <el-input v-model="userName" style="width:180px;margin-right:20px;" placeholder="请输入内容"></el-input>
        </li>
        <li>
          <span>电话</span>
          <el-input v-model="telephone" style="width:180px;margin-right:20px;" placeholder="请输入内容"></el-input>
        </li>
        <li>
          <span>QQ</span>
          <el-input v-model="qqNum" style="width:180px;margin-right:20px;" placeholder="请输入内容"></el-input>
        </li>
        <li>
          <span>IP</span>
          <el-input v-model="ipAddress" style="width:180px;margin-right:20px;" placeholder="请输入内容"></el-input>
        </li>
        <li>
          <span>推荐人</span>
          <el-input v-model="pushMan" style="width:180px;margin-right:20px;" placeholder="请输入内容"></el-input>
        </li>
        <li>
          <span>站点ID</span>
          <el-input v-model="stationId" style="width:180px;margin-right:20px;" placeholder="请输入内容"></el-input>
        </li>
      </ul>
      <div class="right">
        <span class="btn">查询</span>
      </div>
    </div>
    <div class="table">
      <el-table :data="userList" style="width: 100%">
        <el-table-column fixed="left" prop="userId" label="用户ID" align="center" width="100">
        </el-table-column>
        <el-table-column prop="stationId" label="站点ID" align="center" width="200">
        </el-table-column>
        <el-table-column prop="userName" label="用户名" align="center" width="120">
        </el-table-column>
        <el-table-column prop="telephone" label="手机" align="center" width="120">
        </el-table-column>
        <el-table-column prop="qqNum" label="QQ" align="center" width="120">
        </el-table-column>
        <el-table-column prop="wechat" label="微信" align="center" width="120">
        </el-table-column>
        <el-table-column prop="leftMoney" label="余额" align="center" width="120">
        </el-table-column>
        <el-table-column prop="rechargeCount" label="累计充值" align="center" width="120">
        </el-table-column>
        <el-table-column prop="plusLev" label="会员等级" align="center" width="120">
        </el-table-column>
        <el-table-column fixed="right" label="操作" align="center" width="120">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">审核</el-button>
            <el-dropdown @command="userSet">
              <span style="font-size:12px;color:#409EFF;">
                更多
                <i class="el-icon-arrow-down"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item :command="[scope.row,1]">设置等级</el-dropdown-item>
                <el-dropdown-item :command="[scope.row,2]">禁用</el-dropdown-item>
                <el-dropdown-item :command="[scope.row,3]">设置推荐人</el-dropdown-item>
                <el-dropdown-item :command="[scope.row,4]">重置密码</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </template>
        </el-table-column>
        <el-table-column prop="yuantongPrice" label="圆通价" align="center" width="120">
        </el-table-column>
        <el-table-column prop="checkStatus" label="审核状态" align="center" width="120">
        </el-table-column>
        <el-table-column prop="lastLogTime" label="最后登录时间" align="center" width="200">
        </el-table-column>
        <el-table-column prop="firstRechargeTime" label="首次充值时间" align="center" width="200">
        </el-table-column>
        <el-table-column prop="regTime" label="注册时间" align="center" width="200">
        </el-table-column>
        <el-table-column prop="pushMan" label="推荐人" align="center" width="120">
        </el-table-column>
        <el-table-column prop="iniviteCode" label="邀请码" align="center" width="120">
        </el-table-column>
      </el-table>
    </div>
    <div class="pager">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
      </el-pagination>
    </div>
    <div class="alertGrounp">
      <el-dialog title="设置审核状态" :append-to-body="true" :visible.sync="setStatus.show" width="600px" top="25vh">
        <div class="cont" style="text-align:center;">
          <span>审核</span>
          <el-select v-model="setStatus.status" style="width:300px;margin-left:10px;" placeholder="请选择">
            <el-option label="未审核" value="0">
            </el-option>
            <el-option label="审核通过" value="1">
            </el-option>
            <el-option label="审核不通过" value="2">
            </el-option>
          </el-select>
        </div>
        <div class="buttons" style="text-align:center;margin-top:40px;">
          <span class="btn-b" style="margin-right:10px;" @click="setStatus.show = false">取消</span>
          <span class="btn" @click="setStatus.show = false">确定</span>
        </div>
      </el-dialog>
      <el-dialog title="设置用户等级和价格" :append-to-body="true" :visible.sync="setPriceObj.show" width="600px" top="25vh">
        <div class="cont" style="text-align:center;">
          <span style="display:inline-block;width:60px;text-align:right;">等级</span>
          <el-select v-model="setPriceObj.status" style="width:300px;margin-left:10px;" placeholder="请选择">
            <el-option label="未审核" value="0">
            </el-option>
            <el-option label="审核通过" value="1">
            </el-option>
            <el-option label="审核不通过" value="2">
            </el-option>
          </el-select>
        </div>
        <div class="cont" style="text-align:center;margin-top:20px;">
          <span style="display:inline-block;width:60px;text-align:right;">圆通价格</span>
          <el-input v-model="setPriceObj.price" style="width:300px;margin-left:10px;" placeholder="请输入内容"></el-input>
        </div>
        <div class="cont" style="text-align:center;">
          <span style="display:inline-block;width:60px;"></span>
          <p style="font-size:12px;color:#ff3341;display:inline-block;width:300px;margin-left:10px;text-align:left;">皇冠以上可自定义价格</p>
        </div>
        <div class="buttons" style="text-align:center;margin-top:40px;">
          <span class="btn-b" style="margin-right:10px;" @click="setPriceObj.show = false">取消</span>
          <span class="btn" @click="setPriceObj.show = false">确定</span>
        </div>
      </el-dialog>
      <el-dialog title="禁用用户" :append-to-body="true" :visible.sync="forbidObj.show" width="600px" top="25vh">
        <div class="cont" style="text-align:center;">
          <span style="font-size:18px;font-wight:bold;">你确定要禁用123456吗?</span>
        </div>
        <div class="buttons" style="text-align:center;margin-top:40px;">
          <span class="btn-b" style="margin-right:10px;" @click="forbidObj.show = false">取消</span>
          <span class="btn" @click="forbidObj.show = false">确定</span>
        </div>
      </el-dialog>
      <el-dialog title="设置推荐人" :append-to-body="true" :visible.sync="setPushManObj.show" width="600px" top="25vh">
        <div class="cont" style="text-align:center;">
          <span style="display:inline-block;width:60px;text-align:right;">推荐人</span>
          <el-input v-model="setPushManObj.pushMan" style="width:300px;margin-left:10px;" placeholder="请输入内容"></el-input>
        </div>
        <div class="buttons" style="text-align:center;margin-top:40px;">
          <span class="btn-b" style="margin-right:10px;" @click="setPushManObj.show = false">取消</span>
          <span class="btn" @click="setPushManObj.show = false">确定</span>
        </div>
      </el-dialog>
      <el-dialog title="重置密码" :append-to-body="true" :visible.sync="resetPassObj.show" width="600px" top="25vh">
        <div class="cont" style="text-align:center;">
          <span style="font-size:18px;font-wight:bold;">你确定要重置123456的密码吗?请谨慎操作</span>
        </div>
        <div class="buttons" style="text-align:center;margin-top:40px;">
          <span class="btn-b" style="margin-right:10px;" @click="resetPassObj.show = false">取消</span>
          <span class="btn" @click="resetPassObj.show = false">确定</span>
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'userManger',
  data () {
    return {
      currentPage: 1,
      userStatus: '',
      userLev: '',
      userName: '',
      telephone: '',
      qqNum: '',
      ipAddress: '',
      pushMan: '',
      stationId: '',
      userList: [{
        userId: '123',
        stationId: '123456789123456789',
        userName: '辛巴达辛巴达',
        telephone: '18667199999',
        qqNum: '1071126666',
        wechat: '1071126333',
        leftMoney: '1000000',
        rechargeCount: '1000000',
        plusLev: '渠道用户',
        yuantongPrice: '3.00',
        checkStatus: '审核通过',
        lastLogTime: '2018-01-30 15:44:38',
        firstRechargeTime: '2018-01-30 15:44:38',
        regTime: '2018-01-30 15:44:38',
        pushMan: 'huangdsjjsd',
        iniviteCode: '569888'
      }, {
        userId: '123',
        stationId: '123456789123456789',
        userName: '辛巴达辛巴达',
        telephone: '18667199999',
        qqNum: '1071126666',
        wechat: '1071126333',
        leftMoney: '1000000',
        rechargeCount: '1000000',
        plusLev: '渠道用户',
        yuantongPrice: '3.00',
        checkStatus: '审核通过',
        lastLogTime: '2018-01-30 15:44:38',
        firstRechargeTime: '2018-01-30 15:44:38',
        regTime: '2018-01-30 15:44:38',
        pushMan: 'huangdsjjsd',
        iniviteCode: '569888'
      }],
      setStatus: {
        show: false,
        status: '0'
      },
      setPriceObj: {
        show: false,
        status: '0',
        price: ''
      },
      forbidObj: {
        show: false
      },
      setPushManObj: {
        show: false,
        pushMan: ''
      },
      resetPassObj: {
        show: false
      }
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
      this.setStatus.show = true
    },
    userSet (command) {
      switch (command[1]) {
        case 1:
          this.setPriceObj.show = true
          break
        case 2:
          this.forbidObj.show = true
          break
        case 3:
          this.setPushManObj.show = true
          break
        case 4:
          this.resetPassObj.show = true
          break
        default:
          break
      }
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.userManger
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
