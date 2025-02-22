import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: {
      name: 'مهدی',
    },
  }),
  actions: {
    setUser(value) {
      this.user = value
    },
  },
})
