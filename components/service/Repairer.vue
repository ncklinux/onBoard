<template>
  <div>
    <b-container fluid class="m-0 parentBox">
      <b-row class="mb-3 p-0">
        <b-col class="subBox mr-3 p-0">
          <b-img
            src="http://localhost:3000/img/service/repairer/01.jpg"
            fluid
            class="mb-3"
          ></b-img>
          <div class="title pr-3 pl-3 pb-1">
            {{ $store.state.texts.various.repairerSubBoxTitle01[$i18n.locale] }}
          </div>
          <div class="text pr-3 pl-3 pb-3">
            {{ $store.state.texts.various.repairerSubBoxText01[$i18n.locale] }}
          </div>
        </b-col>
        <b-col class="subBox p-0">
          <b-img
            src="http://localhost:3000/img/service/repairer/02.jpg"
            fluid
            class="mb-3"
          ></b-img>
          <div class="title pr-3 pl-3 pb-1">
            {{ $store.state.texts.various.repairerSubBoxTitle02[$i18n.locale] }}
          </div>
          <div class="text pr-3 pl-3 pb-3">
            {{ $store.state.texts.various.repairerSubBoxText02[$i18n.locale] }}
          </div>
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

.parentBox {
  margin-left: 1px;
  margin-right: 1px;
}

.subBox {
  background-color: white;
}
</style>
