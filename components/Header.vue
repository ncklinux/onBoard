<template>
  <b-navbar toggleable type="light" variant="light">
    <b-navbar-brand href="/"
      ><img src="~assets/svg/logo.svg" width="44" height="26"
    /></b-navbar-brand>
    <b-navbar-toggle target="navbar-toggle-collapse">
      <template #default="{ expanded }">
        <span v-if="expanded" class="material-icons">expand_less</span>
        <span v-else class="material-icons">expand_more</span>
      </template>
    </b-navbar-toggle>
    <b-collapse id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav class="ml-auto mt-4 mb-2">
        <b-nav-item
          class="mb-2"
          v-for="(item, i) in $store.state.texts.menu"
          :key="i"
          :href="item.link"
          >{{ item.text }}</b-nav-item
        >
        <p class="switchLanguage mt-4 mb-1" v-if="$store.state.texts.various">
          {{
            $store.state.texts.various.switchLanguage[$i18n.getLocaleCookie()]
          }}
        </p>
        <b-nav-item
          class="mb-1"
          v-for="(langItem, i) in $i18n.locales"
          :key="i + '_lang'"
          :to="switchLocalePath(langItem)"
          >{{ langItem }}</b-nav-item
        >
      </b-navbar-nav>
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
.nav-link {
  padding: 0;
}

#navbar-toggle-collapse > ul > li > a {
  @include link;
}

#navbar-toggle-collapse > ul > li > a:hover {
  color: green;
}

.switchLanguage {
  font-size: 0.75rem;
}
</style>
