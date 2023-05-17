<template>
    <div id="container">
        <div id="contacts">
            <div id="contacts--contact">
                <p>{{ mail }}</p>
                <p>{{ phone }}</p>
            </div>
            <div id="contacts--social">
                <div><img src="../assets/img/ssafyimg.png" class="profile"></div>
                <div><img src="../assets/img/sunhyung.jpg" class="profile"></div>
                <div><img src="../assets/img/seungah.jpeg" class="profile"></div>
            </div>
            </div>
            <div id="mentions">
            <p>{{ mention }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            mail : 'xavier.seignard+drangies@gmail.com',
            phone : '06.00.00.00.00',
            mention : '2018 | mentions légales'
        };
    }
}
</script>

<style scoped>
body{
  display:flex;
  background-color:#F0F8FF;
  height:95vh;
  justify-content:center;
  align-items:flex-end;
  font-family:Open Sans;
}

#container{
  padding-top:20px;
  margin-top:20px;
  width:100vw;
  color:white;
  background-color:#292354;
  display:flex;
  flex-direction:column;
  align-items:center;
}
#contacts{
  display:flex;
  justify-content:space-around;
  align-items:center;
  width:100%;
}
#contacts--contact{
  text-align:right;
}
#contacts--social{
  width:20%;
  display : flex;
  justify-content : space-between;
}
#contacts--social div{
  height:40px;
  width:40px;
  background-color:white;
  overflow: hidden;
  border-radius:50%;
}
.profile {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
#mentions p {
  font-size:0.5em;
}
</style>