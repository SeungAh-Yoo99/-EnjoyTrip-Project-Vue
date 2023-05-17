<template>
    <div>
        <header-component-vue></header-component-vue>
        <category-attraction-component-vue></category-attraction-component-vue>
        <footer-component-vue></footer-component-vue>
    </div>
</template>

<script>
import HeaderComponentVue from '../components/HeaderComponent.vue'
import FooterComponentVue from '../components/FooterComponent.vue'
import CategoryAttractionComponentVue from '../components/CategoryAttractionComponent.vue'
export default {
    name:'CategoryAttractionView',
    components:{
        HeaderComponentVue,
        FooterComponentVue,
        CategoryAttractionComponentVue
    }
}
</script>

<style>

</style>