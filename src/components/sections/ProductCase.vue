<template>
  <div class="product-case">
    <Product
      :product="products[0].name"
      :image="products[0].image"
      :style="products[0].style"
    />
    <Product
      :product="products[1].name"
      :image="products[1].image"
      :style="products[1].style"
    />
    <Product
      :product="products[2].name"
      :image="products[2].image"
      :style="products[2].style"
    />
  </div>
</template>

<script>
import Product from "@/components/layouts/Product.vue";

export default {
  name: "ProductCase",
  components: {
    Product,
  },
  data() {
    return {
      products: [
        {
          id: 0,
          name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim euismod urna ut luctus.",
          image: "1-shoe.png",
          style:
            "background: rgb(203,0,52); background: linear-gradient(135deg, rgba(203,0,52,1) 0%, rgba(255,37,55,1) 100%); ",
        },
        {
          id: 1,
          name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim euismod urna ut luctus.",
          image: "2-shoe.png",
          style:
            "background: rgb(118,87,53); background: linear-gradient(135deg, rgba(118,87,53,1) 0%, rgba(208,156,128,1) 100%);",
        },
        {
          id: 2,
          name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim euismod urna ut luctus.",
          image: "3-shoe.png",
          style:
            "background: rgb(51,65,127); background: linear-gradient(135deg, rgba(51,65,127,1) 0%, rgba(34,39,61,1) 100%);",
        },
      ],
    };
  },
};
</script>

<style scoped>
.red_border {
  border: 1px solid red;
}
</style>