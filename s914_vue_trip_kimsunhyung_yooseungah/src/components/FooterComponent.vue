<template>
    <footer id="container">
        <div id="contacts">
            <div id="contacts--contact">
                <p>본 사이트의 콘텐츠는 저작권법의 보호를 받는 바 무단 전재, 복사, 배포 등을 금합니다.</p>
                <p>Copyright©KIMSUNHYUNG&YOOSEUNGAH All Rigths Reserved</p>
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
    </footer>
</template>

<script>
export default {
    data(){
        return{
            mention : '2023 | SSAFY 9th Class14'
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
  background-color:#1bb1e7;
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
  text-align:left;
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