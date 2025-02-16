<script setup>
import { cn } from '@/utils/ui/ui'
import { Primitive } from 'radix-vue'

const props = withDefaults(defineProps(['variant', 'size', 'class']), {
  as: 'button',
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="cn(buttonVariants({ variant, size }), props.class)"
  >
    <slot />
  </Primitive>
</template>
