<template>
    <div class="d-flex flex-column min-vh-100">
        <header-component></header-component>
        <login-component class="my-auto"></login-component>
        <footer-component class="mt-auto"></footer-component>
    </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'
import LoginComponent from '../components/LoginComponent.vue'

export default {
    name: 'LoginView',
    components :{
        HeaderComponent,
        FooterComponent,
        LoginComponent
    }
}
</script>

<style>

</style>