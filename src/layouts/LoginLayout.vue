<script setup>
import { useLoginStore, LOGIN_STEPS } from '@/stores/login'
import { computed } from 'vue'

const loginStore = useLoginStore()
const loginStep = computed(() => loginStore.loginStep)
</script>

<template>
  <main class="h-screen w-screen flex items-center justify-center p-6">
    <div
      class="grid grid-cols-1 lg:grid-cols-2 bg-border p-6 rounded-2xl w-[1024px] min-h-[768px] max-h-full max-w-full mx-auto"
    >
      <div class="px-6 h-full">
        <router-view></router-view>
      </div>
      <div class="bg-background rounded-2xl flex justify-center items-center px-8">
        <img
          src="../assets/images/login/one.png"
          alt="Login"
          class="w-[340px] max-w-full"
          v-if="loginStep === LOGIN_STEPS.phoneNumber"
        />
        <img
          src="../assets/images/login/tow.png"
          alt="Login"
          class="w-[340px] max-w-full"
          v-else-if="loginStep === LOGIN_STEPS.otpCode"
        />
        <img
          src="../assets/images/login/three.png"
          alt="Login"
          class="w-[340px] max-w-full"
          v-else-if="loginStep === LOGIN_STEPS.completeProfile"
        />
      </div>
    </div>
  </main>
</template>
