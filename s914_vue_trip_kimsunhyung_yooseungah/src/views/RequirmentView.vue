<template>
  <div class="d-flex flex-column min-vh-100">
    <header-component></header-component>
    <requirment-component class="my-auto"></requirment-component>
    <footer-component class="mt-auto"></footer-component>
  </div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import RequirmentComponent from "../components/RequirmentComponent.vue";

export default {
  name: "RequirmentView",
  components: {
    HeaderComponent,
    FooterComponent,
    RequirmentComponent,
  },
};
</script>

<style>
</style>