<template>
    <div class="container">
        <div class="pad"></div>
        <div>
            <div>
                <h3>공지사항</h3>
            </div>
            <div v-if="notices.length">
                <table class="type10 ">
                    <colgroup>          
                
                    <col style="width: 10%" />
                    <col style="width: 80%" />
                    <col style="width: 10%" />
                    </colgroup>
                    <thead>
                    <tr>           
                        <th scope="cols">번 호</th>
                        <th scope="cols">제 목</th>
                        <th scope="cols">작 성 일</th>    
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(notice, index) in notices" :key="index" :class="{even: index%2==0}"> 
                        <td>{{index+1}}</td>            
                        <td>
                            <div class="router-link-wrapper">
                            <router-link :to="`/noticedetail/${notice.notice_id}`">{{ notice.notice_title }}</router-link>
                            </div>
                        </td>
                        <td>
                            {{ formatDate(notice.creation_date) }}
                        </td>
                    </tr>
                    </tbody>
                </table>
                </div>
                <div v-else class="text-center">내용이 없습니다.</div>
                <div>
                    <div class="button-container">
                        <button v-if="isAdmin" class="btn btn-dark w-50" @click="insert">추가</button>
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
import http from "@/router/axios-common.js";
import dayjs from "dayjs"; 
export default {
    created(){
        this.selectAll();
    },
    data(){
        return {
            notices:[],
            notice_id: "",
        };
    },
    computed:{
        isAdmin(){
            
            // console.log("session:" + this.$session.get("user").id); //https://sjwiq200.tistory.com/37 세션 저장 및 main.js 설정
            //this.$session.set("user",{id:"admin",role:"admin",pw:"1111"});
            //console.log("session은요" + this.$session.get("user").id);
            this.$session.set("user",{id:"ssafy1",role:"general",pw:"1111"});
            if(this.$session.get("user").role=="admin"){
                return true;
            }
            return false;
        }
    },
    methods:{
        selectAll(){
            http.get("/api/notice").then((response) => {
                
                this.notices=response.data;
                console.log(this.notices);
            });
        },
        formatDate(date) {
            return dayjs(date).format("YYYY.MM.DD"); // moment.js를 사용하여 날짜를 "YYYY.MM.DD" 형식으로 변환합니다.
        },
        insert(){
            this.$router.push("/noticeinput");
        }
        
    }
}
</script>

<style>
table.type10 {
  border-collapse: collapse;
  text-align: center;
  line-height: 1.5;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  margin: 20px 10px;
}
table.type10 thead th {
  width: 150px;
  padding: 10px;
  font-weight: bold;
  vertical-align: top;
  color: #fff;
  background: #1bb1e7;
  margin: 20px 10px;
}
table.type10 tbody th {
  width: 150px;
  padding: 10px;
}
table.type10 td {
  width: 350px;
  padding: 10px;
  vertical-align: top;
}

table.type10 .even {
  background: #1bb1e710;
}
table.type10 tbody td .router-link-wrapper a {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color:#000;
}
</style>