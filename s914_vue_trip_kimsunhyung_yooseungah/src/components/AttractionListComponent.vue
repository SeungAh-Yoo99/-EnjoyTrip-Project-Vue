<template>
    <div class="container">
        <div class="pad"></div>
        <div>
            <div>
                <h3>{{this.sido_name}} • {{this.content_type_name}}의 여행 목록</h3>
            </div>

            <div v-for="(attraction,index) in attractions" :key="index" style="margin:50px auto;" >
                <div class="row">
                    <div class="col-2" @click="goDetail(attraction.content_id,attraction.latitude,attraction.longitude)">
                        <div class="img-size">
                            <img :src="attraction.first_image || 'https://fastly.picsum.photos/id/190/2048/1365.jpg?hmac=NWS1_X_JJ-Edi-9SZRhNwHyjKt1nECckxrGLS8_idjY'" alt="배경" class="w-100">
                        </div>
                    </div>
                    <div class="col" @click="goDetail(attraction.content_id,attraction.latitude,attraction.longitude)">
                        <div>
                            <h4>{{attraction.title}}</h4>
                        </div>
                        <div>
                            <h5>{{attraction.addr1}}</h5>
                        </div>
                        
                    </div>
                    <div class="d-flex justify-content-center">
                            <b-icon
                            icon="suit-heart-fill"
                            font-scale="2"
                            v-if="attraction.user_id != null"
                            @click="disLike(attraction.content_id)"
                            />
                            <b-icon
                            icon="suit-heart"
                            font-scale="2"
                            v-else
                            @click="isLike(attraction.content_id)"
                            />
                    </div>
                </div>
                <hr>
            </div>
        </div>

        <!-- <div>
            <b-pagination v-model="currentPage" :total-rows="rows" style="justify-content:center;"></b-pagination>
        </div> -->
    </div>
</template>

<script>
import http from "@/axios/axios-common.js";
import { mapState } from 'vuex';

export default {
    data(){
        return{
            sido_name:"",
            content_type_name:"",
            content_id:"",
            attractions: [],
            rows: 100,
            currentPage: 1,
            islike: false
        };
    },
    computed: {
    ...mapState('userStore', ['userInfo']),
    },
    created(){
        this.getList();
    },
    methods:{

        getList(){
            this.sido_name=this.$route.query.sido_name;
            this.content_type_name=this.$route.query.content_type_name;
            
            http.get("/api/attraction/search", {
                params:{
                    sido_name: this.sido_name,
                    content_type_name: this.content_type_name
                },
                headers: {
                    "access-token": sessionStorage.getItem("access-token")
                }})
                .then(response => {
                    this.attractions = response.data;
            });
            
        },
        goDetail(content_id,latitude,longitude){
            this.$router.push({name:"attractiondetail",params:{attraction:{content_id:content_id,latitude:latitude,longitude:longitude}}});
        },
        isLike(content_id){
            http.post("/api/attraction/like/" + content_id, {
                headers: {
                    "access-token": sessionStorage.getItem("access-token")
                }})
                .then(response => {
                    if(response.data.result == 'login') {
                        alert("로그인이 필요한 페이지입니다.");
                        this.$router.push("/login");
                    }
                    else {
                        this.attractions.forEach(attraction => {
                            if(attraction.content_id == content_id) attraction.user_id=".";
                        });
                    }
            });
        },
        disLike(content_id) {
            http.delete("/api/attraction/like/" + content_id, {
                headers: {
                    "access-token": sessionStorage.getItem("access-token")
                }})
                .then(response => {
                    if(response.data.result == 'login') {
                        alert("로그인이 필요한 페이지입니다..");
                        this.$router.push("/login");
                    }
                    else {
                        this.attractions.forEach(attraction => {
                            if(attraction.content_id == content_id) attraction.user_id=null;
                        });
                    }
            });
        }
    }   
    
}
</script>

<style>
.img-size {
    /* height: 150px; Adjust the height as per your requirement */
    object-fit: cover;
}
</style>