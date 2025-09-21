<script setup>
const props = defineProps({
  data: Object,
  type: String,
});
</script>
<template>
  <template v-if="props.type == 'Multiple List'">
    <template v-for="value in props.data">
      <h2 class="content__subtitle">
        {{ value.title }}
      </h2>
      <ul class="content__section-list">
        <template v-for="functions in value.functions">
          <li class="content__section-list-item" v-html="functions"></li>
        </template>
      </ul>
    </template>
  </template>
  <template v-else-if="props.type == 'Multiple list within multiple list'">
    <template v-for="value in props.data">
      <h2 class="content__subtitle">{{ value.type }}</h2>
      <section class="content__section content__section--formal-education">
        <ul class="content__section-list">
          <template v-for="concept in value.concepts">
            <li class="content__section-list-item">
              <h2>
                <b> {{ concept.subtitle }} </b>
              </h2>
            </li>
            <li class="content__section-list-item remove-circles-item-lists">
              <ul class="content__section-list">
                <template v-for="place in concept.places" :key="index">
                  <li class="content__section-list-item" v-html="place"></li>
                </template>
              </ul>
            </li>
          </template>
        </ul>
      </section>
    </template>
  </template>
</template>
<style scoped>
.content__section-list-item {
  list-style: circle;
  color: var(--color-azul-claro);
}
</style>
