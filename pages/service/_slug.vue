<template>
  <b-container fluid>
    <b-row class="mt-0 mb-4">
      <b-col v-if="$store.state.texts.various">
        <template v-if="$route.params.slug === 'contact'">
          <b-container fluid class="m-0 p-0">
            <b-row class="mb-3">
              <b-col class="m-0 p-0">
                <commonHeader
                  v-if="$store.state.texts.various"
                  :title="$store.state.texts.various.contact"
                  :text="$store.state.texts.various.contactHeaderText"
                />
              </b-col>
            </b-row>
          </b-container>

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
                    $store.state.texts.various.eshopTelephoneNumber[
                      $i18n.locale
                    ]
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
                  >{{
                    $store.state.texts.various.eshopEmail[$i18n.locale]
                  }}</b-button
                >
              </b-col>
            </b-row>
            <b-row class="mb-2">
              <b-col>
                <b-button variant="danger" size="sm" href="skype:test?userinfo"
                  ><span class="material-icons pr-2">headset_mic</span
                  >{{
                    $store.state.texts.various.skypeChat[$i18n.locale]
                  }}</b-button
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
                    $store.state.texts.various.workingDatesAndHoursTitle[
                      $i18n.locale
                    ]
                  }}
                </div>
                <div class="text">
                  {{
                    $store.state.texts.various.workingDatesAndHours[
                      $i18n.locale
                    ]
                  }}
                </div>
              </b-col>
            </b-row>
          </b-container>
          <b-container fluid class="box m-0 mt-3 p-3">
            <b-row>
              <b-col>
                <div class="text mb-2">
                  {{ $store.state.texts.various.formDescription[$i18n.locale] }}
                </div>
                <b-form-input
                  class="contactForm mb-2"
                  v-model="firstname"
                  size="sm"
                  :placeholder="
                    $store.state.texts.various.formFirstname[$i18n.locale]
                  "
                ></b-form-input>
                <b-form-input
                  class="contactForm mb-2"
                  v-model="lastname"
                  size="sm"
                  :placeholder="
                    $store.state.texts.various.formLastname[$i18n.locale]
                  "
                ></b-form-input>
                <b-form-input
                  class="contactForm mb-2"
                  v-model="email"
                  size="sm"
                  :placeholder="
                    $store.state.texts.various.formEmail[$i18n.locale]
                  "
                ></b-form-input>
                <b-form-input
                  class="contactForm mb-2"
                  v-model="telephone"
                  size="sm"
                  :placeholder="
                    $store.state.texts.various.formTelephone[$i18n.locale]
                  "
                ></b-form-input>
                <b-form-textarea
                  class="contactForm"
                  id="textarea"
                  v-model="message"
                  :placeholder="
                    $store.state.texts.various.formMessage[$i18n.locale]
                  "
                  rows="8"
                  size="sm"
                  max-rows="20"
                ></b-form-textarea>
              </b-col>
            </b-row>
            <b-row>
              <b-col class="text-right">
                <b-button class="mt-2" variant="danger" size="sm"
                  ><span class="material-icons pr-2">send</span
                  >{{
                    $store.state.texts.various.formSend[$i18n.locale]
                  }}</b-button
                >
              </b-col>
            </b-row>
          </b-container>
        </template>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import { Vue, Component, Provide } from "nuxt-property-decorator";

@Component
export default class extends Vue {
  @Provide() public firstname = "";
  @Provide() public lastname = "";
  @Provide() public email = "";
  @Provide() public telephone = "";
  @Provide() public message = "";
}
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

.contactForm {
  @include formsFontSize;
}
</style>
