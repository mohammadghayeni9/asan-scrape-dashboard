<script setup>
import AppInput from '@/components/ui/input/AppInput.vue'
import PrimaryButton from '@/components/button/PrimaryButton.vue'
import { reactive, ref, watch } from 'vue'
import { useFetch } from '@/composables/useFetch'
import { API_ROUTES } from '@/constants/apiRoutes'
import { LOGIN_STEPS, useLoginStore } from '@/stores/login'
import { useRouter } from 'vue-router'
import { PAGE_ROUTES } from '@/constants/pageRoutes'

const errorText = 'این فیلد اجباری می باشد'
const emailRegex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

const profileForm = reactive({
  first_name: '',
  last_name: '',
  occupation: '',
  email: '',
})

const profileFormErrorFields = reactive({
  first_name: '',
  last_name: '',
  occupation: '',
  email: '',
})

const router = useRouter()

const { fetchData } = useFetch()
const loginStore = useLoginStore()

const handleCompleteProfile = async () => {
  let errorCount = 0
  if (!profileForm.first_name) {
    profileFormErrorFields.first_name = errorText
    errorCount++
  }
  if (!profileForm.last_name) {
    profileFormErrorFields.last_name = errorText
    errorCount++
  }
  if (!profileForm.occupation) {
    profileFormErrorFields.occupation = errorText
    errorCount++
  }
  if (!profileForm.email.match(emailRegex)) {
    profileFormErrorFields.email = errorText
    errorCount++
  }
  if (errorCount > 0) return

  // error count = 0 then :

  const body = profileForm
  const data = await fetchData(API_ROUTES.login.completeProfile, 'POST', body)

  if (data) {
    router.push(PAGE_ROUTES.main.dashboard)
  }
}

watch(
  () => profileForm.first_name,
  () => {
    if (profileForm.first_name) {
      profileFormErrorFields.first_name = ''
    }
  },
)

watch(
  () => profileForm.last_name,
  () => {
    if (profileForm.last_name) {
      profileFormErrorFields.last_name = ''
    }
  },
)

watch(
  () => profileForm.occupation,
  () => {
    if (profileForm.occupation) {
      profileFormErrorFields.occupation = ''
    }
  },
)

watch(
  () => profileForm.email,
  () => {
    if (profileForm.email.match(emailRegex)) {
      profileFormErrorFields.email = ''
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
    <div class="text-3xl w-full text-center mt-8">عضویت</div>
    <form class="flex flex-col flex-1 justify-center gap-6" @submit.prevent="handleCompleteProfile">
      <AppInput
        v-model="profileForm.first_name"
        container-class="w-full"
        label="نام"
        placeholder="نام"
        class="text-sm"
        :error="profileFormErrorFields.first_name"
      />
      <AppInput
        v-model="profileForm.last_name"
        container-class="w-full -mt-3"
        label="نام خانوادگی"
        placeholder="نام خانوادگی"
        class="text-sm"
        :error="profileFormErrorFields.last_name"
      />
      <AppInput
        v-model="profileForm.email"
        container-class="w-full -mt-3"
        label="ایمیل"
        placeholder="ایمیل"
        class="text-sm"
        :error="profileFormErrorFields.email"
      />
      <AppInput
        v-model="profileForm.occupation"
        container-class="w-full -mt-3 mb-2"
        label="عنوان شغلی"
        placeholder="عنوان شغلی"
        class="text-sm"
        :error="profileFormErrorFields.occupation"
      />
      <PrimaryButton title="دریافت کد تایید" />
    </form>
  </div>
</template>
