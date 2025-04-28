<script setup lang="ts">

import {computed, ref} from "vue";

const login = ref()
const password = ref()

const passwordLabel = computed(() => {


  return 'Ваш пароль: ' + password.value
})

const onPassInput = (event) => {
  const value = event.target.value



  password.value = value.toLowerCase()
}
</script>

<template>
  <div class="w-full p-10 flex items-center justify-center">
    <div class="bg-gray-50 w-[400px] p-4 rounded">
      <div class="flex flex-col gap-2 pb-6 mb-6 border-b-[1px] border-gray-400">
        <div>
         Тут логин: {{login}}
        </div>
        <div>
          {{ passwordLabel }}
        </div>
      </div>
      <div class="flex gap-4 flex-col">
        <input class="outline-none border-gray-400 border-1 p-2" v-model="login"/>
        <input class="outline-none border-gray-400 border-1 p-2" v-model="password" @input="onPassInput"/>
      </div>
    </div>
  </div>
</template>
