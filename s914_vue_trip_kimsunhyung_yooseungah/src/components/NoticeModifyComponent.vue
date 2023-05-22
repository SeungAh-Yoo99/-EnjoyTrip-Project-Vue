<template>
    <div class="container">
    <div class="pad"></div>
    <div>
      <h3>공지사항 수정</h3>
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
              v-model="notice_title"
              type="text"
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
              v-model="notice_id"
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
              v-model="creation_date"
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
              v-model="content"
              class="form-control inputBox"
              rows="10"
              max-rows="20"
            ></textarea>
          </div>
        </div>
      </div>
      <div class="button-container">
        <button class="btn btn-dark w-50" @click="modify">수정</button>
        <div class="button-space"></div>
        <button class="btn btn-dark w-50" @click="goToList">목록</button>
      </div>
    </div>
  </div>





</template>

<script>
import http from "@/router/axios-common.js"

export default {
    data(){
        return{
            notice:{},
            notice_id:"",
            content:"",
            notice_title:"",
            creation_date:"",
        };
    },
    created(){
        this.getNotice(this.$route.params.notice_id);
    },
    methods:{
        getNotice(notice_id){
            http.get("/api/notice/"+notice_id).then((response=>{
                this.content=response.data.content;
                this.notice_title=response.data.notice_title;
                this.notice_id=response.data.notice_id;
                this.creation_date=response.data.creation_date;
            }));
        },
        modify(){
            http.put("/api/notice",{
                content:this.content,
                notice_title:this.notice_title,
                notice_id:this.notice_id
            }).then(()=>{
                alert("수정완료");
                this.$router.push("/notice");
            })
        },
        goToList(){
            this.$router.push("/notice");
        }
    }
}
</script>

<style>
table{
    font-size:20px;
}
</style>