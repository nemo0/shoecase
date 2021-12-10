<template>
  <div class="product">
    <div class="product-image">
      <img :src="require(`@/assets/${image}`)" alt="Product Image" />
    </div>
    <div class="product-desc">
      {{ product }}
      <a class="product-buy" href="#">Buy Now</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
  props: {
    product: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
};
</script>