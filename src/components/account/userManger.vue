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
      <el-dialog title="设置审核状态" :append-to-body="true" :visible.sync="setStatus.show" width="600px">
        <div class="cont">
          <span>审核</span>
          <el-select v-model="setStatus.status" placeholder="请选择">
            <el-option label="未审核" value="0">
            </el-option>
            <el-option label="审核通过" value="1">
            </el-option>
            <el-option label="审核不通过" value="2">
            </el-option>
          </el-select>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="setStatus.show = false">取 消</el-button>
          <el-button type="primary" @click="setStatus.show = false">确 定</el-button>
        </span>
      </el-dialog>
      <el-dialog title="设置用户等级和价格" :append-to-body="true" :visible.sync="setPriceObj.show" width="600px">
        <span>这是一段信息</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="setPriceObj.show = false">取 消</el-button>
          <el-button type="primary" @click="setPriceObj.show = false">确 定</el-button>
        </span>
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

          break
        case 3:

          break
        case 4:

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
    height 10px
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
