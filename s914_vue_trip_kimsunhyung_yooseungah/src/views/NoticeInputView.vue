<template>
    <div class="d-flex flex-column min-vh-100">
        <header-component-vue></header-component-vue>
        <notice-input-component-vue></notice-input-component-vue>
        <footer-component-vue class="mt-auto"></footer-component-vue>
    </div>
</template>

<script>
import HeaderComponentVue from '@/components/HeaderComponent.vue'
import FooterComponentVue from '@/components/FooterComponent.vue'
import NoticeInputComponentVue from '@/components/NoticeInputComponent.vue'
export default {
    name:'NoticeInputView',
    components:{
        HeaderComponentVue,
        NoticeInputComponentVue,
        FooterComponentVue
    }

}
</script>

<style>

</style>