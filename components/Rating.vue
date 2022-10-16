<template>
  <b-container fluid class="m-0 p-0">
    <b-row class="mt-2 rating">
      <b-col cols="auto">
        <ul class="list m-0 p-0">
          <li
            v-for="star in maxStars"
            :key="star"
            class="star"
            :class="{ active: star <= stars }"
            @click="rate(star)"
          >
            <span class="material-icons">{{ status(star) }}</span>
          </li>
        </ul>
      </b-col>
      <b-col>
        <span v-if="hasCounter">{{ stars }} of {{ maxStars }}</span>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import { Vue, Component, Prop, Provide } from "nuxt-property-decorator";

@Component
export default class extends Vue {
  @Prop({ required: true }) grade!: number;
  @Prop({ default: 5 }) maxStars!: number;
  @Prop({ required: true }) hasCounter!: boolean;

  @Provide() stars = this.grade;

  public rate(star: number) {
    if (typeof star === "number" && star <= this.maxStars && star >= 0)
      this.stars = this.stars === star ? star - 1 : star;
  }

  public status(star: number) {
    return star <= this.stars ? "star" : "star_border";
  }
}
</script>

<style lang="scss" scoped>
$activeColor: orange;

.material-icons {
  font-size: 1rem;
}

.rating {
  font-size: 0.7rem;
  color: #a7a8a8;
}
.list {
  list-style-type: none;
  &:hover {
    .star {
      color: $activeColor;
    }
  }
}
.star {
  display: inline-block;
  cursor: pointer;
  &:hover {
    & ~ .star {
      &:not(.active) {
        color: inherit;
      }
    }
  }
}
.active {
  color: $activeColor;
}
</style>
