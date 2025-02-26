<script setup>
import { cn } from '@/lib/utils'
import { useVModel } from '@vueuse/core'

const props = defineProps([
  'class',
  'defaultValue',
  'modelValue',
  'containerClass',
  'label',
  'required',
  'placeholder',
])

const emits = defineEmits(['update:modelValue'])

const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: props.defaultValue,
})
</script>

<template>
  <div :class="cn('', props.containerClass)">
    <label class="relative text-sm px-3">
      {{ props.label ? props.label + ' :' : '' }}
      <span class="text-primary absolute -top-[1px] right-[1px]" v-if="props.required"> * </span>
    </label>
    <textarea
      v-model="modelValue"
      :placeholder="props.placeholder"
      :class="
        cn(
          'flex min-h-20 w-full mt-3 rounded-md border border-input bg-background p-3 text-xs placeholder:text-xs ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          props.class,
        )
      "
    />
  </div>
</template>
