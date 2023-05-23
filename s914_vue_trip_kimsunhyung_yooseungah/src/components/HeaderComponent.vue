<template>
<div>
    <b-navbar toggleable="lg" type="dark" class="bg">

    <b-navbar-brand class="navbar-brand-align">
        <img src="../assets/img/ffycniclogo.png" class="navbar-brand-image logo" @click="gotoHome">
        <b-nav-form>
            <b-row no-gutters>
                <b-col cols="8">
                    <b-form-input class="mr-sm-2 input-height input-width" placeholder="키워드를 입력하세요."></b-form-input>
                </b-col>
                <b-col cols="4" class="pl-2">
                    <b-button class="w-100 button-height" riant="outline-success" type="submit">검색</b-button>
                </b-col>
            </b-row>
        </b-nav-form>
        
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
            <b-nav-item>
                <router-link to='/categorysearch'>여행지 보기</router-link>
            </b-nav-item>
            <b-nav-item>
                <router-link to='/'>여행 코스</router-link>
            </b-nav-item>
            <b-nav-item>
                <router-link to='/boardlist'>게시판</router-link>
            </b-nav-item>
            <b-nav-item href="#">
                <router-link to='/notice'>공지사항</router-link>
            </b-nav-item>
            <div v-if="isLoggedIn">
                <b-nav-item-dropdown right>
                    <!-- Using 'button-content' slot -->
                    <template #button-content>
                        <em>{{user_name}}님</em>
                    </template>
                    <b-dropdown-item href="#">나의 정보 보기</b-dropdown-item>
                    <b-dropdown-item @click="logout">로그아웃</b-dropdown-item>
                </b-nav-item-dropdown>
            </div> 
            <div v-else>
                <b-nav-item>
                    <router-link to='/login'>로그인</router-link>
                </b-nav-item>
            </div>
        </b-navbar-nav>
    </b-collapse>
    </b-navbar>
</div>
</template>

<script>
import http from "../axios/axios-common.js";

export default {
    data(){
        return {
            isLoggedIn : false,
            user_name : '',
            user_null: {id:''},
        };
    },
    created() {
		if(this.$session.get("user") != null) {
            this.isLoggedIn=true;
            this.user_name=this.$session.get("user").name;
        }
	},
    methods: {
        gotoHome() {
            if(this.$route.path !== '/') this.$router.push("/");
        },
        logout() {
            http.get("/api/user/logout")
            .then(response => {
                if(response.data.result == "logout success") {
                    this.$session.set("user", this.user_null);
                    this.isLoggedIn=false;
                    alert('로그아웃 완료');
                }
                else {
                    alert('로그아웃 실패'); 
                }
            })
            .catch((exp) => alert(exp + ": 로그아웃 실패"))
            
        }
    },
}
</script>

<style scoped>
.bg{
    background-color: #1bb1e7;
}

img {
    width:25%;
    object-fit:cover;
}
.input-height, .button-height {
    height: 100%;
}
.input-width{
    width: 200%;
}
.navbar-brand-align{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.navbar-brand-align router-link {
  width: 180px;
}
.navbar-brand-image{
    width: 162.56px;
}
a {
    color: white;
}

.navbar-dark .navbar-nav .nav-link em {
    color: white;
}

</style>




