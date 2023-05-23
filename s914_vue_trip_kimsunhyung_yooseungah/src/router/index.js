import Vue from 'vue'
import VueRouter from 'vue-router'
import TestView from '../views/TestView.vue'
import CategoryAttractionView from '../views/CategoryAttractionView.vue'
import AttractionListView from '../views/AttractionListView.vue'
import LoginView from '../views/LoginView.vue'
import RequirmentView from '../views/RequirmentView.vue'
import JoinView from '../views/JoinView.vue'
import AttractionDetailView from '../views/AttractionDetailView.vue'
import NoticeListView from '../views/NoticeListView.vue'
import NoticeInputView from '../views/NoticeInputView.vue'
import NoticeDetailView from '../views/NoticeDetailView.vue'
import NoticeModifyView from '../views/NoticeModifyView.vue'
import BoardListView from '../views/BoardListView.vue'
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

    path: '/attractiondetail/:attraction',
    name: 'attractiondetail',
    component: AttractionDetailView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: "/attractionlist/:form",
    name: 'list',
    component: AttractionListView
  },
  {
    path: '/join',
    name: 'join',
    component: RequirmentView
  },
  {
    path: '/join/detail',
    name: 'join-detail',
    component: JoinView
  },
  {
    path: '/notice',
    name: 'noticelist',
    component: NoticeListView
  },
  {
    path: '/noticeinput',
    name: 'noticeinput',
    component: NoticeInputView
  },
  {
    path: '/noticedetail/:notice_id',
    name: 'noticedetail',
    component: NoticeDetailView
  },
  {
    path: '/noticemodify/:notice_id',
    name: 'noticemodify',
    component: NoticeModifyView
  },
  {
    path: '/boardlist',
    name: 'boardlist',
    component: BoardListView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
