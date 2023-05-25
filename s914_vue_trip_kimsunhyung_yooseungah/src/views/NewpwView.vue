<template>
  <div class="d-flex flex-column min-vh-100">
    <header-component></header-component>
    <newpw-component class="my-auto"></newpw-component>
    <footer-component class="mt-auto"></footer-component>
  </div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import NewpwComponent from "../components/NewpwComponent.vue";

export default {
  name: "JoinView",
  components: {
    HeaderComponent,
    FooterComponent,
    NewpwComponent,
  },
};
</script>

<style>
</style>