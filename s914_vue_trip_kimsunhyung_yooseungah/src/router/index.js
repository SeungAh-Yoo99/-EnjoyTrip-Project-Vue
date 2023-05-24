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
import BoardDetailView from '../views/BoardDetailView.vue'
import BoardModifyView from '../views/BoardModifyView.vue'
import BoardInputView from '../views/BoardInputView.vue'
import WeatherView from '../views/WeatherView.vue'
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
    path: "/attractionlist",
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
  },
  {
    path: '/boarddetail/:board_id',
    name: 'boarddetail',
    component: BoardDetailView
  },
  {
    path: '/boardmodify/:board_id',
    name: 'boardmoidfy',
    component: BoardModifyView
  },
  {
    path: '/boardinput',
    name: 'boardinput',
    component: BoardInputView
  },
  {
    path: '/weather',
    name: 'weather',
    component: WeatherView
  }



]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
