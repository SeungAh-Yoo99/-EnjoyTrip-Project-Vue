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
                            <img :src="attraction.first_image" alt="이미지 준비중" class="w-100">
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
                    <div class="d-flex justify-content-center" @click="isLike(attraction.content_id)">
                        <b-button class="mb-2 button" >
                            <b-icon
                            icon="hand-thumbs-up-fill"
                            font-scale="2"
                            />
                        </b-button>
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

import http from "@/router/axios-common.js";
export default {
    data(){
        return{
            sido_name:"",
            content_type_name:"",
            user_id:"",
            content_id:"",
            attractions: [],
            rows: 100,
            currentPage: 1
        };
    },
    created(){
        this.user_id=this.$session.get("user").id;
        this.getList(this.$route.params.form);

    },
    computed:{
        
    },
    methods:{
        getList(form){
            this.sido_name=form.sido_name;
            this.content_type_name=form.content_type_name;
            
            http.get("/api/attraction/search", {
                    params:{
                            sido_name: this.sido_name,
                            content_type_name: this.content_type_name
                    }
                        }).then(response => {
                        this.attractions = response.data;
                        console.log(this.attractions);
                        });
            
        },
        goDetail(content_id,latitude,longitude){
            this.$router.push({name:"attractiondetail",params:{attraction:{content_id:content_id,latitude:latitude,longitude:longitude}}});
            // this.$router.push('/attractiondetail/'+id);
        },
        isLike(content_id){
            http.get("/api/attraction/islike/"+content_id).then((response=>{
                
                console.log(response.data);
            }));
        }
        
    }
    
}
</script>

<style>
    #btn {
    position: relative;
    background-color: #f1f3f5;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    font-size: 16px;
    font-weight: bold;
    overflow: hidden;
  }
  .img-size {
  /* height: 150px; Adjust the height as per your requirement */
  object-fit: cover;
}
</style>