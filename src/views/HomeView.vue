<script setup lang="ts">
</script>

<template>
  <div class="w-full p-10 flex items-center justify-center ">
    <div class="w-full grid grid-cols-4 gap-20">
      <div v-for="i in 40" class="w-full h-full bg-green-50 rounded border-1 border-gray-200 flex p-10 items-center justify-center" :key="i">huy {{i}}</div>
    </div>
  </div>
</template>
