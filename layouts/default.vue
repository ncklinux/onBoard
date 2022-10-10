<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component
export default class extends Vue {
  public beforeCreate() {
    this.$store.dispatch("getTexts");
  }
}
</script>

<style lang="scss" scoped>
/* local styles */
</style>
