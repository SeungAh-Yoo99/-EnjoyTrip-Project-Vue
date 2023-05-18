<template>
    <div>
        <div class="container mt-5">
            <div class="row d-flex justify-content-center">
                <div class="col-md-6">
                    <div class="card px-5 py-5" id="form1">
                        <div class="form-data" v-if="!submitted">
                            <div class="forms-inputs mb-4"> <span>User ID</span> <input type="text" v-model="id" v-bind:class="{'form-control':true, 'is-invalid' : !validId(id) && idBlured}" v-on:blur="idBlured = true">
                                <div class="invalid-feedback">아이디를 입력해 주세요!</div>
                            </div>
                            <div class="forms-inputs mb-4"> <span>Password</span> <input autocomplete="off" type="password" v-model="password" v-bind:class="{'form-control':true, 'is-invalid' : !validPassword(password) && passwordBlured}" v-on:blur="passwordBlured = true">
                                <div class="invalid-feedback">비밀번호를 입력해 주세요!</div>
                            </div>
                            <div class="mb-3"> <button v-on:click.stop.prevent="submit" class="btn btn-dark w-100">Login</button> </div>
                        </div>
                        <div class="success-data" v-else>
                            <div class="text-center d-flex flex-column"> <i class='bx bxs-badge-check'></i> <span class="text-center fs-1">You have been logged in <br> Successfully</span> </div>
                        </div>
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
export default {
    data() {
        return {
            id : "",
            idBlured : false,
            valid : false,
            submitted : false,
            password:"",
            passwordBlured:false
        }
    },
    methods:{
        validate() {
            this.idBlured = true;
            this.passwordBlured = true;
            if( this.valid(this.id) && this.validPassword(this.password)){
                this.valid = true;
            }
        },
        validId(id) {
            if (id.length > 0) {
                return true;
            }
        },
        validPassword(password) {
            if (password.length > 7) {
                return true;
            }
        },
        submit(){
            this.validate();
            if(this.valid){
                this.submitted = true;
            }
        }
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