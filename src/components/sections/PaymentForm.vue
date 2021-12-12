<template>
  <div class="payment-form">
    <div class="payment-details">
      <Form />
    </div>
  </div>
</template>

<script>
import Form from "@/components/layouts/Form.vue";

export default {
  name: "PaymentForm",
  components: {
    Form,
  },
};
</script>