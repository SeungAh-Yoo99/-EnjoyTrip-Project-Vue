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
            
            <div class="map-wrapper">
            <map-component-vue :lat=attraction.latitude :lng=attraction.longitude :key="`${attraction.latitude}-${attraction.longitude}`"></map-component-vue>
            </div>
        </div> 
      </div>
    </div>

    <div class="pad"></div>
  </div>
</template>

<script>
import MapComponentVue from './MapComponent.vue';
import http from '@/axios/axios-common.js';
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
    MapComponentVue
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
      console.log("여기에 출력 "+content_id+"      "+latitude+" "+longitude);
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
</style>
