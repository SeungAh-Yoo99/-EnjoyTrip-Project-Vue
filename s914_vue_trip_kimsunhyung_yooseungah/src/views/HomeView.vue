<template>
    <div class="d-flex flex-column min-vh-100">
        <header-component></header-component>
        <home-component class="my-auto"></home-component>
        <footer-component class="mt-auto"></footer-component>
    </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'
import HomeComponent from '../components/HomeComponent.vue'
export default {
    name: 'TestView',
    components :{
        HeaderComponent,
        FooterComponent,
        HomeComponent,
    }
}
</script>

<style>

</style>