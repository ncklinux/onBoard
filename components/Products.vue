<template>
  <b-container fluid>
    <b-row class="mt-2">
      <b-col sm="2" md="2" lg="2" xl="2"></b-col>
      <b-col sm="10" md="10" lg="10" xl="10">
        <b-row class="rowCustomPadding">
          <b-col
            sm="12" md="6" lg="3" xl="3"
            v-for="(item, index) in $store.state.products.surfboards"
            :key="index"
            class="pr-1 pb-3"
          >
            <b-card
              :img-src="`http://localhost:3000/img/products/${item.image}`"
              img-top
              class="mb-2 productCard"
            >
              <b-card-text class="title">
                {{ item.title }}
              </b-card-text>
              <b-card-text class="description">
                {{ item.description }}
              </b-card-text>
            </b-card>
          </b-col>
        </b-row>
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
.title {
  font-size: 0.875rem;
  font-weight: 600;
  color: #333333;
  min-height: 2.5rem;
}

.description {
  font-size: 0.75rem;
  font-weight: 400;
  color: #333333;
  min-height: 2.5rem;
}

.productCard {
  background-color: white;
  border-style: solid;
  border-color: white;
  border-radius: 0px;
  -webkit-border-radius: 0px;
  -webkit-appearance: none;
  border: none;
  min-height: 100%;
}

.rowCustomPadding {
    padding-right: 12px;
}
</style>
