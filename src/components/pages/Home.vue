<template>
  <div class="home">
    <Header />
    <Hero />
    <ProductCase />
  </div>
</template>

<script>
import Header from "@/components/layouts/Header.vue";
import Hero from "@/components/sections/Hero.vue";
import ProductCase from "@/components/sections/ProductCase.vue";
export default {
  name: "Home",
  components: {
    Header,
    Hero,
    ProductCase,
  },
};
</script>

<style>
</style>
