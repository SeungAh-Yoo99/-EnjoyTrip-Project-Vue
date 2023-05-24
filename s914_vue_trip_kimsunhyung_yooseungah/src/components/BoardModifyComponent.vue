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
            <label for="board_title" class="custom-label">제목:</label>
          </div>
          <div class="col-11">
            <input
              id="board_title"
              v-model="board_title"
              type="text"
              class="form-control inputBox"
            />
          </div>
        </div>
      </div>
      <div class="form-group">
        <div class="row">
          <div class="col-md-1 d-flex align-items-center">
            <label for="board_id" class="custom-label">번호:</label>
          </div>
          <div class="col-md-4">
            <input
              id="board_id"
              v-model="board_id"
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
              v-model="board.creation_date"
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
            <label for="board_content" class="custom-label">내용:</label>
          </div>
          <div class="col-md-12">
            <textarea
              id="board_content"
              v-model="board_content"
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
        return {
            board:{},
            board_id:"",
            board_content:"",
            board_title:"",
        };
    },
    created(){
        this.getBoard(this.$route.params.board_id);
    },
    methods:{
        getBoard(board_id){
            http.get("/api/board/"+board_id).then(response=>{
                this.board=response.data;
                this.board_id=response.data.board_id;
                this.board_content=response.data.board_content;
                this.board_title=response.data.board_title;
            })
        },
        modify(){
            http.put("/api/board/modify",{
                board_id:this.board_id,
                board_title:this.board_title,
                board_content:this.board_content
                }, {
                  withCredentials: true
                }).then(()=>{
                alert("수정완료");
                this.$router.push("/boardlist");
            }).catch(error => {
                console.log(error)
            });
        },
        goToList(){
            this.$router.push("/boardlist");
        }
    }
}
</script>

<style>

</style>