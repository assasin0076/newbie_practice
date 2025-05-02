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
      class="px-4 py-2 border border-[1px] border-gray-400 rounded w-full word-br">{{task.text}}</div>
  </div>
</template>
