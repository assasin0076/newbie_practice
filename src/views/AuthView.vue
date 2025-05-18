<script setup lang="ts">

import {computed, Ref, ref} from "vue";
import {useRouter} from "vue-router";
import { useTasksComposable } from '@/composables/tasksComposable.ts'
import EyeIcon from "@/components/icons/EyeIcon.vue";
import EyeOffIcon from "@/components/icons/EyeOffIcon.vue";

const router = useRouter()

const tasksComsable = useTasksComposable()

const login = ref("")
const password = ref("")

const isErrorVisible = ref(false)

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
  const lowerCaseValue = value.toLowerCase()
  const noSpacesValue = lowerCaseValue
    .split("")
    .filter((el)=>{
     return el !== " "
    })
    .join("")
  password.value = noSpacesValue
}
const resetForm = () => {
  login.value = ""
  password.value = ""
}
let counterSvetlana = 300
const onEnter = () => {
  goHome()
  counterSvetlana = counterSvetlana - 1
  tasksComsable.addTask({
    text: `светлана ${counterSvetlana} метров`
  })
  if(counterSvetlana === 0){
    counterSvetlana = 1
  }
  if(login.value !== "huy" || password.value !== "1488"){
    isErrorVisible.value = true
  } else{
    isErrorVisible.value = false
  }
  resetForm()
}
const inputType: Ref<'text' | 'password'> = ref('text');

const toggleInputType = () => {
  if (inputType.value === 'text') inputType.value = 'password'
  else inputType.value = 'text'
}
const goHome = () => {
  if(login.value === "huy" && password.value === "1488"){
    router.push({
      name: "home"
    })
  }
}

</script>

<template>
  <div class="w-full h-full p-10 pb-[200px] flex items-center justify-center ">
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
        <div class="relative w-full">
          <input class="outline-none border-gray-400 border-1 p-2 rounded w-full" v-model="password" @input="onPassInput" :type="inputType"/>
          <button class="cursor-pointer absolute right-0 top-0 px-2 py-[8px] transition text-gray-700 hover:text-gray-400" @click="toggleInputType">
            <EyeIcon v-if="inputType === 'text'" class="w-5 h-5"/>
            <EyeOffIcon v-else class="w-5 h-5"/>
          </button>
        </div>
      </div>
      <div class="flex flex-col gap-2 mt-2">
        <div v-if="isErrorVisible" class="my-4">
          Неверный Логин или Пароль
        </div>
        <button class="bg-gray-500 text-white p-1 !text-[14px] cursor-pointer hover:bg-gray-400 transition rounded" @click="resetForm" >сбросить</button>
        <button class="bg-green-400 text-white p-1 !text-[14px] cursor-pointer hover:bg-green-300 transition rounded" @click="onEnter" >Войти</button>
      </div>
    </div>
  </div>
</template>
