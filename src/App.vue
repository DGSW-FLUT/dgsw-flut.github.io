<template>
  <div id="app">
    <navbar-item :navs="navs" />
    <transition name="router-switch" mode="out-in">
      <router-view class="area-view" />
    </transition>
    <footer-item />
  </div>
</template>

<script>
import NavbarItem from "@/components/NavbarItem";
import FooterItem from "@/components/FooterItem";

export default {
  name: "App",
  components: {
    NavbarItem,
    FooterItem
  },
  data() {
    return {
      navs: [
        {
          to: "/",
          text: "Home"
        },
        {
          to: "/about",
          text: "About"
        },
        {
          to: "/",
          text: "Projects"
        },
        {
          to: "/",
          text: "Contact"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
@import url(https://spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css);

* {
  font-family: "Spoqa Han Sans", sans-serif;
}

a,
p,
div {
  color: $black;
}

.area-view {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.router-switch-enter-active,
.router-switch-leave-active {
  transition-duration: 0.6s;
  transition-property: opacity;
  transition-timing-function: ease-in-out;
}

.router-switch-enter,
.router-switch-leave-active {
  opacity: 0;
}
</style>
