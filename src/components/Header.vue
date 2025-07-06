<script setup lang="ts">
import TasksManager from "TasksManager.vue";

</script>

<template>
  <!-- Верхняя панель -->
  <div class="fixed top-0 left-0 right-0 h-[70px] w-[calc(100%-280px)] translate-x-[280px] z-[50] p-2 shadow-xl bg-white flex justify-end items-end">
    <div class="flex flex-col gap-1">
      <button class="px-1 py-1 bg-pink-200 text-pink-800 font-medium rounded-full shadow-sm hover:bg-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50 transition duration-300 ease-in-out" @click="goHome">
        Exit
      </button>
      <button class="px-1 py-1 bg-pink-200 text-pink-800 font-medium rounded-full shadow-sm hover:bg-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50 transition duration-300 ease-in-out" @click="goHome">
        Exit
      </button>
    </div>
  </div>--
</template>

<style scoped lang="scss">

</style>
