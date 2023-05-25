<template>
    <div>
        <div class="location">지도</div>
        <div id="map">
        </div>
    </div>
</template>

<script>
export default {
    name:'KakaoMap',
    props:['lat','lng'],
    data(){
        return {
            map:null,
            latitude:"",
            longitude:"",
        };
    },
    created(){
        this.latitude=this.lat;
        this.longitude=this.lng;
    },
    setup(){},
    mounted(){
        
        if(window.kakao && window.kakao.maps){
            this.loadMap();
            console.log("맵 뜨나");
        }else{
            this.loadScript();
            console.log("이건가");
        }
        
    },
    watch:{
        lat(newValue){
            this.latitude=newValue;
            this.loadMap();
        },
        lng(newValue){
            this.longitude=newValue;
            this.loadMap();
        }
    },
    unmounted(){},
    methods:{
        loadScript(){
            const script=document.createElement("script");
            script.src="//dapi.kakao.com/v2/maps/sdk.js?appkey=5676b10c7c784539cc4c42baefeef43f&autoload=false";
            script.onload=() => window.kakao.maps.load(this.loadMap);
            document.head.appendChild(script);
        },
        loadMap(){
            this.latitude=this.lat;
            this.longitude=this.lng;
            const container=document.getElementById("map");
            const options={
                center:new window.kakao.maps.LatLng(this.latitude,this.longitude),
                level:3,
            };
            this.map=new window.kakao.maps.Map(container,options);
            this.loadMaker();
        },
        loadMaker(){
            const markerPosition=new window.kakao.maps.LatLng(this.lat,this.lng);
            const marker=new window.kakao.maps.Marker({
                position:markerPosition
            });
            marker.setMap(this.map);
        }
    }
}
</script>

<style>
    #map{
        width:300px;
        height:300px;
    }
    .location{
        text-align:left;
        font-size:28px;
        padding-bottom: 5%;
    }
    
</style>