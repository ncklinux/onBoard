<template>
  <b-container fluid>
    <b-row class="mt-3">
      <b-col>
        <canvas></canvas>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import { Vue, Component, Provide } from "nuxt-property-decorator";
import { BannerScene } from "@/classes/babylonjs/BannerScene";

@Component
export default class extends Vue {
  public mounted() {
    const canvas = document.querySelector("canvas")!;
    new BannerScene(canvas);
  }
}
</script>

<style lang="scss" scoped>
canvas {
  width: 100%;
  height: 20rem;
}
</style>
