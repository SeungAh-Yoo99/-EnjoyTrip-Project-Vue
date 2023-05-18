<template>
  <div class="container">
    <div class="pad"></div>
    <h1>{{ attraction.title }}</h1>

    <div>
      <div style="width: 100%; height: 400px;">
        <img :src="attraction.src3" style="width: 100%;height: 100%;object-fit: cover;">
      </div>
      <div class="pad"></div>
      <div class="row">
        <div class="col-8">
            <h3>주소</h3><br>
            <h5>{{attraction.addr}}</h5>
            <hr>
            <h3>상세 설명</h3><br>
            <p>
                {{attraction.description}}
            </p>
        </div>
        <div class="col-4">
            
            <div class="map-wrapper">
            <map-component-vue :lat=lat :lng=lng></map-component-vue>
            </div>
        </div>        
      </div>



    </div>
  </div>
</template>

<script>
import MapComponentVue from './MapComponent.vue';

export default {
  data() {
    return {
      id: "",
      lat:"",
      lng:"",
      attraction: {
        title: "국립 유명산자연휴양림",
        addr: "경기도 가평군 설악면 유명산길 79-53",
        src1: "https://picsum.photos/1024/480/?image=54",
        src2:"http://tong.visitkorea.or.kr/cms/resource/91/1841991_image2_1.jpg",
        src3:
          "http://tong.visitkorea.or.kr/cms/resource/91/738491_image2_1.jpg",
        description: "해발 1,200m의 청태산을 주봉으로 하여 인공림과 천연림이 잘 조화된 울창한 산림을 바탕으로 한 국유림 경영 시범단지로서 숲속에는 온갖 야생 동식물이 고루 서식하고 있어 자연박물관을 찾은 기분을 느낄 수 있다. 영동고속도로 신갈기점 강릉방향 128km 지점에 위치하고 있어 여름철 동해안 피서객들이 잠시 쉬었다 가기에 편리하고, 청소년의 심신수련을 위한 숲속교실도 설치되어 있으며 울창한 잣나무 숲속의 산림욕장은 한번왔다간 사람은 누구나 매료되어 찾는 곳이기도 하다. * 구역면적 - 403 ha"
      },
    };
  },
  components:{
    MapComponentVue
  }
  ,
  created() {
    this.getDetail(this.$route.params.attraction.id,this.$route.params.attraction.lat,this.$route.params.attraction.lng);
  },
  methods: {
    getDetail(id,lat,lng) {
      this.id = id;
      this.lat=lat;
      this.lng=lng;
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
