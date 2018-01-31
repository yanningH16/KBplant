const userManger = () =>
  import(/* webpackChunkName: "userManger" */ '@/components/account/userManger')
const pushManger = () =>
  import(/* webpackChunkName: "pushManger" */ '@/components/account/pushManger')
const pushMangerDetail = () =>
  import(/* webpackChunkName: "pushMangerDetail" */ '@/components/account/pushMangerDetail')
const getwayManger = () =>
  import(/* webpackChunkName: "getwayManger" */ '@/components/account/getwayManger')
const stationManger = () =>
  import(/* webpackChunkName: "stationManger" */ '@/components/account/stationManger')
const account = [{
  path: 'account/userManger',
  component: userManger,
  name: 'userManger',
  meta: { title: '用户管理' }
}, {
  path: 'account/pushManger',
  component: pushManger,
  name: 'pushManger',
  meta: { title: '推荐人管理' }
}, {
  path: 'account/pushManger/pushMangerDetail',
  component: pushMangerDetail,
  name: 'pushMangerDetail',
  meta: { title: '利润明细' }
}, {
  path: 'account/getwayManger',
  component: getwayManger,
  name: 'getwayManger',
  meta: { title: '渠道管理' }
}, {
  path: 'account/stationManger',
  component: stationManger,
  name: 'stationManger',
  meta: { title: '分站管理' }
}]

export default account
