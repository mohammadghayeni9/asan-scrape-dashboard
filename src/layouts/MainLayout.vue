<script setup>
import { SIDEBAR_MENUS } from '@/constants/sidebar'
import { cn } from '@/utils/ui/ui'
import { Icon } from '@iconify/vue'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div class="bg-background w-screen flex">
    <div
      class="h-screen w-[300px] flex flex-col items-start p-8 border-l border-solid border-border"
    >
      <img src="../assets/images/asanscrapeLogo.png" alt="" class="w-[176px] mx-auto" />
      <div class="flex flex-col gap-8 mt-16 flex-1">
        <router-link
          v-for="menu in SIDEBAR_MENUS"
          :key="menu.key"
          :to="menu.link"
          class="flex items-center justify-start gap-3 cursor-pointer font-bold text-lg"
        >
          <Icon
            :icon="menu.icon"
            :class="
              cn(
                'text-3xl transition-all',
                route.fullPath.startsWith(menu.link) ? 'text-title' : 'text-gray-100',
              )
            "
          />
          <p
            :class="
              cn(
                'transition-all',
                route.fullPath.startsWith(menu.link) ? 'text-title' : 'text-gray-100',
              )
            "
          >
            {{ menu.name }}
          </p>
        </router-link>
      </div>
    </div>
    <div class="flex-1">
      <header class="border-b border-solid border-border"></header>
      <main>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>
