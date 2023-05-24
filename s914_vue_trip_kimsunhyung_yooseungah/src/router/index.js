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

import store from "@/store";

Vue.use(VueRouter)

// https://v3.router.vuejs.org/kr/guide/advanced/navigation-guards.html
const onlyAuthUser = async (to, from, next) => {
  const checkUserInfo = store.getters["userStore/checkUserInfo"];
  const checkToken = store.getters["userStore/checkToken"];
  let token = sessionStorage.getItem("access-token");
  //console.log("로그인 처리 전", checkUserInfo, token);

  if (checkUserInfo != null && token) {
    //console.log("토큰 유효성 체크하러 가자!!!!");
    await store.dispatch("userStore/getUserInfo", token);
  }
  if (!checkToken || checkUserInfo === null) {
    alert("로그인이 필요한 페이지입니다..");
    // next({ name: "login" });
    router.push({ name: "login" });
  } else {
    //console.log("로그인 했다!!!!!!!!!!!!!.");
    next();
  }
};

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
    beforeEnter: onlyAuthUser,
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
