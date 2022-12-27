<template>
  <b-container fluid>
    <b-row class="mt-3">
      <b-col>
        <h6 v-if="$store.state.texts.customerServiceTitle">
          {{ $store.state.texts.customerServiceTitle[$i18n.locale] }}
        </h6>
        <p
          class="infromationParagraph"
          v-if="$store.state.texts.customerServiceDescription"
        >
          {{ $store.state.texts.customerServiceDescription[$i18n.locale] }}
        </p>
        <ul class="p-0 customerList">
          <li v-for="(item, i) in $store.state.texts.customerService" :key="i">
            <nuxt-link :to="localePath(item.link)" class="customerListLink">{{
              item.text[$i18n.locale]
            }}</nuxt-link>
          </li>
        </ul>
      </b-col>
      <b-col>
        <h6 v-if="$store.state.texts.informationTitle">
          {{ $store.state.texts.informationTitle[$i18n.locale] }}
        </h6>
        <p
          class="infromationParagraph"
          v-if="$store.state.texts.informationDescription"
        >
          {{ $store.state.texts.informationDescription[$i18n.locale] }}
        </p>
        <ul class="p-0 customerList">
          <li v-for="(item, i) in $store.state.texts.information" :key="i">
            <nuxt-link :to="localePath(item.link)" class="customerListLink">{{
              item.text[$i18n.locale]
            }}</nuxt-link>
          </li>
        </ul>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import { Vue, Component, Provide } from "nuxt-property-decorator";

@Component
export default class extends Vue {
  public mounted() {}
}
</script>

<style lang="scss" scoped>
.customerList {
  list-style: none;
  font-size: 0.75rem;
}

.infromationParagraph {
  font-size: 0.625rem;
}

.customerListLink {
  @include link;
}

.customerListLink:hover {
  color: #dc3545;
}
</style>
