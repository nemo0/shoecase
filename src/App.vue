<template>
  <div>
    <Header />
    <Hero />
    <ProductCase />
  </div>
</template>

<script>
import Header from "@/components/layout/Header.vue";
import Hero from "@/components/sections/Hero.vue";
import ProductCase from "@/components/sections/ProductCase.vue";
export default {
  name: "App",
  components: {
    Header,
    Hero,
    ProductCase,
  },
};
</script>

<style>
</style>
