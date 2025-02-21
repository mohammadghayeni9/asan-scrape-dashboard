<script setup>
import AppInput from '@/components/ui/input/AppInput.vue'
import PrimaryButton from '@/components/button/PrimaryButton.vue'
import { ref, watch } from 'vue'
import { useFetch } from '@/composables/useFetch'
import { API_ROUTES } from '@/constants/apiRoutes'
import { LOGIN_STEPS, useLoginStore } from '@/stores/login'

const mobile = ref('')
const errorField = ref('')

const { fetchData } = useFetch()
const loginStore = useLoginStore()

const handleGetOtpCode = async () => {
  if (mobile.value.length === 11 && mobile.value.startsWith('09')) {
    // Call API to send OTP code to the mobile number
    errorField.value = ''
    const body = { receiver: mobile.value }
    const data = await fetchData(API_ROUTES.login.getOtp, 'POST', body)
    if (data?.data) {
      loginStore.setRequestId(data.data?.request_id)
      loginStore.setPhoneNumber(mobile.value)
      // Navigate to the verification step
      loginStore.setLoginStep(LOGIN_STEPS.otpCode)
    }
  } else {
    errorField.value = 'شماره تلفن معتبر نیست'
  }
}

watch(
  () => mobile.value,
  (_mobile) => {
    if (_mobile.length === 11 && _mobile.startsWith('09')) {
      errorField.value = ''
    }
  },
)
</script>

<template>
  <div class="h-full w-full py-2 flex flex-col px-6">
    <img
      src="../../../assets/images/asanscrapeLogo.png"
      alt=""
      class="max-w-full w-[240px] mx-auto"
    />
    <div class="text-3xl w-full text-center mt-8">ورود / عضویت</div>
    <form class="flex flex-col flex-1 justify-center gap-6" @submit.prevent="handleGetOtpCode">
      <AppInput
        v-model="mobile"
        container-class="w-full -mt-10"
        label="شماره تلفن"
        placeholder="09123456789"
        class="text-sm"
        :error="errorField"
      />
      <PrimaryButton title="دریافت کد تایید" />
    </form>
  </div>
</template>
