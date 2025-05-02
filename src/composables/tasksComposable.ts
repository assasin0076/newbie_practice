import { ref } from 'vue'

const tasks = ref([])

export const useTasksComposable = () => {
  const addTask = (task) => {
    console.log(tasks.value)
    tasks.value.push(task)
  }

  const removeTask = (id) => {
    tasks.value = tasks.value.filter((task) => task.id !== id)
  }
  return {
    tasks,
    addTask,
    removeTask,
  }
}
