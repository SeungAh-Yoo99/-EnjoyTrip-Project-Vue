<template>
    <div class="d-flex flex-column min-vh-100">
        <header-component-vue></header-component-vue>
        <notice-modify-component-vue></notice-modify-component-vue>
        <footer-component-vue class="mt-auto"></footer-component-vue>
    </div>
</template>

<script>
import HeaderComponentVue from '@/components/HeaderComponent.vue'
import FooterComponentVue from '@/components/FooterComponent.vue'
import NoticeModifyComponentVue from '@/components/NoticeModifyComponent.vue'
export default {
    name:'NoticeModifyView',
    components:{
        HeaderComponentVue,
        FooterComponentVue,
        NoticeModifyComponentVue
    }
}
</script>

<style>

</style>