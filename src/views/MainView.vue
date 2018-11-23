<template>
  <div id="main-view">
    <img class="logo" :src="getLogo" alt="">
    <p class="welcome" ref="welcome">Welcome to FLUT!</p>
  </div>
</template>

<script>
export default {
  name: "MainView",
  computed: {
    getLogo() {
      return require("./../assets/image/logo.png");
    }
  },
  mounted() {
    setTimeout(() => {
      this.$refs.welcome.style.transform = "translateY(24px)";
    }, 150);
  }
};
</script>

<style lang="scss">
.welcome {
  margin-top: 50px;
  text-align: center;
  transition: transform 0.6s ease-out;
}

.logo {
  width: 50%;
  height: 50%;
  transform: translate(50%);
}
</style>
