<template>
  <b-navbar-nav class="ml-auto">
    <p class="switcher mt-4 mb-1">
      {{ title[$i18n.locale] }}
    </p>
    <b-nav-item
      class="m-0 p-0"
      v-for="(item, i) in data"
      :key="i"
      @click="$i18n.locale === item ? '' : clickEvent(item)"
      >{{ item }}</b-nav-item
    >
  </b-navbar-nav>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";

@Component
export default class extends Vue {
  @Prop({ type: Object, required: true }) readonly title!: Record<
    string,
    Languages
  >;
  @Prop({ type: Array, required: true }) readonly data!: string[];
  @Prop({ type: Number, required: true }) readonly type!: number;

  public clickEvent(item: string) {
    if (this.type === 0) {
      this.$router.replace(this.switchLocalePath(item));
    } else {
      this.$store.dispatch("switchCurrency", item);
    }
  }
}
</script>

<style lang="scss" scoped>
.switcher {
  font-size: 0.75rem;
}

.nav-link {
  padding: 0rem;
}

#navbar-toggle-collapse > ul > li > a {
  @include link;
}

#navbar-toggle-collapse > ul > li > a:hover {
  color: #dc3545;
}
</style>
