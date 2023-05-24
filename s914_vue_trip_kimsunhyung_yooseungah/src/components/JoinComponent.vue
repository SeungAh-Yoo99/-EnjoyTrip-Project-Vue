<template>
    <div>
        <div class="centered-card">
            <div class="card px-5 py-5">
                <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                    <b-form-group id="input-group-1" label="아이디:" label-for="input-1">
                        <div class="d-flex">
                            <b-form-input
                                id="input-1"
                                v-model="form.id"
                                placeholder="아이디를 입력해 주세요."
                                required
                                autocomplete="off"
                            ></b-form-input>
                            <b-button variant="outline-secondary" class="check-button" @click="duplicateID">중복 검사</b-button>
                        </div>
                    </b-form-group>
                    <div v-show="checkedId" class="msg">
                        <div v-if="isValidId" class="primary">사용 가능한 아이디입니다.</div>
                        <div v-else class="danger">{{errMsgForId}}</div>
                    </div>

                    <b-form-group id="input-group-2" label="비밀번호:" label-for="input-2">
                        <b-input-group v-if="showPassword">
                            <b-form-input
                                id="input-2"
                                type="text"
                                v-model="form.password"
                                placeholder="비밀번호를 입력해 주세요."
                                required
                                autocomplete="off"
                                @blur="checkPw"
                            ></b-form-input>
                            <b-input-group-append>
                                <b-button variant="outline-secondary" class="custom-button" @click="toggleShow">
                                    <b-icon
                                        icon="eye-fill"
                                        aria-hidden="true"
                                    ></b-icon>
                                </b-button>
                            </b-input-group-append>
                        </b-input-group>
                        <b-input-group v-else>
                            <b-form-input
                                id="input-2"
                                class="custom-input"
                                type="password"
                                v-model="form.password"
                                placeholder="비밀번호를 입력해 주세요."
                                required
                                autocomplete="off"
                                @blur="checkPw"
                            ></b-form-input>
                            <b-input-group-append>
                                <b-button variant="outline-secondary" class="custom-button" @click="toggleShow">
                                    <b-icon
                                        else
                                        icon="eye-slash-fill"
                                        aria-hidden="true"
                                    ></b-icon>
                                </b-button>
                            </b-input-group-append>
                        </b-input-group>
                    </b-form-group>

                    <b-form-group id="input-group-3" label="비밀번호 재확인:" label-for="input-3">
                        <b-input-group v-if="showRepassword">
                            <b-form-input
                                id="input-3"
                                type="text"
                                v-model="form.repassword"
                                placeholder="비밀번호 재확인을 입력해 주세요."
                                required
                                autocomplete="off"
                                @blur="checkRepw"
                            ></b-form-input>
                            <b-input-group-append>
                                <b-button variant="outline-secondary" class="custom-button" @click="retoggleShow">
                                    <b-icon
                                        icon="eye-fill"
                                        aria-hidden="true"
                                    ></b-icon>
                                </b-button>
                            </b-input-group-append>
                        </b-input-group>
                        <b-input-group v-else>
                            <b-form-input
                                id="input-3"
                                type="password"
                                v-model="form.repassword"
                                placeholder="비밀번호 재확인을 입력해 주세요."
                                required
                                autocomplete="off"
                                @blur="checkRepw"
                            ></b-form-input>
                            <b-input-group-append>
                                <b-button variant="outline-secondary" class="custom-button" @click="retoggleShow">
                                    <b-icon
                                        else
                                        icon="eye-slash-fill"
                                        aria-hidden="true"
                                    ></b-icon>
                                </b-button>
                            </b-input-group-append>
                        </b-input-group>
                    </b-form-group>
                    <div v-show="checkedRepw" class="msg">
                        <div v-if="!isValidRepw" class="danger">비밀번호가 일치하지 않습니다.</div>
                    </div>

                    <b-form-group id="input-group-4" label="이름:" label-for="input-4">
                        <div class="d-flex">
                            <b-form-input
                                id="input-4"
                                v-model="form.name"
                                placeholder="이름을 입력해 주세요."
                                required
                                autocomplete="off"
                            ></b-form-input>
                            <b-button variant="outline-secondary" class="check-button" @click="duplicateName">중복 검사</b-button>
                        </div>
                    </b-form-group>
                    <div v-show="checkedName" class="msg">
                        <div v-if="isValidName" class="primary">사용 가능한 아이디입니다.</div>
                        <div v-else class="danger">{{errMsgForName}}</div>
                    </div>
                    
                    <div class="d-flex justify-content-center">
                        <b-button class="submit-button" type="submit" variant="outline-primary" @click="submit">가입하기</b-button>
                        <b-button class="reset-button" type="reset" variant="outline-danger">다시 입력</b-button>
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
            form: {
                id: '',
                password: '',
                repassword: '',
                role: '',
                name: '',
            },
            show: true,
            showPassword: false,
            showRepassword: false,

            checkedId: false,
            checkedRepw:false,
            checkedName: false,

            isValidId:false,
            isValidPw:false,
            isValidRepw:false,
            isValidName:false,

            errMsgForId:'',
            errMsgForName:'',
        }
    },
    created() {
        this.form.role = this.$route.params.role;
    },
    methods: {
        onSubmit(event) {
            event.preventDefault()
        },
        onReset(event) {
            event.preventDefault()
            // Reset our form values
            this.form.id = ''
            this.form.password = ''
            this.form.repassword = ''
            this.form.name = ''
            // Trick to reset/clear native browser form validation state
            this.show = false
            this.$nextTick(() => {
                this.show = true
            })
        },
    toggleShow() {
        this.showPassword = !this.showPassword;
    },
    retoggleShow() {
        this.showRepassword = !this.showRepassword;
    },
    duplicateID() {
        this.checkedId=true;

        if(this.form.id.length > 0) {
            http.post("/api/user/id/check", {
                id:this.form.id
            },{
                withCredentials: true
            })
            .then(response => {
                if(response.data.result == "available") {
                    this.isValidId=true;
                }
                else {
                    this.isValidId=false;
                    this.errMsgForId='이미 사용 중인 아이디입니다.';
                }
            })
        }
        else {
            this.errMsgForId='아이디를 입력 하세요.';
        }
    },
    duplicateName() {
        this.checkedName=true;

        if(this.form.name.length > 0) {
            http.post("/api/user/name/check", {
                name:this.form.name
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
    checkPw() {
        if(this.form.password.length > 0) this.isValidPw=true;
    },
    checkRepw() {
        this.checkedRepw=true;
        if(this.form.password == this.form.repassword) this.isValidRepw=true;
        else this.isValidRepw=false;
    },
    submit() {
        if(!this.isValidId) {
            alert("아이디 중복 검사를 해주세요.");
        }
        else if(!this.isValidPw) {
            alert("비밀번호를 입력해 주세요.");
        }
        else if(!this.isValidRepw) {
            alert("비밀번호 재확인을 입력해 주세요.");
        }
        else if(!this.isValidName) {
            alert("이름 중복 검사를 해주세요.");
        }
        else {
            http.post("/api/user/join", {
                id:this.form.id,
                pw:this.form.password,
                name:this.form.name,
                role:this.form.role
            })
            .then(response => {
                if(response.data.result == "join success!") {
                    alert("회원가입이 완료되었습니다.");
                    this.$router.push("/login");
                }
                else {
                    alert("회원가입 실패");
                }
            })
            .catch(exp => alert(exp + ": 회원가입 실패"));
        }
    }
    }
}
</script>

<style scoped>
.custom-input, .custom-button {
  height: 38px; /* 원하는 높이로 조정 */
  line-height: 1.5;
}
.card{
    height: 550px;
    width: 70%;
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