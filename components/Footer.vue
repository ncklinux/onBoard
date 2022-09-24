<template>
  <b-container fluid>
    <b-row class="mt-3">
      <b-col>
        <h6>Customer Service</h6>
        <p class="infromationParagraph">
          Find below most critical links for contact and customer support
        </p>
        <ul class="p-0 customerList">
          <li><a href="#" class="customerListLink">Contact us</a></li>
          <li><a href="#" class="customerListLink">Repairer</a></li>
          <li><a href="#" class="customerListLink">Guarantee</a></li>
          <li><a href="#" class="customerListLink">Shipping & returns</a></li>
        </ul>
      </b-col>
      <b-col>
        <h6>Information</h6>
        <p class="infromationParagraph">
          Looking for information of any kind? Take a look at the links below,
          we have prepared the most desirable answers to almost anything you
          might ask.
        </p>
        <ul class="p-0 customerList">
          <li><a href="#" class="customerListLink">FAQ</a></li>
          <li><a href="#" class="customerListLink">Blog</a></li>
          <li><a href="#" class="customerListLink">Privacy Policy</a></li>
          <li><a href="#" class="customerListLink">Terms & conditions</a></li>
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
  text-decoration: none;
  color: black;
  -o-transition: 0.3s;
  -ms-transition: 0.3s;
  -moz-transition: 0.3s;
  -webkit-transition: 0.3s;
  transition: 0.3s;
}

.customerListLink:hover {
  color: green;
}
</style>
