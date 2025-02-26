<script setup>
import { cn } from '@/lib/utils'
import { useVModel } from '@vueuse/core'

const props = defineProps([
  'defaultValue',
  'modelValue',
  'class',
  'label',
  'required',
  'containerClass',
  'placeholder',
  'error',
  'disabled',
])

const emits = defineEmits(['update:modelValue'])

const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: props.defaultValue,
})
</script>

<template>
  <div :class="cn('transition-all relative', props.containerClass, props.error ? 'pb-6' : 'pb-0')">
    <label class="relative text-sm px-3">
      {{ props.label ? props.label + ' :' : '' }}
      <span class="text-primary absolute -top-[1px] right-[1px]" v-if="props.required"> * </span>
    </label>
    <input
      v-model="modelValue"
      :placeholder="props.placeholder"
      :value="modelValue"
      :disabled="props.disabled"
      :class="
        cn(
          'relative z-20 flex h-11 w-full mt-3 rounded-md border border-border bg-input px-3 py-2 text-lg placeholder:text-xs ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all',
          props.class,
        )
      "
    />
    <span class="text-error text-xs absolute px-1 bottom-0 right-0" v-if="props.error">
      {{ props.error }}
    </span>
  </div>
</template>
