<script setup>
import { computed, toRefs } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  padding: {
    type: String,
    default: '12px 16px',
  },
  notShadow: {
    type: Boolean,
    default: false,
  },
})
const shadow = computed(() => (props.notShadow ? '' : 'drop-shadow(0 0 7px var(--primary-600))'))
const { title, padding } = toRefs(props)
</script>

<template>
  <button class="button">
    {{ title }}
  </button>
</template>

<style scoped lang="scss">
.button {
  filter: v-bind(shadow);
  color: var(--text-title-color);
  background-color: var(--primary);
  border-radius: 8px;
  padding: v-bind(padding);
}
</style>
