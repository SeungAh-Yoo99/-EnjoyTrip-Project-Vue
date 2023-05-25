<template>
  <div class="container">
    <div>
      <h3>인기 여행지 추천</h3>
    </div>
    <div>
      <b-carousel id="carousel-1" v-model="slide" :interval="5000" controls>
        <!-- Slides with custom text -->
        <b-carousel-slide v-for="(attractionGroup, index) in groupedAttractions" :key="index">
          <template slot="img">
            <b-row>
              <b-col v-for="(attraction, attractionIndex) in attractionGroup" :key="attractionIndex" class="col-md-4">
                <b-card
                  :title="attraction.title"
                  :img-src="attraction.first_image"
                  :img-alt="getAltText(attraction)"
                  img-top
                  tag="article"
                  style="max-width: 20rem;"
                  class="mb-2 custom-card"
                  @click="goDetail(attraction.content_id,attraction.latitude,attraction.longitude)"
                >
                  <b-card-text>
                    {{ attraction.addr1 }}
                  </b-card-text>
                </b-card>
              </b-col>
            </b-row>
          </template>
        </b-carousel-slide>
      </b-carousel>
    </div>
  </div>
</template>

<script>
import http from "@/axios/axios-common.js";
export default {
  data() {
    return {
      slide: 0,
      attractions: [],
    };
  },
  created() {
    this.selectHotPlace();
  },
  computed: {
    groupedAttractions() {
      const attractionsCopy = [...this.attractions];
      const grouped = [];
      while (attractionsCopy.length) {
        grouped.push(attractionsCopy.splice(0, 3));
      }
      return grouped;
    },
  },
  methods: {
    selectHotPlace() {
      http.get("/api/attraction/hotplace").then((response) => {
        this.attractions = response.data;
      });
    },
    getAltText(attraction) {
       
      if (attraction.first_image) {
        
        return "Image not available";
      }else{
        attraction.first_image="https://fastly.picsum.photos/id/190/2048/1365.jpg?hmac=NWS1_X_JJ-Edi-9SZRhNwHyjKt1nECckxrGLS8_idjY";
        return "Image not available";
      }
    },
    goDetail(content_id,latitude,longitude){
            this.$router.push({name:"attractiondetail",params:{attraction:{content_id:content_id,latitude:latitude,longitude:longitude}}});
            // this.$router.push('/attractiondetail/'+id);
        },
  },
};
</script>

<style>
.container {
  font-family: arial;
  font-size: 10px;
}

.card-img-top {
    object-fit: cover;
    height:65%;
}
</style>