<template>
    <div>
        <div>댓글</div>
        <div>
            <table class="type10 ">
                <colgroup>          
            
                <col style="width: 10%" />
                <col style="width: 80%" />
                <col style="width: 10%" />
                </colgroup>
                <thead>
                <tr>           
                    <th scope="cols">작 성 자</th>
                    <th scope="cols">내 용</th>
                    <th scope="cols">작 성 일</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(review, index) in reviews" :key="index" :class="{even: index%2==0}"> 
                    <td>{{review.user_id}}</td>            
                    <td>
                        {{review.review_content}}
                    </td>
                    <td>
                         {{formatDate(review.creation_date)}}
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        <div v-if="true">
            <hr>
            <div>댓글 쓰기</div>
            <div class="comment-form">
                <div class="form-group">
                    <textarea id="review_content" class="form-control" placeholder="댓글을 작성해주세요" rows="3" max-rows="6"></textarea>
                </div>
                <div class="submit-button">
                    <button class="btn btn-dark">댓글 작성</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import http from '../axios/axios-common.js';
import dayjs from "dayjs"; 
export default {
    name:'ReviewComponent',
    props:['content_id'],
    data(){
        return {
            reviews: [],
        };
    },
    created(){
        this.getReviewList();
    },
    computed:{
        isUser(){
            if(this.$session.get("user") != null && this.$session.get("user").id != '') {
                return true;
            }
            return false;
        }
    },
    methods:{
        
        getReviewList(){
            console.log(this.content_id);
            http.get("/api/attraction/review/list/"+this.content_id).then(response=>{
                this.reviews=response.data;
                console.log(this.reviews);
            })
        },
        formatDate(date) {
            return dayjs(date).format("YYYY.MM.DD"); // moment.js를 사용하여 날짜를 "YYYY.MM.DD" 형식으로 변환합니다.
        },
    }

}
</script>

<style>
.comment-form {
    display: flex;
    flex-direction: column;
}

.submit-button {
    align-self: flex-end;
    margin-top: 10px;
}
</style>