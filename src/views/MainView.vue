<template>
  <div id="main-view">
    <img :src="getLogo" alt="">
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
};
</script>

<style lang="scss">
.welcome {
  margin-top: 50px;
  text-align: center;
  display: none;
}
</style>
