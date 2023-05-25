<template>
    <div class="d-flex flex-column min-vh-100">
        <header-component></header-component>
        <home-component class="my-auto"></home-component>
        <div class="pad"></div>
        <hot-attraction-list></hot-attraction-list>
        <div class="pad"></div>
        <footer-component class="mt-auto"></footer-component>
    </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'
import HomeComponent from '../components/HomeComponent.vue'
import HotAttractionList from '@/components/HotAttractionList.vue'
export default {
    name: 'TestView',
    components :{
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        HotAttractionList,
    }
}
</script>

<style>

</style>