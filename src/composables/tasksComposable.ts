import { Ref, ref } from 'vue'
import generateId from '@/helpers/generateId'

const tasks: Ref<TTask[]> = ref([])

type TTask = {
  text: string
  id: number | string
  time?: number
}

export const useTasksComposable = () => {
  const addTask = (task: Omit<TTask, 'id'>) => {
    const completeTask = {
      ...task,
      id: generateId(),
    }

    tasks.value.push(completeTask)

    setTimeout(() => {
      removeTask(completeTask.id)
    }, 5000)
  }

  const removeTask = (id: number | string) => {
    tasks.value = tasks.value.filter((task) => task.id !== id)
  }
  const removeAllTasks = () => {
    tasks.value = []
  }
  return {
    tasks,
    addTask,
    removeTask,
    removeAllTasks,
  }
}
