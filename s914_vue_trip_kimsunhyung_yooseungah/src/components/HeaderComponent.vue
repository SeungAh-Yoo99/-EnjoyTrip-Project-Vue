<template>
<div>
    <b-navbar toggleable="lg" type="dark" class="bg">
<<<<<<< HEAD
    <b-navbar-brand class="navbar-brand-align">
        <router-link to="/" class="logo"><img src="../assets/img/ffycniclogo.png" class="navbar-brand-image"></router-link>
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
=======
    <b-navbar-brand href="#">
        <img src="../assets/img/ffycniclogo.png" style="width:25%; object-fit:cover;">
>>>>>>> e7e7896bec4385722e590c67564d1f21382d125c
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
            <b-nav-item>
                <router-link to='/categorysearch'>여행지 보기</router-link>
            </b-nav-item>
            <b-nav-item href="#">여행 코스</b-nav-item>
            <b-nav-item href="#">공지사항</b-nav-item>
            <div v-if="isLoggedIn">
                <b-nav-item-dropdown right>
                    <!-- Using 'button-content' slot -->
                    <template #button-content>
                        <em>User</em>
                    </template>
                    <b-dropdown-item href="#">나의 정보 보기</b-dropdown-item>
                    <b-dropdown-item href="#">로그아웃</b-dropdown-item>
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
export default {
    data(){
        return {
            isLoggedIn : false,
        };
    }
}
</script>

<style scoped>
.bg{
    background-color: #1bb1e7;
}
<<<<<<< HEAD
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
.navbar-dark .navbar-nav .nav-link {
    color: #6c757d;
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

=======
>>>>>>> e7e7896bec4385722e590c67564d1f21382d125c
</style>




