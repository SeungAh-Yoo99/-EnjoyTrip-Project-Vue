<template>
    <div class="container">
        <div class="pad"></div>
        <div>
            <div>
                <h3>게시판</h3>
            </div>
            <div v-if="boards.length">
                <table class="type10 ">
                    <colgroup>          
                
                    <col style="width: 10%" />
                    <col style="width: 70%" />
                    <col style="width: 10%" />
                    <col style="width: 10%" />
                    </colgroup>
                    <thead>
                    <tr>           
                        <th scope="cols">번 호</th>
                        <th scope="cols">제 목</th>
                        <th scope="cols">작 성 자</th>
                        <th scope="cols">작 성 일</th>    
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(board, index) in boards" :key="index" :class="{even: index%2==0}"> 
                        <td>{{index+1}}</td>            
                        <td>
                            
                            <div class="router-link-wrapper">
                            <router-link :to="`/boarddetail/${board.board_id}`">{{ board.board_title }}</router-link>
                            </div>
                        </td>
                        <td>
                            {{board.user_id}}
                        </td>
                        <td>
                            {{ formatDate(board.creation_date) }}
                        </td>
                    </tr>
                    </tbody>
                </table>
                </div>
                <div v-else class="text-center">내용이 없습니다.</div>
                <div>
                    <div class="button-container">
                        <button v-if="isUser" class="btn btn-dark w-50">추가</button>
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
import http from '../axios/axios-common.js'
import dayjs from "dayjs"; 
export default {
    data(){
        return{
            boards:[],
        };
    },
    computed:{
        isUser(){
            if(this.$session.get("user") != null && this.$session.get("user").id != '') {
                return true;
            }
            return false;
        }
    },
    created(){
        this.getBoardList();
    },
    methods:{
        getBoardList(){
            http.get("/api/board").then(response=>{
                this.boards=response.data;
            });
        },
        formatDate(date) {
            return dayjs(date).format("YYYY.MM.DD"); // moment.js를 사용하여 날짜를 "YYYY.MM.DD" 형식으로 변환합니다.
        },

    }
}
</script>

<style>

</style>