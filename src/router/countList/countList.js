const plantformList = () =>
  import(/* webpackChunkName: "plantformList" */ '@/components/countList/plantformList')
const stationList = () =>
  import(/* webpackChunkName: "stationList" */ '@/components/countList/stationList')
const countList = [{
  path: 'countList/plantformList',
  component: plantformList,
  name: 'plantformList',
  meta: { title: '平台报表统计' }
}, {
  path: 'countList/stationList',
  component: stationList,
  name: 'stationList',
  meta: { title: '站点报表统计' }
}]

export default countList
