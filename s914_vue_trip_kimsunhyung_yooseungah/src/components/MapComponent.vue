<template>
    <div>
        <div id="map"></div>
    </div>
</template>

<script>
export default {
    name:'KakaoMap',
    props:['lat','lng'],
    data(){
        return {
            map:null
        };
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
    unmounted(){},
    methods:{
        loadScript(){
            const script=document.createElement("script");
            script.src="//dapi.kakao.com/v2/maps/sdk.js?appkey=5676b10c7c784539cc4c42baefeef43f&autoload=false";
            script.onload=() => window.kakao.maps.load(this.loadMap);
            document.head.appendChild(script);
        },
        loadMap(){
            console.log("여기",this.lat,this.lng);
            const container=document.getElementById("map");
            const options={
                center:new window.kakao.maps.LatLng(this.lat,this.lng),
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
    
</style>