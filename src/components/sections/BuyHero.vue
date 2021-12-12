<template>
  <div>
    <div class="buy-hero">
      <Header />
      <div class="buy-hero-part">
        <div class="buy-showcase">
          <img src="@/assets/shoe.png" alt="shoe" class="buy-hero-image" />
        </div>
        <div class="buy-hero-text">
          <h1>
            Buy <span>Women Shoe</span> <br />
            Now
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos illo
            nesciunt mollitia vel omnis beatae rerum blanditiis nihil, itaque
            vitae delectus facilis dolores incidunt eaque saepe eos maiores.
            Ipsa vero nostrum laudantium illum quo impedit est quis! Natus, amet
            cum.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/layouts/Header.vue";

export default {
  name: "BuyHero",
  components: {
    Header,
  },
};
</script>
