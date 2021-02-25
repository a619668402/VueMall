import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import('@/views/home/Home')
const Category = () => import('@/views/category/Category')
const Cart = () => import('@/views/cart/Cart')
const Profile = () => import('@/views/profile/Profile')

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/profile',
    component: Profile
  },
]

const router = new Router({
  routes: routes,
  mode: 'history'
})

const originReplace = Router.prototype.replace
Router.prototype.replace = function replace(location) {
  originReplace.call(this, location).catch(err => err)
}

const originPush = Router.prototype.push
Router.prototype.push = function push(location) {
  originPush.call(this, location).catch(err => err)
}

export default router
