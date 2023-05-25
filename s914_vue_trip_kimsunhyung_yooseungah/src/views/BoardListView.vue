<template>
    <div class="d-flex flex-column min-vh-100">
        <header-component-vue></header-component-vue>
        <board-list-component-vue></board-list-component-vue>
        <footer-component-vue class="mt-auto"></footer-component-vue>
    </div>
</template>

<script>
import HeaderComponentVue from '@/components/HeaderComponent.vue'
import FooterComponentVue from '@/components/FooterComponent.vue'
import BoardListComponentVue from '@/components/BoardListComponent.vue'
export default {
    name:'BoardListView',
    components:{
        HeaderComponentVue,
        FooterComponentVue,
        BoardListComponentVue
    }
}
</script>

<style>

</style>