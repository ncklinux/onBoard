<template>
  <b-container fluid>
    <b-row class="mt-2">
      <b-col
        sm="2"
        md="2"
        lg="2"
        xl="2"
        class="mb-3 pr-xs-0 pr-sm-0 pr-md-0 pr-lg-0 pr-xl-0"
      >
        <b-container fluid class="controls">
          <b-row>
            <b-col class="pt-3">
              <b-row>
                <b-col>
                  <p v-if="$store.state.texts.various" class="mb-1">
                    {{ $store.state.texts.various.currency[$i18n.locale] }}
                  </p>
                  <p class="description" v-if="$store.state.texts.various">
                    {{ $store.state.texts.selectedCurrency }}
                  </p>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <p v-if="$store.state.texts.various" class="mb-1">
                    {{ $store.state.texts.various.price[$i18n.locale] }}
                  </p>
                </b-col>
              </b-row>
              <b-row>
                <b-col class="p-0 pl-3">
                  <b-form-input
                    id="input-small"
                    size="sm"
                    placeholder="Min"
                    type="number"
                    min="0"
                    max="3333"
                  ></b-form-input>
                </b-col>
                <b-col cols="1">
                  <p>-</p>
                </b-col>
                <b-col class="p-0 pr-3">
                  <b-form-input
                    id="input-small"
                    size="sm"
                    placeholder="Max"
                    type="number"
                    min="0"
                    max="3333"
                  ></b-form-input>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <p v-if="$store.state.texts.various" class="mt-4 mb-1">
                    {{ $store.state.texts.various.shoppingCart[$i18n.locale] }}
                  </p>
                  <b-badge v-if="$store.state.texts.various" variant="danger">{{
                    $store.state.texts.various.emptyCart[$i18n.locale]
                  }}</b-badge>
                </b-col>
              </b-row>
            </b-col>
          </b-row></b-container
        >
      </b-col>
      <b-col sm="10" md="10" lg="10" xl="10">
        <b-row>
          <b-col class="filters mb-3 p-3 text-right">
            <b-dropdown
              right
              v-if="$store.state.texts.various"
              :text="$store.state.texts.various.sortProductsTitle[$i18n.locale]"
              variant="danger"
              size="sm"
              class="sortDropdown m-2"
            >
              <b-dropdown-item
                v-for="(item, i) in $store.state.texts.sortBy"
                :key="i"
                :disabled="item.disabled"
                @click="sortBy(item.sort)"
                >{{ item.text[$i18n.locale] }}</b-dropdown-item
              >
            </b-dropdown>
          </b-col>
        </b-row>
        <b-row class="rowCustomPadding">
          <b-col
            sm="12"
            md="6"
            lg="3"
            xl="3"
            v-for="(item, index) in $store.state.products.items"
            :key="index"
            class="pr-1 pb-3"
          >
            <b-card
              :img-src="`http://localhost:3000/img/products/${item.image}`"
              img-top
              class="mb-2 productCard"
              body-class="d-flex flex-column"
            >
              <b-badge
                pill
                variant="danger"
                class="discountRate"
                v-if="item.discountRate"
                >-{{ item.discountRate }}%</b-badge
              >
              <b-badge
                pill
                variant="success"
                class="new"
                :style="item.discountRate ? '' : 'top: 1.25rem;'"
                v-if="item.isNew"
                >{{ $store.state.texts.various.new[$i18n.locale] }}</b-badge
              >
              <b-card-text class="title">
                {{ item.title[$i18n.locale] }}
              </b-card-text>
              <Rating :grade="item.starRate" :hasCounter="true" />
              <b-card-text class="description">
                {{ item.description[$i18n.locale] }}
              </b-card-text>
              <b-card-text class="price mt-auto">
                <b-row class="no-gutters">
                  <b-col cols="auto">
                    <template v-if="item.discountRate">
                      <del class="del">{{ item.price }}</del
                      ><br />
                      {{ discountCalculation(item.price, item.discountRate) }}
                    </template>
                    <template v-else>
                      {{ item.price }}
                    </template>
                  </b-col>
                  <b-col>
                    <br v-if="item.discountRate" />
                    <span class="material-icons pt-1 pl-1">{{
                      $store.state.texts.selectedCurrency === "EUR"
                        ? "euro"
                        : "attach_money"
                    }}</span>
                  </b-col>
                  <b-col class="text-right">
                    <b-button
                      variant="danger"
                      size="sm"
                      class="addToCart shadow-none"
                      ><span class="material-icons pl-1 pt-2 pr-1 pb-2"
                        >add_shopping_cart</span
                      ></b-button
                    >
                  </b-col>
                </b-row>
              </b-card-text>
            </b-card>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component
export default class extends Vue {
  public discountCalculation(price: number, rate: number) {
    if (rate) {
      rate = rate / 100;
      // prettier-ignore
      return (price - (price * rate)).toFixed(2);
    } else {
      return price;
    }
  }

  public sortBy(sort: string) {
    console.log("SORT BY: ", sort);
  }
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

.controls {
  background-color: white;
  font-size: 0.875rem;
  font-weight: 600;
  min-height: 100%;
}

.discountRate {
  position: absolute;
  top: 1.25rem;
  left: 1.25rem;
}

.new {
  position: absolute;
  top: 2.7rem;
  left: 1.25rem;
}

.price {
  font-size: 0.875rem;
  font-weight: 600;
  color: #333333;
}

.material-icons {
  font-size: 0.875rem;
}

.addToCart {
  border-radius: 50%;
}

del {
  color: #999999;
}

.filters {
  background-color: white;
  margin-left: 0.938rem;
  margin-right: 1rem;
  font-size: 0.875rem;
}

::v-deep .btn-sm,
.btn-group-sm > .btn,
.dropdown-menu > * {
  font-size: 0.875rem;
}
</style>
