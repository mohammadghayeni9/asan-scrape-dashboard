const BASE_URL = 'https://backend-test.asanscrape.com/'
const makeApiUrl = (route) => `${BASE_URL}${route}`

export const API_ROUTES = {
  baseUrl: BASE_URL,
  login: {
    getOtp: makeApiUrl('accounts/otp/'),
    checkOtp: makeApiUrl('accounts/otp-create/'),
    completeProfile: makeApiUrl('accounts/register/'),
  },
  robots: {
    categories: makeApiUrl('robots/robots-categories/'),
    categories: makeApiUrl('robots/robots/'),
    robotsSearch: makeApiUrl('robots/robots-search/'),
    robotDetail: makeApiUrl('robots/detail/'),
  },
}
