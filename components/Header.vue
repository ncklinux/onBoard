<template>
  <b-navbar toggleable type="light" variant="light">
    <b-navbar-brand href="#"
      ><img src="~assets/svg/logo.svg" width="44" height="26"
    /></b-navbar-brand>
    <b-navbar-toggle target="navbar-toggle-collapse">
      <template #default="{ expanded }">
        <span v-if="expanded" class="material-icons">expand_less</span>
        <span v-else class="material-icons">expand_more</span>
      </template>
    </b-navbar-toggle>
    <b-collapse class="mt-4 mb-1" id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item
          class="mb-1"
          v-for="(item, i) in $store.state.texts.menu"
          :key="i"
          :href="item.link"
          >{{ item.text }}</b-nav-item
        >
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script lang="ts">
import { Vue, Component, Provide } from "nuxt-property-decorator";

@Component
export default class extends Vue {
  public mounted() {}
}
</script>

<style lang="scss" scoped>
.nav-link {
  padding: 0;
}

#navbar-toggle-collapse > ul > li > a {
  @include link;
}

#navbar-toggle-collapse > ul > li > a:hover {
  color: green;
}
</style>
