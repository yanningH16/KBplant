import account from '../account/account'
import order from '../order/order'
import money from '../money/money'
import countList from '../countList/countList'
import other from '../other/other'
const Home = (resolve) => {
  import('@/components/home/home').then((module) => {
    resolve(module)
  })
}
const defaultHome = [{
  path: '/home',
  redirect: {
    name: 'userManger'
  }
}]
const home = [{
  path: '/',
  component: Home,
  name: 'home',
  children: [...defaultHome, ...account, ...order, ...money, ...countList, ...other]
}]
export default home
