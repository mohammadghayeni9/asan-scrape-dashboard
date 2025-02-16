const BASE_URL = 'https://backend-test.asanscrape.com/'
const makeApiUrl = (route) => `${BASE_URL}${route}`

export const API_ROUTES = {
  login: {
    getOtp: makeApiUrl('accounts/otp/'),
    checkOtp: makeApiUrl('accounts/otp-create/'),
    completeProfile: makeApiUrl('accounts/register/'),
  },
}
