<template>
    <div class="d-flex flex-column min-vh-100">
        <header-component-vue></header-component-vue>
        <attraction-list-component-vue></attraction-list-component-vue>
        <footer-component-vue class="mt-auto"></footer-component-vue>
    </div>
</template>

<script>
import HeaderComponentVue from '../components/HeaderComponent.vue'
import FooterComponentVue from '../components/FooterComponent.vue'
import AttractionListComponentVue from '../components/AttractionListComponent.vue'
export default {
    name:'AttractionListView',
    components:{
        HeaderComponentVue,
        FooterComponentVue,
        AttractionListComponentVue
    }
}
</script>

<style>

</style>