<template>
    <div class="d-flex flex-column min-vh-100">
        <header-component-vue></header-component-vue>
        <attraction-detail-component-vue></attraction-detail-component-vue>
        <footer-component-vue class="mt-auto"></footer-component-vue>
    </div>
</template>

<script>
import HeaderComponentVue from '../components/HeaderComponent.vue'
import FooterComponentVue from '../components/FooterComponent.vue'
import AttractionDetailComponentVue from '../components/AttractionDetailComponent.vue'
export default {
    name:'AttractionDetailView',
    components:{
        HeaderComponentVue,
        FooterComponentVue,
        AttractionDetailComponentVue
    }
}
</script>

<style>

</style>