import Vue from 'vue'
import VueRouter from 'vue-router'
import TestView from '../views/TestView.vue'
import CategoryAttractionView from '../views/CategoryAttractionView.vue'
import AttractionListView from '../views/AttractionListView.vue'
import LoginView from '../views/LoginView.vue'
import JoinView from '../views/JoinView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'test',
    component: TestView
  },
  {

    path: '/categorysearch',
    name: 'category',
    component: CategoryAttractionView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: "/attractionlist/:sido?/:type",
    name: 'list',
    component: AttractionListView
  },
  {
    path: '/join',
    name: 'join',
    component: JoinView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
