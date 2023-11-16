import { defineStore } from 'pinia'
import { api } from '@/utils/http'

export const useTodoStore = defineStore({
  id: 'todo',
  state: () => ({
    taskList: [] as TaskModel[],
    isLoading: false as boolean
  }),

  getters: {
    getTaskList: (state) => state.taskList,
    getIsLoading: (state) => state.isLoading,
    getTaskById: (state) => (id: string) => state.taskList.find(task => task.id === id),
    getCompletedTaskList: (state) => state.taskList.filter(task => task.completed),
    getUncompletedTaskList: (state) => state.taskList.filter(task => !task.completed),
    getTaskCount: (state) => state.taskList.length,
    getCompletedTaskCount: (state) => state.taskList.filter(task => task.completed).length,
    getUncompletedTaskCount: (state) => state.taskList.filter(task => !task.completed).length,
  },

  actions: {
    async fetchTaskList(): Promise<void> {
      try {
        this.isLoading = true
        const { data } = await api.get('/tasks')
        this.taskList = data
      } catch (error) {
        console.error(error)
      } finally {
        this.isLoading = false
      }
    },

    async removeTask(task: TaskModel): Promise<void> {
      try {
        this.isLoading = true
        await api.delete(`/tasks/${task.id}`)
        this.fetchTaskList()
      } catch (error) {
        console.log(error)
      } finally {
        this.isLoading = false
      }
    },

    async addTask(description: string): Promise<void> {
      try {
        this.isLoading = true
        await api.post('/tasks', {
          "description": description,
          "completed": false
        })
        this.fetchTaskList()
      } catch (error) {
        console.log(error)
      } finally {
        this.isLoading = false
      }
    },

    async updateTask(task: TaskModel): Promise<void> {
      try {
        this.isLoading = true
        await api.put(`/tasks/${task.id}`, {
          "description": task.description,
          "completed": task.completed
        })
        this.fetchTaskList()
      } catch (error) {
        console.log(error)
      } finally {
        this.isLoading = false
      }
    }
  }
})
