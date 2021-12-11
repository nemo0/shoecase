<template>
  <div class="payment-form">
    <div class="payment-details">
      <Form />
      <Payment />
    </div>
    <Amount />
  </div>
</template>

<script>
import Form from "@/components/layouts/Form.vue";
import Payment from "@/components/layouts/Payment.vue";
import Amount from "@/components/layouts/Amount.vue";

export default {
  name: "PaymentForm",
  components: {
    Form,
    Payment,
    Amount,
  },
};
</script>