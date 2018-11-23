<template>
  <div class="crew-item">
    <p v-tooltip="crew.description">
      <span class="cardinal">{{crew.cardinal}}</span> {{crew.name}}
    </p>
  </div>
</template>

<script>
export default {
  name: "CrewItem",
  props: ["crew"]
};
</script>

<style lang="scss">
.crew-item {
  display: block;
  text-align: center;
  cursor: default;
  .cardinal {
    font-weight: bold;
  }
  .crew-tooltip {
    position: absolute;
    background: #444;
    opacity: 0.7;
    z-index: 10;
  }
}
</style>
