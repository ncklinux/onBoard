<template>
  <b-navbar toggleable type="light" variant="light">
    <b-navbar-brand href="/"
      ><img src="~assets/svg/logo.svg" width="80" height="26"
    /></b-navbar-brand>
    <b-navbar-toggle target="navbar-toggle-collapse" class="pr-0">
      <template #default="{ expanded }">
        <span v-if="expanded" class="material-icons">close</span>
        <span v-else class="material-icons">menu</span>
      </template>
    </b-navbar-toggle>
    <b-collapse id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav class="ml-auto mt-4 mb-2">
        <b-nav-item
          class="mb-2"
          v-for="(item, i) in $store.state.texts.menu"
          :key="i"
          :href="item.link"
          >{{ item.text[$i18n.locale] }}</b-nav-item
        >
      </b-navbar-nav>
      <b-row>
        <b-col cols="auto">
          <commonSwitcher
            v-if="$store.state.texts.various"
            :title="$store.state.texts.various.switchLanguage"
            :data="$i18n.locales"
            :type="0"
          />
        </b-col>
        <b-col>
          <commonSwitcher
            v-if="$store.state.texts.various"
            :title="$store.state.texts.various.currency"
            :data="$store.state.texts.currencies"
            :type="1"
          />
        </b-col>
      </b-row>
    </b-collapse>
  </b-navbar>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component
export default class extends Vue {
  public mounted() {}
}
</script>

<style lang="scss" scoped>
.navbar {
  background-color: white !important;
}

.nav-link {
  padding: 0;
}

.navbar-toggler,
.navbar-toggler:focus,
.navbar-toggler:active,
.navbar-toggler-icon:focus {
  outline: none;
  border: none;
  box-shadow: none;
}

#navbar-toggle-collapse > ul > li > a {
  @include link;
}

#navbar-toggle-collapse > ul > li > a:hover {
  color: #dc3545;
}
</style>
