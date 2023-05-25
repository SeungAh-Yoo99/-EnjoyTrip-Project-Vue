<template>
    <div class="container">
    <div class="pad"></div>
    <div>
      <h3>게시판</h3>
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
              v-model="board.board_title"
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
            <label for="board_id" class="custom-label">작성자:</label>
          </div>
          <div class="col-md-4">
            <input
              id="board_id"
              v-model="board.user_id"
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
              id="content"
              v-model="board.board_content"
              readonly
              class="form-control inputBox"
              rows="10"
              max-rows="20"
            ></textarea>
          </div>
        </div>
      </div>
      <div class="button-container">
        <button v-if="isWriter" class="btn btn-dark w-50" @click="modifyBoard">수정</button>
        <div class="button-space"></div>
        <button v-if="isWriter" class="btn btn-dark w-50" @click="deleteBoard">삭제</button>
        <div class="button-space"></div>
        <button class="btn btn-dark w-50" @click="goToList">목록</button>
      </div>
    </div>
  </div>
</template>

<script>
import http from '../axios/axios-common.js'
import { mapState } from 'vuex';

export default {
    data(){
        return {
            board:{},
            board_id:"",
            user_id:"",
            isWriter:false,
        };
    },
    computed:{
      ...mapState('userStore', ['userInfo']),
      
    },
    created(){
        
        this.getBoard(this.$route.params.board_id);
        
    },
    methods:{
        getBoard(board_id){
            http.get("/api/board/"+board_id).then(response=>{
                this.board=response.data;
                this.user_id=this.board.user_id;
                this.board_id=this.board.board_id;
                this.writerCheck();
            });
        },
        deleteBoard(){
          console.log(this.board.board_id);
            http.put("/api/board/delete",{
                  board_id:this.board_id,
                },
                {
                  headers: {
                    "access-token": sessionStorage.getItem("access-token")
                }})
                .then(()=>{
                  alert("삭제완료");
                  this.$router.push("/boardlist");
            }).catch(error => {
                console.log(error)
            });
        },
        goToList(){
            this.$router.push("/boardlist");
        },
        modifyBoard(){
            this.$router.push("/boardmodify/"+this.board.board_id);
        },
        writerCheck(){
            http.get("/api/user/islogin", {
                headers: {
                    "access-token": sessionStorage.getItem("access-token")
            }})
            .then(response => {
                if(response.data.result == 'success' && this.user_id == this.userInfo.id) {
                    this.isWriter =  true;
                }else{
                  
                  this.isWriter = false;
                }
            })
        }
    }
}
</script>

<style>

</style>