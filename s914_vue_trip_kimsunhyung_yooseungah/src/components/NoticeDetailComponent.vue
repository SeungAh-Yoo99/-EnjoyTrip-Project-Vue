<template>
  <div class="container">
    <div class="pad"></div>
    <div>
      <h3>Detail</h3>
    </div>

    <div>
      <div class="form-group">
        <div class="row">
          <div class="col-1 d-flex align-items-center">
            <label for="notice_title" class="custom-label">제목:</label>
          </div>
          <div class="col-11">
            <input
              id="notice_title"
              v-model="notice.notice_title"
              type="text"
              readonly
              class="form-control inputBox"
            />
          </div>
        </div>
      </div>
      <div class="form-group">
        <div class="row">
          <div class="col-md-1 d-flex align-items-center">
            <label for="notice_id" class="custom-label">번호:</label>
          </div>
          <div class="col-md-4">
            <input
              id="notice_id"
              v-model="notice.notice_id"
              type="text"
              readonly
              class="form-control inputBox"
            />
          </div>
          <div class="col-md-1 d-flex align-items-center">
            <label for="creation_date" class="custom-label">작성일:</label>
          </div>
          <div class="col-md-6">
            <input
              id="creation_date"
              v-model="notice.creation_date"
              type="text"
              readonly
              class="form-control inputBox"
            />
          </div>
        </div>
      </div>
      <div class="form-group">
        <div class="row">
          <div class="col-md-12 d-flex align-items-center">
            <label for="content" class="custom-label">내용:</label>
          </div>
          <div class="col-md-12">
            <textarea
              id="content"
              v-model="notice.content"
              readonly
              class="form-control inputBox"
              rows="10"
              max-rows="20"
            ></textarea>
          </div>
        </div>
      </div>
      <div class="button-container">
        <button v-if="isAdmin" class="btn btn-dark w-50" @click="modify">수정</button>
        <div class="button-space"></div>
        <button v-if="isAdmin" class="btn btn-dark w-50" @click="deleteNotice(notice.notice_id)">삭제</button>
        <div class="button-space"></div>
        <button class="btn btn-dark w-50" @click="goToList">목록</button>
      </div>
    </div>
  </div>
</template>

<script>
import http from '../axios/axios-common.js';
import { mapState } from 'vuex';

export default {
    data(){
        return {
            notice:{},
            isAdmin: false,
        };
    },
    computed:{
      ...mapState('userStore', ['userInfo']),
    },
    created(){
        this.getNotice(this.$route.params.notice_id);
        this.checkAdmin();
    },
    methods:{
        getNotice(notice_id){
            http.get("/api/notice/"+notice_id).then((response=>{
                this.notice=response.data;
            }));
        },
        deleteNotice(notice_id){
            http.delete("/api/notice/"+notice_id, {
              headers: {
                    "access-token": sessionStorage.getItem("access-token")
            }})
            .then(()=>{
                alert("삭제완료");
                this.$router.push("/notice");
            })
        },
        goToList(){
            this.$router.push("/notice");
        },
        modify(){
            this.$router.push("/noticemodify/"+this.notice.notice_id);
        },
        checkAdmin(){
            http.get("/api/user/islogin", {
                headers: {
                    "access-token": sessionStorage.getItem("access-token")
            }})
            .then(response => {
                if(response.data.result == 'success' && this.userInfo.role == 'admin') {
                    this.isAdmin = true;
                }
                else {
                  this.isAdmin = false;
            }})
        }
    }
}
</script>

<style>
.custom-label {
  margin-bottom: 0; /* Remove default bottom margin */
}
</style>