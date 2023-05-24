<template>
  <div
    id="weather"
    :class="typeof weather.main !='undefined' && Math.round(weather.main.temp) > 16 ? 'warm' : ''">
    <main>
      <div class="weather-wrap" v-if="typeof weather.main != 'undefined'">
        <div class="location-box">
            <div class="location">이곳의 현재 날씨</div>
          <!-- <div class="location">{{weather.name}}, {{weather.sys.country}}</div> -->
          
        </div>
        <div class="weather-box">
            <img :src="wicon" class="wiconimg">
          <div class="temp">{{Math.round(weather.main.temp)}}℃</div>
          
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
    name:'WeatherComponent',
    props:['lat','lng'],
  data: function () {
    return {
      api_key: "94a3a1b66d225de4dc691ef9c1cd155c",
      url_base: "https://api.openweathermap.org/data/2.5/",
      
      query: "",
      weather: {},
      wicon:"",
    };
  }
  ,
  created(){
    this.fetchWeather();
  },
  methods: {
    fetchWeather(){
        if (this.lat && this.lng) {
            let fetchUrl = `${this.url_base}weather?lat=${this.lat}&lon=${this.lng}&units=metric&APPID=${this.api_key}`; 
            console.log("위도 경도"+this.lat+" "+this.lng);
            ///let fetchUrl = `${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.api_key}`;
            fetch(fetchUrl)
            .then((res) => {
                return res.json();
            })
            .then((results) => {
                
                return this.setResult(results);
            });
        }
      
    },
    setResult: function (results) {
        this.weather = results;
        let iconcode=this.weather.weather[0].icon;
        let iconurl="http://openweathermap.org/img/w/" + iconcode + ".png";
        this.wicon=iconurl;
    },
    
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.wiconimg{
  width: 30%;
  height: 30%;
}
#weather{
        width:300px;
        height:100%;
        color: #000;
        text-align: left;
        font-size:28px;
        border-radius: 16px;
    }
.weather-box .temp {
    font-size:20px;
  display: inline-block;
  padding: 10px 25px;
  border-radius: 16px;
}
.location{
    font-size:28px;
    text-align:left;
}
</style>