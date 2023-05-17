<template>
    <div class="d-flex flex-column min-vh-100">
        <header-component></header-component>
        <join-component class="my-auto"></join-component>
        <footer-component class="mt-auto"></footer-component>
    </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'
import JoinComponent from '../components/JoinComponent.vue'

export default {
    name: 'LoginView',
    components :{
        HeaderComponent,
        FooterComponent,
        JoinComponent
    }
}
</script>

<style>

</style>