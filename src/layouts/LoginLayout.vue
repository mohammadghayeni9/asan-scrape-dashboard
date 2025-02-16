<template>
  <main class="h-screen w-screen flex items-center justify-center p-6">
    <div
      class="grid grid-cols-1 lg:grid-cols-2 bg-border p-6 rounded-2xl w-[1024px] h-[768px] max-h-full max-w-full mx-auto"
    >
      <div class="px-6 h-full">
        <router-view></router-view>
      </div>
      <div class="bg-background rounded-2xl flex justify-center items-center px-8">
        <img src="../assets/images/login/one.png" alt="Login" class="w-[340px] max-w-full" />
      </div>
    </div>
  </main>
</template>
