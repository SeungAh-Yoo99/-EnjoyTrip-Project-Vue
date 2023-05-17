<template>
    <div>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group id="input-group-1" label="아이디:" label-for="input-1">
            <b-form-input
                id="input-1"
                v-model="form.id"
                placeholder="아이디를 입력해 주세요."
                required
            ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="비밀번호:" label-for="input-2">
            <b-form-input
                id="input-2"
                v-model="form.password"
                placeholder="비밀번호를 입력해 주세요."
                required
            ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="비밀번호 재입력:" label-for="input-3">
            <b-form-input
                id="input-3"
                v-model="form.repassword"
                placeholder="비밀번호를 재입력해 주세요."
                required
            ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-4" label="이름:" label-for="input-4">
            <b-form-input
                id="input-4"
                v-model="form.repassword"
                placeholder="이름을 입력해 주세요."
                required
            ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-5" label="Food:" label-for="input-3">
            <b-form-select
                id="input-3"
                v-model="form.food"
                :options="foods"
                required
            ></b-form-select>
        </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
        <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ form }}</pre>
        </b-card>
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

        }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>