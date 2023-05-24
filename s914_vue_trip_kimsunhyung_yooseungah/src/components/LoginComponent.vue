<template>
    <div>
        <div class="container mt-5">
            <div class="row d-flex justify-content-center">
                <div class="col-md-6">
                    <div class="card px-5 py-5" id="form1">
                        <form>
                            <div class="form-data">
                                <div class="forms-inputs mb-4"> <span>아이디</span> <input utocomplete="off" type="text" v-model="user.id" class="form-control" @keyup.enter="login">
                                    <div class="invalid-feedback">아이디를 입력해 주세요!</div>
                                </div>
                                <div class="forms-inputs mb-4"> <span>비밀번호</span> <input autocomplete="off" type="password" v-model="user.pw" class="form-control" @keyup.enter="login">
                                    <div class="invalid-feedback">비밀번호를 입력해 주세요!</div>
                                </div>
                                <div class="mb-3"><input type='button' class="btn btn-dark w-100" value='login' @click="loginCheck"/></div>
                            </div>
                        </form>
                    </div>
                    <div class="row-vw d-flex link">
                        <router-link to="/join" class="mx-auto">회원가입</router-link> |
                        <router-link to="/searchId" class="mx-auto">아이디 찾기</router-link> |
                        <router-link to="/searchPw" class="mx-auto">비밀번호 찾기</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

const userStore = "userStore";

export default {
    name: "UserLogin",
    data() {
        return {
            user: {
                id:"",
                pw:"",
            },
        }
    },
    computed: {
        ...mapState(userStore, ["isLogin", "isLoginError", "userInfo"]),
    },
    methods:{
        ...mapActions(userStore, ["userConfirm", "getUserInfo"]),
        // 토큰이 넘어올 때까지 기다려야 하므로 async와 await 붙혀줌
        async loginCheck() {
            if(this.user.id.length == 0) {
                alert("아이디를 입력해 주세요.");
            }
            else if(this.user.pw.length == 0) {
                alert("비밀번호를 입력해 주세요.");
            }
            else {
                await this.userConfirm(this.user);
                let token = sessionStorage.getItem("access-token");
                if (this.isLogin) {
                    await this.getUserInfo(token);
                    this.$router.push("/");
                }
            }
        },
<<<<<<< HEAD
=======
        submit(){
            this.validate();
            if(this.valid){
                this.submitted = true;
            }
        },
        login(){
            http.post("/api/user/login", {
                    id:this.id,
                    pw:this.pw
                },{
                withCredentials: true
                })
                .then(response => {
                    if(response.data.id == this.id) {
                        this.$session.set("user", response.data);
                        this.$router.push("/");
                    }
                    else {
                        alert("아이디 또는 비밀번호를 잘못 입력했습니다.");
                        this.$router.go("/login");
                    }
                })
                .catch((exp) => alert(exp + ": 로그인 실패"));
        },
>>>>>>> 55ee10041da3f550e3d46aa7fe61e47acedc9531
    }
}
</script>

<style>
body{
    background: #000
}
a.mx-auto{
    color: #000;
}
.card{
    border: none;
    height: 320px
}
.forms-inputs{
    position: relative
}
.forms-inputs span{
    position: absolute;
    top:-18px;left: 10px;
    background-color: #fff;
    padding: 5px 10px;
    font-size: 15px
}
.forms-inputs input{
    height: 50px;
    border: 2px solid #eee
}
.forms-inputs input:focus{
    box-shadow: none;
    outline: none;
    border: 2px solid #000
}
.btn{
    height: 50px
}
.success-data{
    display: flex;
    flex-direction: column
}
.bxs-badge-check{
    font-size: 90px
}
.btn-dark {
    background-color: #231f20;
    border-color: #231f20;
}
div.link{
    margin-top: 15px;
}
</style>