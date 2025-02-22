<script setup>
import PrimaryButton from '@/components/button/PrimaryButton.vue'
import BorderedCard from '@/components/card/BorderedCard.vue'
import { SIDEBAR_MENUS } from '@/constants/sidebar'
import { useUserStore } from '@/stores/user'
import { cn } from '@/utils/ui/ui'
import { Icon } from '@iconify/vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const userStore = useUserStore()

const clickSupport = () => {}
const sendOpinion = () => {}
const sendTicket = () => {}
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
      <header
        class="border-b border-solid border-border px-6 py-4 flex items-center justify-between"
      >
        <BorderedCard class="gap-2 px-5">
          <Icon icon="fluent-emoji-flat:waving-hand-light" class="text-3xl hand-icon" />
          سلام {{ userStore.user.name }} عزیز
        </BorderedCard>
        <div class="flex gap-4 items-center">
          <div
            class="bg-gray-700 h-12 w-12 flex items-center justify-center rounded-lg cursor-pointer"
            @click="clickSupport()"
          >
            <Icon icon="bx:support" class="text-3xl" />
          </div>
          <div
            class="bg-gray-700 h-12 px-7 flex items-center justify-center rounded-lg cursor-pointer"
            @click="sendOpinion()"
          >
            ارسال نظر
          </div>
          <PrimaryButton not-shadow class="!h-12" title="ارسال تیکت" @click="sendTicket()" />
        </div>
      </header>
      <main>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hand-icon {
  transform: rotateY(180deg);
}
</style>
