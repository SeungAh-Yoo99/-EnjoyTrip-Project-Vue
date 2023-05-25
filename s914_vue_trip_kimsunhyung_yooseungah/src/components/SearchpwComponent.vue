<template>
    <div>
        <div class="centered-card">
            <div class="card px-5 py-5">
                <b-form>
                    <b-form-group id="input-group-1" label="아이디:" label-for="input-1">
                        <div class="d-flex">
                            <b-form-input
                                id="input-1"
                                v-model="id"
                                placeholder="아이디를 입력해주세요."
                            ></b-form-input>
                        </div>
                    </b-form-group>

                    <b-form-group id="input-group-2" label="이름:" label-for="input-2">
                        <div class="d-flex">
                            <b-form-input
                                id="input-2"
                                v-model="name"
                                placeholder="이름을 입력해주세요."
                            ></b-form-input>
                        </div>
                    </b-form-group>

                    <div class="d-flex justify-content-center">
                        <b-button @click="submit">새 비밀번호 찾기</b-button>
                    </div>
                </b-form>
            </div>
        </div>
    </div>
</template>

<script>
import http from "../axios/axios-common.js";

export default {
    data() {
        return {
            id:'',
            name:''
        }
    },
    methods: {
    submit() {
        if(this.id <= 0) {
            alert('아이디를 입력하세요.');
        }
        else if(this.name <= 0) {
            alert('이름을 입력하세요.');
        }
        else {
            http.post("/api/user/findPw", {
                id:this.id,
                name:this.name
            })
            .then(response => {
                if(response.data.result == "success") {
                    this.$router.push("/changePw");
                }
                else {
                    alert("회원 정보를 찾을 수 없습니다.");
                }
            })
            .catch(exp => alert(exp + ": 회원 정보를 찾을 수 없습니다."));
        }
    }
    }
}
</script>

<style scoped>
.card{
    height: 350px;
    width: 35%;
}
.centered-card{
    display: flex;
    justify-content: center;
}
.submit-button{
    margin-left: 5px;
    margin-right: 5px;
    width: 150px;
}
.check-button{
    height: 38px;
    width: 140px;
    margin-left: 5px;
}
</style>