<template>
  <div class="hero">
    <div class="showcase">
      <img src="@/assets/shoe.png" alt="Shoe" class="hero-image" />
    </div>
    <div class="showcase-desc">
      <h1>
        New <span>Winter</span> <br />
        Arrivals
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis hic
        doloremque dicta, natus debitis in illum mollitia iste optio voluptatum!
      </p>

      <router-link to="/buy" class="btn-yellow">Buy</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
};
</script>