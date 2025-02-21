<template>
  <component :is="layout">
    <router-view></router-view>
  </component>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import LoginLayout from './layouts/LoginLayout.vue'
import MainLayout from './layouts/MainLayout.vue'
import { LAYOUTS } from './constants/layouts'

const route = useRoute()
const layout = computed(() => (route.meta.layout === LAYOUTS.login ? LoginLayout : MainLayout))
</script>
