<template>
    <div>
        <div class="centered-card">
            <div class="card px-5 py-5">
                <b-form>
                    <b-form-group id="input-group-1" label="새 비밀번호:" label-for="input-1">
                        <b-input-group v-if="showPassword">
                            <b-form-input
                                id="input-1"
                                type="text"
                                v-model="password"
                                placeholder="새 비밀번호를 입력해 주세요."
                                required
                                autocomplete="off"
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
                                id="input-1"
                                class="custom-input"
                                type="password"
                                v-model="password"
                                placeholder="새 비밀번호를 입력해 주세요."
                                required
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

                    <b-form-group id="input-group-2" label="비밀번호 재확인:" label-for="input-2">
                        <b-input-group v-if="showRepassword">
                            <b-form-input
                                id="input-2"
                                type="text"
                                v-model="repassword"
                                placeholder="비밀번호 재확인을 입력해 주세요."
                                required
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
                                id="input-2"
                                type="password"
                                v-model="repassword"
                                placeholder="비밀번호 재확인을 입력해 주세요."
                                required
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

                    <div class="d-flex justify-content-center">
                        <b-button class="submit-button" type="submit" @click="submit">새 비밀번호 찾기</b-button>
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
            password:'',
            repassword:'',

            showPassword: false,
            showRepassword: false,
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
    },
    toggleShow() {
        this.showPassword = !this.showPassword;
    },
    retoggleShow() {
        this.showRepassword = !this.showRepassword;
    },
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