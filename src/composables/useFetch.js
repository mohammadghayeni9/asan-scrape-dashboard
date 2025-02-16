import { useRouter } from 'vue-router'
import { ref } from 'vue'

export function useFetch() {
  const router = useRouter()

  const data = ref(null)
  const loading = ref(false)
  const error = ref(null)

  const fetchData = async (url, method = 'GET', body = null, options = {}) => {
    loading.value = true
    error.value = null

    try {
      // Read token from localStorage
      const token = localStorage.getItem('token')

      // Add Authorization header
      const headers = {
        ...options.headers,
        ...(token && { Authorization: `Bearer ${token}` }),
        'Content-Type': 'application/json',
      }

      // Configure fetch options
      const fetchOptions = {
        method,
        headers,
        ...options,
      }

      // Add body for POST requests
      if (method === 'POST' && body) {
        fetchOptions.body = JSON.stringify(body)
      }

      // Make the fetch request
      const response = await fetch(url, fetchOptions)
      if (response.status === 401) {
        router.push('/login')
        return null
      }

      // Parse the response as JSON
      const result = await response.json()

      data.value = result
      return data.value
    } catch (err) {
      error.value = err
      return null
    } finally {
      loading.value = false
    }
  }

  return { data, loading, error, fetchData }
}
