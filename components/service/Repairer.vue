<template>
  <div>
    <b-container fluid class="m-0 parentBox">
      <b-row class="mb-3 p-0">
        <b-col class="subBox mr-3 p-0">
          <b-img src="http://localhost:3000/img/service/repairer/01.jpg" fluid class="mb-3"></b-img>
          <div class="title pr-3 pl-3 pb-1">
            {{ $store.state.texts.various.repairerSubBoxTitle01[$i18n.locale] }}
          </div>
          <div class="text pr-3 pl-3 pb-3">
            {{ $store.state.texts.various.repairerSubBoxText01[$i18n.locale] }}
          </div>
        </b-col>
        <b-col class="subBox p-0">
          <b-img src="http://localhost:3000/img/service/repairer/02.jpg" fluid class="mb-3"></b-img>
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
      <b-row>
        <b-col>
          <span v-if="errors.length">
            <div class="title mb-2">
              {{
                $store.state.texts.various.formErrorCorrectionsMessage[
                  $i18n.locale
                ]
              }}
            </div>
            <b-alert
              show
              variant="danger"
              class="alertText mb-1"
              v-for="(error, i) in errors"
              :key="i"
              ><span class="material-icons pr-2">report</span
              >{{ error }}</b-alert
            >
          </span>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <div class="text mb-2">
            {{ $store.state.texts.various.formDescription[$i18n.locale] }}
          </div>
          <b-form-input
            class="contactForm mb-2"
            v-model="firstname"
            type="text"
            size="sm"
            :placeholder="
              $store.state.texts.various.formFirstname[$i18n.locale]
            "
          ></b-form-input>
          <b-form-input
            class="contactForm mb-2"
            v-model="lastname"
            type="text"
            size="sm"
            :placeholder="$store.state.texts.various.formLastname[$i18n.locale]"
          ></b-form-input>
          <b-form-input
            class="contactForm mb-2"
            v-model="email"
            type="email"
            size="sm"
            :placeholder="$store.state.texts.various.formEmail[$i18n.locale]"
          ></b-form-input>
          <b-form-input
            class="contactForm mb-2"
            v-model="telephone"
            type="tel"
            size="sm"
            :placeholder="
              $store.state.texts.various.formTelephone[$i18n.locale]
            "
          ></b-form-input>
          <b-form-textarea
            class="contactForm"
            id="textarea"
            v-model="message"
            type="text"
            :placeholder="$store.state.texts.various.formMessage[$i18n.locale]"
            rows="8"
            size="sm"
            max-rows="20"
          ></b-form-textarea>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="text-right">
          <b-button
            class="mt-2"
            variant="danger"
            size="sm"
            @click="submitForm()"
            ><span class="material-icons pr-2">send</span
            >{{ $store.state.texts.various.formSend[$i18n.locale] }}</b-button
          >
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Provide } from "nuxt-property-decorator";

@Component
export default class extends Vue {
  @Provide() public errors: string[] = [];
  @Provide() public firstname = "";
  @Provide() public lastname = "";
  @Provide() public email = "";
  @Provide() public telephone = "";
  @Provide() public message = "";

  private validateEmail(input: string) {
    const reg =
      /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/;
    if (!reg.test(input)) {
      return false;
    } else {
      return true;
    }
  }

  private validatePhone(input: string) {
    // Check if a string contains only numbers and length is 12
    if (/^\d+$/.test(input) && input.length === 12) {
      return true;
    } else {
      return false;
    }
  }

  public submitForm() {
    if (
      this.firstname &&
      this.lastname &&
      this.validateEmail(this.email) === true &&
      this.validatePhone(this.telephone) === true &&
      this.message.length > 1
    ) {
      // TODO: Submit the form with Axios
      this.errors = [];
      console.log("Submit form");
    } else {
      this.errors = [];
      if (!this.firstname) {
        this.errors.push(
          this.$store.state.texts.various.formErrorFirstName[this.$i18n.locale]
        );
      }
      if (!this.lastname) {
        this.errors.push(
          this.$store.state.texts.various.formErrorLastName[this.$i18n.locale]
        );
      }
      if (this.validateEmail(this.email) === false) {
        this.errors.push(
          this.$store.state.texts.various.formErrorEmail[this.$i18n.locale]
        );
      }
      if (this.validatePhone(this.telephone) === false) {
        this.errors.push(
          this.$store.state.texts.various.formErrorTelephone[this.$i18n.locale]
        );
      }
      if (!this.message.length) {
        this.errors.push(
          this.$store.state.texts.various.formErrorMessage[this.$i18n.locale]
        );
      }
    }
  }
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

.alertText {
  font-size: 0.75rem;
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

.contactForm {
  @include formsFontSize;
}

.container {
}
</style>
