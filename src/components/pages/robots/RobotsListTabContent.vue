<script setup>
import { useFetch } from '@/composables/useFetch'
import { API_ROUTES } from '@/constants/apiRoutes'
import { cn } from '@/lib/utils'
import { Icon } from '@iconify/vue'
import debounce from 'lodash.debounce'
import { Search } from 'lucide-vue-next'
import { onMounted, ref, watch } from 'vue'

const baseUrl = API_ROUTES.baseUrl

const { fetchData } = useFetch()

const selectedCategory = ref('ALL')
const robotCategories = ref([])
const searchRobotQuery = ref('')
const robotList = ref([])

const getRobotCategoriesCategories = async () => {
  const data = await fetchData(API_ROUTES.robots.categories)
  if (data?.results) {
    robotCategories.value = data.results
  }
}

const handleSearchRobot = debounce(async (query) => {
  getRobotList()
  console.log(query)
}, 1000)

const handleSelectCategory = (id) => {
  if (id === selectedCategory.value) return
  selectedCategory.value = id
  getRobotList()
}

const getRobotList = async () => {
  let query = ''
  if (selectedCategory.value == 'ALL') {
    query = ''
  } else {
    query = `?category=${selectedCategory.value}`
  }
  if (searchRobotQuery.value?.length > 0) {
    if (query.length > 0) {
      query += `&name=${searchRobotQuery.value}`
    } else {
      query += `?name=${searchRobotQuery.value}`
    }
  }

  if (query.length > 0) {
    const robotsData = await fetchData(API_ROUTES.robots.robotsSearch + query)
    robotList.value = robotsData?.results
  } else {
    const robotsData = await fetchData(API_ROUTES.robots.robots)
    robotList.value = robotsData?.results
  }
}

watch(
  () => searchRobotQuery.value,
  (_query) => {
    handleSearchRobot(_query)
  },
)

onMounted(() => {
  getRobotCategoriesCategories()
  getRobotList()
})
</script>

<template>
  <div class="flex gap-4 h-full w-full">
    <div class="bg-border h-full rounded-lg p-6 w-[260px]">
      <div class="flex flex-col gap-8 items-start">
        <p class="">دسته بندی</p>
        <div class="flex items-center gap-2 cursor-pointer" @click="handleSelectCategory('ALL')">
          <Icon icon="material-symbols:layers-rounded" class="text-2xl" />
          <p :class="cn('text-[1rem]', selectedCategory === 'ALL' ? 'text-title' : 'gray-100')">
            همه دسته بندی ها
          </p>
        </div>
        <div
          class="flex items-center gap-2 cursor-pointer"
          v-for="(_category, index) in robotCategories"
          :key="index"
          @click="handleSelectCategory('ALL')"
        >
          <Icon icon="material-symbols:layers-rounded" class="text-2xl" />
          <p :class="cn('text-[1rem]', selectedCategory === 'ALL' ? 'text-title' : 'gray-100')">
            همه دسته بندی ها
          </p>
        </div>
      </div>
    </div>
    <div class="flex-1 bg-border h-full rounded-lg p-6">
      <div>
        <div class="bg-secondary w-full px-4 relative rounded-lg">
          <Search class="absolute top-1/2 -translate-y-1/2" />
          <input
            type="text"
            class="w-full pr-9 py-4 border-none outline-none text-sm bg-transparent h-full"
            placeholder="جستجوی ربات ها..."
            v-model="searchRobotQuery"
          />
        </div>
        <div class="md:pl-4 max-h-[420px] overflow-auto mt-6">
          <!-- TODO: style scroll bar -->
          <div
            class="flex flex-wrap justify-center xl:justify-start gap-4"
            v-if="robotList?.length > 0"
          >
            <router-link
              v-for="robot in robotList"
              :to="'/robots/' + robot?.id"
              :key="robot?.id"
              class="xl:flex-1"
            >
              <Card
                class="border-2 border-solid border-gray-600 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div class="flex justify-start items-center gap-2">
                  <div class="rounded-lg flex justify-center items-center h-8 w-8">
                    <img
                      :src="baseUrl + robot?.image"
                      alt="name"
                      class="w-full h-full object-cover rounded"
                    />
                  </div>
                  <h2 class="text-card-foreground text-sm line-clamp-1">
                    {{ robot?.name }}
                  </h2>
                </div>
                <div
                  class="text-xs mt-3 line-clamp-2 flex-1 max-w-full overflow-hidden text-ellipsis whitespace-nowrap"
                >
                  {{ robot?.short_explanation }}
                </div>
              </Card>
            </router-link>
          </div>
          <div v-else>موردی یافت نشد</div>
        </div>
      </div>
    </div>
  </div>
</template>
