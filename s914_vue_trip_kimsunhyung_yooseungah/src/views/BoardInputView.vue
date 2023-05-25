<template>
    <div class="d-flex flex-column min-vh-100">
        <header-component-vue></header-component-vue>
        <board-input-component-vue></board-input-component-vue>
        <footer-component-vue class="mt-auto"></footer-component-vue>
    </div>
</template>

<script>
import HeaderComponentVue from '@/components/HeaderComponent.vue'
import FooterComponentVue from '@/components/FooterComponent.vue'
import BoardInputComponentVue from '@/components/BoardInputComponent.vue'
export default {
    name:'BoardInputView',
    components:{
        HeaderComponentVue,
        FooterComponentVue,
        BoardInputComponentVue
    }
}
</script>

<style>

</style>