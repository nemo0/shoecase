<template>
  <div>
    <Header />
    <Hero />
  </div>
</template>

<script>
import Header from "@/components/layout/Header.vue";
import Hero from "@/components/sections/Hero.vue";
export default {
  name: "App",
  components: {
    Header,
    Hero,
  },
};
</script>

<style>
</style>
