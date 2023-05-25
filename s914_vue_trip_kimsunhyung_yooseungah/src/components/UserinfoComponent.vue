<template>
    <div>
        <div class="centered-card">
            <div class="card px-5 py-5">
                <b-form>
                    <b-form-group id="input-group-1" label="아이디:" label-for="input-1">
                        <div class="d-flex">
                            <b-form-input
                                id="input-1"
                                :value="userInfo.id"
                                readonly
                            ></b-form-input>
                        </div>
                    </b-form-group>

                    <b-form-group id="input-group-2" label="회원 분류:" label-for="input-2">
                        <div class="d-flex">
                            <b-form-input
                                id="input-2"
                                :value="role"
                                readonly
                            ></b-form-input>
                        </div>
                    </b-form-group>

                    <b-form-group id="input-group-3" label="이름:" label-for="input-3">
                        <div class="d-flex">
                            <b-form-input
                                id="input-3"
                                v-model="userInfo.name"
                            ></b-form-input>
                            <b-button variant="outline-secondary" class="check-button" @click="duplicateName">중복 확인</b-button>
                        </div>
                    </b-form-group>
                    <div v-show="checkedName" class="msg">
                        <div v-if="isValidName" class="primary">사용 가능한 아이디입니다.</div>
                        <div v-else class="danger">{{errMsgForName}}</div>
                    </div>

                    <div class="d-flex justify-content-center">
                        <b-button class="submit-button" type="submit" variant="outline-primary" @click="submit">저장</b-button>
                    </div>
                </b-form>
            </div>
        </div>
    </div>
</template>

<script>
import http from "../axios/axios-common.js";
import { mapState } from 'vuex';

export default {
    data() {
        return {
            role:"",

            checkedName: false,
            isValidName:false,
            errMsgForName:'',
        }
    },
    computed: {
        ...mapState('userStore', ["userInfo"]),
    },
    created() {
        if(this.userInfo.role == 'member') this.role = "일반 회원";
        else if(this.userInfo.role == 'admin') this.role = "관리자";
        else this.role = "사업자";
    },
    methods: {
    duplicateName() {
        console.log('check name');
        this.checkedName=true;

        if(this.userInfo.name.length > 0) {
            http.post("/api/user/name/check", {
                name:this.userInfo.name
            })
            .then(response => {
                if(response.data.result == "available") {
                    this.isValidName=true;
                }
                else {
                    this.isValidName=false;
                    this.errMsgForName='이미 사용 중인 이름입니다.';
                }
            })
        }
        else {
            this.errMsgForName='이름을 입력 하세요.';
        }
    },
    submit() {
        if(this.isValidName) {
            http.put("/api/user/modify", {
                name:this.userInfo.name
            }, {
            headers: {
                "access-token": sessionStorage.getItem("access-token")
            }})
            .then(response => {
                if(response.data.result == "modify success!") {
                    alert("회원 정보가 수정 되었습니다.");
                    this.$router.go();
                }
                else {
                    alert("회원 정보 수정 실패");
                }
            })
            .catch(exp => alert(exp + ": 회원 정보 수정 실패"));
        }
    }
    }
}
</script>

<style scoped>
.card{
    height: 450px;
    width: 35%;
}
.centered-card{
    display: flex;
    justify-content: center;
}
.submit-button, .reset-button{
    margin-left: 5px;
    margin-right: 5px;
    width: 100px;
}
.check-button{
    height: 38px;
    width: 140px;
    margin-left: 5px;
}
div.msg{
    margin-bottom: 1rem;
}
.primary{
    color: #007bff;
}
.danger{
    color: #dc3545;
}
</style>