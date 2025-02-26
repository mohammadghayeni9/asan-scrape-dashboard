<script setup>
import { cn } from '@/lib/utils'
import { TabsList } from 'reka-ui'
import { computed } from 'vue'

const props = defineProps({
  loop: { type: Boolean, required: false },
  asChild: { type: Boolean, required: false },
  as: { type: null, required: false },
  class: { type: null, required: false },
})

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <TabsList v-bind="delegatedProps" :class="cn('flex gap-6', props.class)">
    <slot />
  </TabsList>
</template>
