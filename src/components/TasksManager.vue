<script lang="ts" setup>
import {useTasksComposable} from "@/composables/tasksComposable";

const tasksComposable = useTasksComposable();
const tasks = tasksComposable.tasks;

</script>

<template>
  <div class="absolute bottom-0 right-0 flex flex-col p-4 w-[400px] gap-y-3">
    <div
      v-for="task in tasks"
      :key="task.id"
      class="relative px-4 py-2 border border-[1px] border-gray-400 rounded w-full word-br bg-white">{{task.text}}
      <button class="absolute px-2 py-1 top-0 right-0 cursor-pointer hover:bg-red-500 transition rounded" @click="tasksComposable.removeAllTasks()" >x</button>
    </div>
  </div>
</template>

<style lang="scss">

</style>
