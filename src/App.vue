<template>
  <div class="relative h-[100vh]">
    <RouterView />
    <TasksManager />
  </div>
</template>

<script setup lang="ts">
import TasksManager from "./components/TasksManager.vue";
</script>

<style>
body {
  min-height: 100vh
}
</style>
