<template>
    <div>
        <header-component-vue></header-component-vue>
        <notice-list-component-vue></notice-list-component-vue>
        <footer-component-vue></footer-component-vue>
    </div>
</template>

<script>
import NoticeListComponentVue from '../components/NoticeListComponent.vue'
import HeaderComponentVue from '../components/HeaderComponent.vue'
import FooterComponentVue from '../components/FooterComponent.vue'
export default {
    name:'NoticeListView',
    components:{
        NoticeListComponentVue,
        HeaderComponentVue,
        FooterComponentVue
    }
}
</script>

<style>

</style>