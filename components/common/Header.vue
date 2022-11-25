<template>
  <b-container fluid>
    <b-row class="mt-3">
      <b-col>
        <div class="header p-3">
          <h6>{{ title[$i18n.locale] }}</h6>
          <p class="m-0">{{ text[$i18n.locale] }}</p>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";

@Component
export default class extends Vue {
  @Prop({ type: Object, required: true }) readonly title!: Record<
    string,
    Languages
  >;
  @Prop({ type: Object, required: true }) readonly text!: Record<
    string,
    Languages
  >;
}
</script>

<style lang="scss" scoped>
.header {
  background-color: #dc3545;
  color: white;
  font-size: 0.75rem;
}
</style>
