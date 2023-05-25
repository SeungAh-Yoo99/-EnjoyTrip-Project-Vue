<template>
    <div class="d-flex flex-column min-vh-100">
        <header-component-vue></header-component-vue>
        <board-detail-component-vue></board-detail-component-vue>
        <footer-component-vue class="mt-auto"></footer-component-vue>
    </div>
  
</template>

<script>
import HeaderComponentVue from '@/components/HeaderComponent.vue'
import FooterComponentVue from '@/components/FooterComponent.vue'
import BoardDetailComponentVue from '@/components/BoardDetailComponent.vue'
export default {
    name:'BoardDetailView',
    components:{
        HeaderComponentVue,
        FooterComponentVue,
        BoardDetailComponentVue,
    }
}
</script>

<style>

</style>