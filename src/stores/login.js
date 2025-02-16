import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useLoginStore = defineStore('login', () => {
  const requestId = ref('')
  const setRequestId = (value) => (requestId.value = value)
  const logOut = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    requestId.value = ''
  }

  return { requestId, setRequestId, logOut }
})
