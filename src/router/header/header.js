const Header = () =>
  import(/* webpackChunkName: "notice" */ '@/components/header/header')
const header = [{
  path: 'header/header',
  component: Header,
  name: 'header',
  meta: { title: '首页' }
}]

export default header
