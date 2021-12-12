<template>
  <div class="buy-container">
    <div class="buy">
      <BuyHero />
    </div>
    <div class="full">
      <PaymentForm />
    </div>
  </div>
</template>

<script>
import BuyHero from "@/components/sections/BuyHero.vue";
import PaymentForm from "@/components/sections/PaymentForm.vue";

export default {
  name: "Buy",
  components: {
    BuyHero,
    PaymentForm,
  },
};
</script>