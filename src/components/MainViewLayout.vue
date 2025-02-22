<template>
  <div class="flex flex-col gap-4 p-8">
    <div class="bg-border rounded-lg w-full px-8 py-5">
      <slot name="navbar"></slot>
    </div>
    <div>
      <slot name="main"></slot>
    </div>
  </div>
</template>
