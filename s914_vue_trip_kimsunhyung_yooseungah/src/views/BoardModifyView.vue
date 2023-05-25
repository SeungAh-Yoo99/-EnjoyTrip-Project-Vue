<template>
    <div class="d-flex flex-column min-vh-100">
        <header-component-vue></header-component-vue>
        <board-modify-component-vue></board-modify-component-vue>
        <footer-component-vue class="mt-auto"></footer-component-vue>
    </div>
</template>

<script>
import HeaderComponentVue from '@/components/HeaderComponent.vue'
import FooterComponentVue from '@/components/FooterComponent.vue'
import BoardModifyComponentVue from '@/components/BoardModifyComponent.vue'
export default {
    name:'BoardModifyView',
    components:{
        HeaderComponentVue,
        FooterComponentVue,
        BoardModifyComponentVue
    }
}
</script>

<style>

</style>