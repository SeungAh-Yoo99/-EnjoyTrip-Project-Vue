<template>
    <div class="container">
        <div class="pad"></div>
        <div>
            <div>
                <h3>{{this.form.sido}} • {{this.form.type}}의 여행 목록</h3>
            </div>

            <div v-for="(attraction,index) in attractions" :key="index" style="margin:50px auto;" >
                <div class="row">
                    <div class="col-2" @click="goDetail(attraction.id,attraction.lat,attraction.lng)">
                        <img :src=attraction.src class="w-100">
                    </div>
                    <div class="col" @click="goDetail(attraction.id,attraction.lat,attraction.lng)">
                        <div>
                            <h4>{{attraction.title}}</h4>
                        </div>
                        <div>
                            <h5>{{attraction.addr}}</h5>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center">
                        <button id="btn"> 좋아요</button>
                    </div>
                </div>
                <hr>
            </div>
        </div>

        <div>
            <b-pagination v-model="currentPage" :total-rows="rows" style="justify-content:center;"></b-pagination>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            form: {
                    sido: null,
                    type:null
                },
            attractions: [
                {
                    title: "국립 유명산자연휴양림",
                    addr:"경기도 가평군 설악면 유명산길 79-53",
                    src:"http://tong.visitkorea.or.kr/cms/resource/77/219377_image2_1.jpg",
                    id: 125409,
                    lat: 37.57107346000000000,
                    lng:127.30237470000000000
                },
                {
                    title: "국립 유명산자연휴양림",
                    addr:"경기도 가평군 설악면 유명산길 79-53",
                    src:"http://tong.visitkorea.or.kr/cms/resource/77/219377_image2_1.jpg",
                    id: 10
                },
                {
                    title: "국립 유명산자연휴양림",
                    addr:"경기도 가평군 설악면 유명산길 79-53",
                    src:"http://tong.visitkorea.or.kr/cms/resource/77/219377_image2_1.jpg",
                    id: 20
                },
                {
                    title: "국립 유명산자연휴양림",
                    addr:"경기도 가평군 설악면 유명산길 79-53",
                    src:"http://tong.visitkorea.or.kr/cms/resource/77/219377_image2_1.jpg",
                    id: 30
                },
                {
                    title: "국립 유명산자연휴양림",
                    addr:"경기도 가평군 설악면 유명산길 79-53",
                    src:"http://tong.visitkorea.or.kr/cms/resource/77/219377_image2_1.jpg",
                    id: 40
                },
                {
                    title: "국립 유명산자연휴양림",
                    addr:"경기도 가평군 설악면 유명산길 79-53",
                    src:"http://tong.visitkorea.or.kr/cms/resource/77/219377_image2_1.jpg",
                    id: 125409
                }
            ],
            rows: 100,
            currentPage: 1
        };
    },
    created(){
        this.getList(this.$route.params.form);
    },
    methods:{
        getList(form){
            this.form.sido=form.sido;
            this.form.type=form.type;
        },
        goDetail(id,lat,lng){
            alert(id);
            this.$router.push({name:"attractiondetail",params:{attraction:{id:id,lat:lat,lng:lng}}})
            // this.$router.push('/attractiondetail/'+id);
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
</style>