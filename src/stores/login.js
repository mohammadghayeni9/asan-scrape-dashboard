import { defineStore } from 'pinia'

export const LOGIN_STEPS = {
  phoneNumber: 'PHONE_NUMBER',
  otpCode: 'OTP_CODE',
  completeProfile: 'COMPLETE_PROFILE',
}

export const useLoginStore = defineStore('login', {
  state: () => ({
    requestId: 0,
    loginStep: LOGIN_STEPS.completeProfile,
    phoneNumber: '',
  }),
  actions: {
    setRequestId(value) {
      this.requestId = value
    },
    logOut() {
      localStorage.removeItem('auth')
      localStorage.removeItem('user')
      this.requestId = ''
    },
    setLoginStep(value) {
      this.loginStep = value
    },
    setPhoneNumber(value) {
      this.phoneNumber = value
    },
  },
})
