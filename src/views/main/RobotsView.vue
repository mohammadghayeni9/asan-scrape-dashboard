<script setup>
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import RobotsListTabContent from '@/components/pages/robots/RobotsListTabContent.vue'
import RobotsHistoryTabContent from '@/components/pages/robots/RobotsHistoryTabContent.vue'
import TabDivider from '@/components/ui/tabs/TabDivider.vue'
import AppPage from '@/components/page/AppPage.vue'
</script>

<template>
  <Tabs default-value="robots">
    <AppPage>
      <template #navbar>
        <div class="flex w-full justify-between items-center">
          <TabsList>
            <TabsTrigger value="robots"> ربات ها </TabsTrigger>
            <TabDivider />
            <TabsTrigger value="robots_history"> تاریخچه ربات ها </TabsTrigger>
          </TabsList>
          <!-- TODO: doc link -->
          <RouterLink to="#">رفتن به داکیومنت</RouterLink>
        </div>
      </template>
      <template #main>
        <TabsContent value="robots" class="h-full">
          <RobotsListTabContent />
        </TabsContent>
        <TabsContent value="robots_history" class="flex-1 h-full">
          <RobotsHistoryTabContent />
        </TabsContent>
      </template>
    </AppPage>
  </Tabs>
</template>
