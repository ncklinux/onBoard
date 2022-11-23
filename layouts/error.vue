<template>
  <b-container fluid>
    <b-row class="mt-4 page">
      <b-col>
        <h6 class="errorCode" v-if="error.statusCode === 404">
          404 Page not found
        </h6>
        <h6 v-else>An error occurred</h6>
        <b-button class="shadow-none" size="sm" href="/">Home page</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";

@Component
export default class extends Vue {
  @Prop({ type: Object, required: true }) readonly error!: object;
}
</script>

<style lang="scss" scoped>
.errorCode {
  font-weight: bold;
}

.page {
  margin-top: 10rem !important;
  margin-bottom: 10rem;
}
</style>
