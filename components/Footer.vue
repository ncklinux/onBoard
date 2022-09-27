<template>
  <b-container fluid>
    <b-row class="mt-3">
      <b-col>
        <h6>{{ $store.state.texts.customerServiceTitle }}</h6>
        <p class="infromationParagraph">
          {{ $store.state.texts.customerServiceDescription }}
        </p>
        <ul class="p-0 customerList">
          <li v-for="(item, i) in $store.state.texts.customerService" :key="i">
            <a :href="item.link" class="customerListLink">{{ item.text }}</a>
          </li>
        </ul>
      </b-col>
      <b-col>
        <h6>{{ $store.state.texts.informationTitle }}</h6>
        <p class="infromationParagraph">
          {{ $store.state.texts.informationDescription }}
        </p>
        <ul class="p-0 customerList">
          <li v-for="(item, i) in $store.state.texts.information" :key="i">
            <a :href="item.link" class="customerListLink">{{ item.text }}</a>
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
  color: green;
}
</style>
