<template>
  <div class="d-flex flex-column min-vh-100">
    <header-component></header-component>
    <searchpw-component class="my-auto"></searchpw-component>
    <footer-component class="mt-auto"></footer-component>
  </div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import SearchpwComponent from "../components/SearchpwComponent.vue";

export default {
  name: "JoinView",
  components: {
    HeaderComponent,
    FooterComponent,
    SearchpwComponent,
  },
};
</script>

<style>
</style>