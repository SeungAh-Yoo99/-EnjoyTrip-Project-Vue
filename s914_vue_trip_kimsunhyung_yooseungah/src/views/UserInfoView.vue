<template>
  <div class="d-flex flex-column min-vh-100">
    <header-component></header-component>
    <userinfo-component class="my-auto"></userinfo-component>
    <footer-component class="mt-auto"></footer-component>
  </div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import UserinfoComponent from "../components/UserinfoComponent.vue";

export default {
  name: "JoinView",
  components: {
    HeaderComponent,
    FooterComponent,
    UserinfoComponent,
  },
};
</script>

<style>
</style>