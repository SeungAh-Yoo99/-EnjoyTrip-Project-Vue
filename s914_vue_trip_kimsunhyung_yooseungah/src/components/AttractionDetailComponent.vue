<template>
  <div class="container">
    <div class="pad"></div>
    <h1>{{ attraction.title }}</h1>

    <div>
      <div style="width: 100%; height: 400px;">
        <img :src="attraction.first_image" style="width: 100%;height: 100%;object-fit: cover;">
      </div>
      <div class="pad"></div>
      <div class="row">
        <div class="col-8">
            <h3>주소</h3><br>
            <h5>{{attraction.addr1}}</h5>
            <h5>{{attraction.addr2}}</h5>
            <hr>
            <h3>상세 설명</h3><br>
            <p>
                {{attraction.overview}}
            </p>
        </div>
        
        <div class="col-4">
            
            <div class="map-wrapper row">
            <div>
              <weather-component-vue :lat=attraction.latitude :lng=attraction.longitude :key="`${attraction.latitude}-${attraction.longitude}`"></weather-component-vue>
            </div>
            <div class="map">
              <map-component-vue :lat=attraction.latitude :lng=attraction.longitude :key="`${attraction.latitude}-${attraction.longitude}`"></map-component-vue>
            </div>
            </div>
        </div>
      </div>
      <hr>

      <div class="location">
        <div>
          <review-component-vue ref="reviewComponent" :content_id=content_id @reviewAdded="refreshReviews"></review-component-vue>
        </div>
      </div>
    </div>

    <div class="pad"></div>
  </div>
</template>

<script>
import MapComponentVue from './MapComponent.vue';
import http from '@/axios/axios-common.js';
import WeatherComponentVue from './WeatherComponent.vue';
import ReviewComponentVue from './ReviewComponent.vue';
export default {
  data() {
    return {
      content_id: "",
      latitude:"",
      longitude:"",
      attraction: {},
    };
  },
  components:{
    MapComponentVue,
    WeatherComponentVue,
    ReviewComponentVue
  }
  ,
  created() {
    this.getDetail(this.$route.params.attraction.content_id,this.$route.params.attraction.latitude,this.$route.params.attraction.longitude);
  },
  methods: {
    getDetail(content_id,latitude,longitude) {
      http.get("/api/attraction/id/"+content_id).then((response=>{
        this.attraction=response.data;
      }))
      this.content_id = content_id;
      this.latitude=latitude;
      this.longitude=longitude;
    },
    refreshReviews() {
      this.$refs.reviewComponent.getReviewList(); // 자식 컴포넌트의 getReviewList() 메서드를 호출하여 댓글 목록을 다시 불러옵니다.
    },
  },
};
</script>
<style>
.map-wrapper {
  display: flex;
  justify-content: flex-end;
}
p{
    font-size:15px;
}
.map{
  margin-top:5%;
}
</style>
