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

                    <b-form-group id="input-group-2" label="비밀번호:" label-for="input-2">
                        <b-input-group v-if="showPassword">
                            <b-form-input
                                id="input-2"
                                type="text"
                                v-model="form.password"
                                placeholder="비밀번호를 입력해 주세요."
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
                                id="input-2"
                                class="custom-input"
                                type="password"
                                v-model="form.password"
                                placeholder="비밀번호를 입력해 주세요."
                                required
                                autocomplete="off"
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

                    <b-form-group id="input-group-3" label="비밀번호 재입력:" label-for="input-3">
                        <b-input-group v-if="showRepassword">
                            <b-form-input
                                id="input-3"
                                type="text"
                                v-model="form.repassword"
                                placeholder="비밀번호를 재입력해 주세요."
                                required
                                autocomplete="off"
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
                                placeholder="비밀번호를 재입력해 주세요."
                                required
                                autocomplete="off"
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
                    
                    <div class="d-flex justify-content-center">
                        <b-button class="submit-button" type="submit" variant="outline-primary">가입하기</b-button>
                        <b-button class="reset-button" type="reset" variant="outline-danger">다시 입력</b-button>
                    </div>
                </b-form>
            </div>
        </div>
    </div>
</template>

<script>
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
            showRepassword: false
        }
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

      },
      duplicateName() {

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
    height: 500px;
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
</style>