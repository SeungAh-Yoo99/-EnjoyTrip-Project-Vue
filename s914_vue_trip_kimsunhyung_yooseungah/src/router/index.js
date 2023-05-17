import Vue from 'vue'
import VueRouter from 'vue-router'
import TestView from '../views/TestView.vue'
import CategoryAttractionView from '../views/CategoryAttractionView.vue'

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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
