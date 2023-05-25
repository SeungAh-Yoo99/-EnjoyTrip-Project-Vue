import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CategoryAttractionView from '../views/CategoryAttractionView.vue'
import AttractionListView from '../views/AttractionListView.vue'
import LoginView from '../views/LoginView.vue'
import RequirmentView from '../views/RequirmentView.vue'
import JoinView from '../views/JoinView.vue'
import UserInfoView from '../views/UserInfoView.vue'
import SearchpwView from '../views/SearchpwView.vue'
import NewpwView from '../views/NewpwView.vue'
import AttractionDetailView from '../views/AttractionDetailView.vue'
import NoticeListView from '../views/NoticeListView.vue'
import NoticeInputView from '../views/NoticeInputView.vue'
import NoticeDetailView from '../views/NoticeDetailView.vue'
import NoticeModifyView from '../views/NoticeModifyView.vue'
import BoardListView from '../views/BoardListView.vue'

import store from "@/store";

import BoardDetailView from '../views/BoardDetailView.vue'
import BoardModifyView from '../views/BoardModifyView.vue'
import BoardInputView from '../views/BoardInputView.vue'



Vue.use(VueRouter)

// https://v3.router.vuejs.org/kr/guide/advanced/navigation-guards.html
const onlyAuthUser = async (to, from, next) => {
  const checkUserInfo = store.getters["userStore/checkUserInfo"];
  const checkToken = store.getters["userStore/checkToken"];
  let token = sessionStorage.getItem("access-token");

  if (checkUserInfo != null && token) {
    await store.dispatch("userStore/getUserInfo", token);
  }
  if (checkUserInfo === null || !checkToken) {
    alert("로그인이 필요한 페이지입니다.");
    router.push({ name: "login" });
  } else {
    next();
  }
};

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
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
    path: '/userInfo',
    name: 'userInfo',
    beforeEnter: onlyAuthUser,
    component: UserInfoView
  },
  {
    path: '/searchPw',
    name: 'searchPw',
    component: SearchpwView
  },
  {
    path: '/newPw',
    name: 'newPw',
    component: NewpwView
  },
  {
    path: '/notice',
    name: 'noticelist',
    component: NoticeListView
  },
  {
    path: '/noticeinput',
    name: 'noticeinput',
    beforeEnter: onlyAuthUser,
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
    beforeEnter: onlyAuthUser,
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
    beforeEnter: onlyAuthUser,
    component: BoardModifyView
  },
  {
    path: '/boardinput',
    name: 'boardinput',
    beforeEnter: onlyAuthUser,
    component: BoardInputView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
