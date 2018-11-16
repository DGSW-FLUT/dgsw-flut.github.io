<template>
  <div id="navbar">
    <ul class="navbar-list">
      <div class="navbar-list--it" v-for="(nav, i) in navs" :key="i">
        <li><router-link :to="nav.to">{{ nav.text }}</router-link></li>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      navs: [
        {
          to: "/",
          text: "Home"
        },
        {
          to: "/",
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

#navbar {
  position: fixed;
  bottom: 46px;
  left: 50%;
  transform: translateX(-50%);
}

.navbar-list {
  list-style-type: none;
  margin: 2px 0;
  li {
    display: inline;
    margin: 0 24px;
  }
  a {
    display: inline;
    padding: 2px;
    &:link {
      text-decoration: underline;
    }
    &:hover {
      background-color: $black;
      color: $white;
      text-decoration: none;
    }
  }
}

.navbar-list--it {
  display: inline-block;
}
</style>
