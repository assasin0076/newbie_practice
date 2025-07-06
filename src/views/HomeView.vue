<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Header from '@/components/Header.vue'

// Создаём массив объектов: { id: 0, name: 'name1' }, { id: 1, name: 'name2' }, ...
const items = ref(
  Array.from({ length: 80 }, (_, i) => ({
    id: i,
    name: `name${i + 1}`
  }))
)

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
      <button
        class="px-6 py-3 bg-pink-200 text-pink-800 font-medium rounded-full shadow-sm hover:bg-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50 transition duration-300 ease-in-out"
        @click="goHome"
      >
        Exit
      </button>
    </div>
    <div>
      <Header />
    </div>
  </div>

  <!-- Основной контент -->
  <div class="pl-[300px] flex h-screen">
    <div class="w-full p-10 flex items-center justify-center">
      <div class="w-full grid grid-cols-4 gap-20">
        <div
          v-for="item in items"
          :key="item.id"
          class="w-full h-full bg-green-50 rounded border border-gray-200 flex p-10 items-center justify-center"
        >
          {{ item.name }} (id: {{ item.id }})
        </div>
      </div>
    </div>
  </div>
</template>
