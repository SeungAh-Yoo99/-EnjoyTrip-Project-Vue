<template>
    <div class="container">
        <div class="pad"></div>
        <div>
            <h3>공지사항 등록</h3>
        </div>

       <div>
            <div class="form-group">
                <label for="notice_title" class="custom-label">제목:</label>
                <input id="notice_title" v-model="notice_title" type="text" class="form-control" placeholder="제목을 입력하세요." />
            </div>
            <div class="form-group">
                <label for="content" class="custom-label">내용:</label>
                <textarea id="content" v-model="content" class="form-control" placeholder="내용을 입력하세요." rows="3" max-rows="6"></textarea>
            </div>
            <div class="button-container">
                <button class="btn btn-dark w-50" @click="addNotice">추가</button>
                <div class="button-space"></div>
                <button class="btn btn-dark w-50" @click="goToList">목록</button>
            </div>
        </div>

    </div>
</template>

<script>
import http from "@/router/axios-common.js";
export default {
    data(){
        return{
            content:"",
            notice_title:"",
        
        };
    },
    methods:{
        addNotice(){
            http.post("/api/notice",{
                notice_title:this.notice_title,
                content:this.content
            }).then(()=>{
                alert("추가 완료");
                this.$router.push("/notice");
            });
        },
        goToList(){
            this.$router.push("/notice");
        }
    }

}
</script>

<style>

.custom-label {
  font-size: 1rem;
}

.button-container {
  display: flex;
  justify-content: center;
}


.button-space{
    width:10px;
}


</style>