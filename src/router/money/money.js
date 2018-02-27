const userRechargeList = () =>
  import(/* webpackChunkName: "userRechargeList" */ '@/components/money/userRechargeList')
const stationRechargeList = () =>
  import(/* webpackChunkName: "stationRechargeList" */ '@/components/money/stationRechargeList')
const getwayRechargeList = () =>
  import(/* webpackChunkName: "getwayRechargeList" */ '@/components/money/getwayRechargeList')
const apiRechargeList = () =>
  import(/* webpackChunkName: "apiRechargeList" */ '@/components/money/apiRechargeList')
const money = [
  {
    path: 'money/userRechargeList',
    component: userRechargeList,
    name: 'userRechargeList',
    meta: { title: '用户充值记录' }
  },
  {
    path: 'money/stationRechargeList',
    component: stationRechargeList,
    name: 'stationRechargeList',
    meta: { title: '站点充值记录' }
  },
  {
    path: 'money/getwayRechargeList',
    component: getwayRechargeList,
    name: 'getwayRechargeList',
    meta: { title: '渠道充值记录' }
  },
  {
    path: 'money/apiRechargeList',
    component: apiRechargeList,
    name: 'apiRechargeList',
    meta: { title: 'api充值记录' }
  }
]

export default money
