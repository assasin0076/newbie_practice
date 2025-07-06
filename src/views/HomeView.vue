<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const goHome = () => {
    router.push({
      name: 'auth'
    })
}
</script>

<template>
  <!-- Сайдбар -->
  <div class="fixed top-0 left-0 flex flex-col w-[280px] h-full p-2 shadow-xl bg-white z-[9999]">
    <div class="h-[200px] p-2">
      чечня
    </div>
    <div class="flex-1 p-2">
      вк хуйня
    </div>
    <div class="h-[200px] p-2 flex justify-end items-end">
      <button class="px-6 py-3 bg-pink-200 text-pink-800 font-medium rounded-full shadow-sm hover:bg-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50 transition duration-300 ease-in-out" @click="goHome">
        Exit
      </button>
    </div>
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
    </div>
  </div>

  <!-- Основной контент -->
  <div class="pl-[300px] flex h-screen">
    <div class="w-full p-10 flex items-center justify-center">
      <div class="w-full grid grid-cols-4 gap-20">
        <div v-for="i in 80" :key="i" class="w-full h-full bg-green-50 rounded border border-gray-200 flex p-10 items-center justify-center">huy {{i}}</div>
      </div>
    </div>
  </div>
</template>
