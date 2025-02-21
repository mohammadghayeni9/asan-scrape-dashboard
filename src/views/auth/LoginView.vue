<script setup>
import LoginPhoneNumberStep from '@/components/pages/login/LoginPhoneNumberStep.vue'
import { LOGIN_STEPS, useLoginStore } from '@/stores/login'
import { computed, defineAsyncComponent } from 'vue'

const loginStepComponents = {
  [LOGIN_STEPS.phoneNumber]: LoginPhoneNumberStep,
  [LOGIN_STEPS.otpCode]: defineAsyncComponent(
    () => import('@/components/pages/login/LoginOtpCodeStep.vue'),
  ),
  [LOGIN_STEPS.completeProfile]: defineAsyncComponent(
    () => import('@/components/pages/login/LoginCompleteProfile.vue'),
  ),
}

const loginStore = useLoginStore()

const loginStepComponent = computed(() => loginStepComponents[loginStore.loginStep])
</script>

<template>
  <component :is="loginStepComponent" />
</template>
