<script setup>
import AppInput from '@/components/ui/input/AppInput.vue'
import PrimaryButton from '@/components/button/PrimaryButton.vue'
import { computed, ref, watch } from 'vue'
import { useFetch } from '@/composables/useFetch'
import { API_ROUTES } from '@/constants/apiRoutes'
import { LOGIN_STEPS, useLoginStore } from '@/stores/login'

const otpCode = ref('')
const errorField = ref('')
const mobile = ref('')
const isCountdown = ref(true)

const { fetchData } = useFetch()
const loginStore = useLoginStore()

mobile.value = loginStore.phoneNumber

const handleGetOtpCode = async () => {
  if (otpCode.value) {
    // Call API to send OTP code to the mobile number
    errorField.value = ''
    const body = { request_id: loginStore.requestId, password: otpCode.value }
    const data = await fetchData(API_ROUTES.login.checkOtp, 'POST', body)

    if (data?.token && data?.user === mobile?.value) {
      localStorage.setItem('auth', { accessToken: data.token, refreshToken: data.refresh })
      if (data.is_profile_complete) {
        loginStore.setLoginStep(LOGIN_STEPS.otpCode)
      } else {
        loginStore.setLoginStep(LOGIN_STEPS.completeProfile)
      }
    }
  } else {
    errorField.value = 'کد تایید اشتباه است'
  }
}

const onCountdownEnd = () => {
  isCountdown.value = false
}

const resendOtpCode = () => {
  // resend otp code
  isCountdown.value = true
}
</script>

<template>
  <div class="h-full w-full py-2 flex flex-col px-6">
    <img src="../../assets/images/asanscrapeLogo.png" alt="" class="max-w-full w-[240px] mx-auto" />
    <div class="text-3xl w-full text-center mt-8">ورود</div>
    <form class="flex flex-col flex-1 justify-center gap-6" @submit.prevent="handleGetOtpCode">
      <AppInput
        v-model="mobile"
        container-class="w-full -mt-10"
        label="شماره تلفن"
        class="text-sm"
        :error="errorField"
        disabled
      />
      <AppInput
        v-model="otpCode"
        container-class="w-full -mt-1"
        label="کد تایید"
        class="text-sm"
        :error="errorField"
      />
      <vue-countdown
        :time="2 * 60 * 1000"
        v-slot="{ minutes, seconds }"
        class="text-center"
        @end="onCountdownEnd"
        v-if="isCountdown"
      >
        {{ minutes }}:{{ seconds }}
      </vue-countdown>
      <p class="w-fit mx-auto cursor-pointer" @click="resendOtpCode" v-else>ارسال مجدد</p>
      <PrimaryButton title="ورود" />
    </form>
  </div>
</template>
