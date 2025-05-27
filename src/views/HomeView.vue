<script setup lang="ts">
</script>

<template>
  <div class="fixed flex w-[280px] h-full">
    чечня
    вк хуйня
    телега тоже
  </div>
  <div class="pl-[300px] flex h-screen">
    <div class="w-full p-10 flex items-center justify-center">
      <div class="w-full grid grid-cols-4 gap-20">
        <div v-for="i in 80" class="w-full h-full bg-green-50 rounded border-1 border-gray-200 flex p-10 items-center justify-center" :key="i">huy {{i}}</div>
      </div>
    </div>
  </div>
</template>
