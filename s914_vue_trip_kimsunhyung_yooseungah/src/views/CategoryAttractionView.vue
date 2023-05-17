<template>
    <div class="d-flex flex-column min-vh-100">
        <header-component-vue></header-component-vue>
        <category-attraction-component-vue></category-attraction-component-vue>
        <hot-attraction-list-vue></hot-attraction-list-vue>
        <footer-component-vue class="mt-auto"></footer-component-vue>
    </div>
</template>

<script>
import HeaderComponentVue from '../components/HeaderComponent.vue'
import FooterComponentVue from '../components/FooterComponent.vue'
import CategoryAttractionComponentVue from '../components/CategoryAttractionComponent.vue'
import HotAttractionListVue from '../components/HotAttractionList.vue'
export default {
    name:'CategoryAttractionView',
    components:{
        HeaderComponentVue,
        FooterComponentVue,
        CategoryAttractionComponentVue,
        HotAttractionListVue
    }
}
</script>

<style>

</style>