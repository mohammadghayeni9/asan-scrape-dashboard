<script setup lang="ts"></script>

<template>
  <div class="flex flex-col gap-4 p-8 h-full">
    <div class="bg-border rounded-lg w-full px-8 flex items-center h-20">
      <slot name="navbar"></slot>
    </div>
    <div class="h-full">
      <slot name="main"></slot>
    </div>
  </div>
</template>
