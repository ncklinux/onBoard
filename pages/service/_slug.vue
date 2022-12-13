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
          <serviceContact />
        </template>
        <template v-if="$route.params.slug === 'repairer'">
          <b-container fluid class="m-0 p-0">
            <b-row class="mb-3">
              <b-col class="m-0 p-0">
                <commonHeader
                  v-if="$store.state.texts.various"
                  :title="$store.state.texts.various.repairer"
                  :text="$store.state.texts.various.repairerHeaderText"
                />
              </b-col>
            </b-row>
          </b-container>
          <serviceRepairer />
        </template>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component
export default class extends Vue {}
</script>

<style lang="scss" scoped></style>
