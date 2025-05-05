import { Ref, ref } from 'vue'

const tasks: Ref<TTask[]> = ref([])

type TTask = {
  text: string
  id: number
  time?: number
}

export const useTasksComposable = () => {
  const addTask = (task: TTask) => {
    tasks.value.push(task)
    setTimeout(()=>{removeTask(task.id)}, 5000)
  }

  const removeTask = (id: number) => {
    tasks.value = tasks.value.filter((task) => task.id !== id)

  }
  return {
    tasks,
    addTask,
    removeTask,
  }
}
