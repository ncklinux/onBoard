<template>
  <div>
    <b-container fluid class="box m-0 p-3">
      <b-row class="mb-2">
        <b-col>
          <div class="text">
            {{ $store.state.texts.various.contactText[$i18n.locale] }}
          </div>
        </b-col>
      </b-row>
      <b-row class="mb-2">
        <b-col>
          <b-button variant="success" size="sm" href="tel:+10000000000"
            ><span class="material-icons pr-2">call</span
            >{{
              $store.state.texts.various.eshopTelephoneNumber[$i18n.locale]
            }}</b-button
          >
        </b-col>
      </b-row>
      <b-row class="mb-2">
        <b-col>
          <b-button
            variant="success"
            shadow-none
            size="sm"
            href="mailto:contact@e-shop.local"
            ><span class="material-icons pr-2">mail</span
            >{{ $store.state.texts.various.eshopEmail[$i18n.locale] }}</b-button
          >
        </b-col>
      </b-row>
      <b-row class="mb-2">
        <b-col>
          <b-button variant="danger" size="sm" href="skype:test?userinfo"
            ><span class="material-icons pr-2">headset_mic</span
            >{{ $store.state.texts.various.skypeChat[$i18n.locale] }}</b-button
          >
        </b-col>
      </b-row>
    </b-container>
    <b-container fluid class="box m-0 mt-3 p-3">
      <b-row>
        <b-col>
          <div class="title">
            {{ $store.state.texts.various.addressTitle[$i18n.locale] }}
          </div>
          <div
            class="text"
            v-html="$store.state.texts.various.addressText[$i18n.locale]"
          ></div>
        </b-col>
      </b-row>
      <b-row class="mt-2">
        <b-col>
          <div class="title">
            {{
              $store.state.texts.various.workingDatesAndHoursTitle[$i18n.locale]
            }}
          </div>
          <div class="text">
            {{ $store.state.texts.various.workingDatesAndHours[$i18n.locale] }}
          </div>
        </b-col>
      </b-row>
    </b-container>
    <b-container fluid class="box m-0 mt-3 p-3">
      <commonContactForm />
    </b-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component
export default class extends Vue {}
</script>

<style lang="scss" scoped>
@mixin commonText {
  @include formsFontSize;
  color: #333333;
}

.material-icons {
  font-size: 0.875rem;
}

.title {
  @include commonText;
  font-weight: 600;
}

.text {
  @include commonText;
  font-weight: 400;
}

.box {
  background-color: white;
  margin-left: 1px;
  margin-right: 1px;
}
</style>
