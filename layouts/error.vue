<template>
  <b-container fluid>
    <b-row class="mt-4 page">
      <b-col>
        <h6 class="errorCode" v-if="error.statusCode === 404">
          404
          <span v-if="$store.state.texts.various">{{
            $store.state.texts.various.errorNotFound[$i18n.locale]
          }}</span>
        </h6>
        <h6 v-else>An error occurred</h6>
        <b-button
          class="shadow-none"
          size="sm"
          :to="localePath('/')"
          v-if="$store.state.texts.menu"
          >{{ $store.state.texts.menu[0].text[$i18n.locale] }}</b-button
        >
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
