<template>
  <div class="crews-list">
    <p class="crews-list-header">Crews</p>
    <crew-item class="crew-items" v-for="(crew, i) in getCrews" :key="i" :crew="crew" />
  </div>
</template>

<script>
import CrewItem from "@/components/CrewItem";

export default {
  name: "CrewsList",
  components: {
    CrewItem
  },
  computed: {
    getCrews() {
      return this.$store.getters.getCrews;
    }
  }
};
</script>

<style lang="scss">
.crews-list-header {
  text-align: center;
  font-weight: bold;
  margin-bottom: 42px;
}
.crew-items {
  line-height: 1.6;
  display: inline-block;
  margin: 0 24px;
}
</style>
