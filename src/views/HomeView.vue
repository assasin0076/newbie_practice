<script setup lang="ts">

import {computed, ref} from "vue";

const login = ref()
const password = ref()

const passwordLabel = computed(() => {


  return "Ваш пароль: " + password.value
})
const loginLabel = computed(() => {


  return `Ваш логин: ` + login.value
})
const onLoginInput = (event) => {
  const value = event.target.value



  login.value = value.toLowerCase()
}
const onPassInput = (event) => {
  const value = event.target.value



  password.value = value.toLowerCase()
}
</script>

<template>
  <div class="w-full p-10 flex items-center justify-center ">
    <div class="bg-gray-50 w-[400px] p-4 rounded border-1 !border-gray-300">
      <div class="flex flex-col gap-2 pb-6 mb-6 border-b-[1px] border-gray-400">
        <div>
         {{loginLabel}}
        </div>
        <div>
          {{ passwordLabel }}
        </div>
      </div>
      <div class="flex gap-4 flex-col">
        <input class="outline-none border-gray-400 border-1 p-2 rounded" v-model="login" @input="onLoginInput"/>
        <input class="outline-none border-gray-400 border-1 p-2 rounded" v-model="password" @input="onPassInput"/>
      </div>
      <div class="flex flex-col gap-2 mt-6">
        <button class="bg-gray-500 text-white p-1 !text-[14px] cursor-pointer hover:bg-gray-400 transition rounded">сбросить</button>
        <button class="bg-green-400 text-white p-1 !text-[14px] cursor-pointer hover:bg-green-300 transition rounded">Войти</button>
      </div>
    </div>
  </div>
</template>
