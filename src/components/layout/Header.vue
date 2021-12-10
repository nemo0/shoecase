<template>
  <header>
    <div>
      <img src="@/assets/logoipsum.svg" alt="Logo Ipsum" />
    </div>
    <nav>
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/buy">Buy</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>
