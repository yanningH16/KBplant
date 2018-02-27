const plantformList = () =>
  import(/* webpackChunkName: "plantformList" */ '@/components/countList/plantformList')
const getwayList = () =>
  import(/* webpackChunkName: "getwayList" */ '@/components/countList/getwayList')
const stationList = () =>
  import(/* webpackChunkName: "stationList" */ '@/components/countList/stationList')
const apiList = () =>
  import(/* webpackChunkName: "apiList" */ '@/components/countList/apiList')
const countList = [
  {
    path: 'countList/plantformList',
    component: plantformList,
    name: 'plantformList',
    meta: { title: '平台报表统计' }
  },
  {
    path: 'countList/getwayList',
    component: getwayList,
    name: 'getwayList',
    meta: { title: '渠道报表统计' }
  },
  {
    path: 'countList/stationList',
    component: stationList,
    name: 'stationList',
    meta: { title: '站点报表统计' }
  },
  {
    path: 'countList/apiList',
    component: apiList,
    name: 'apiList',
    meta: { title: 'api报表统计' }
  }
]

export default countList
