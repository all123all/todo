import { defineStore } from 'pinia'
import { api } from '@/utils/http'

export const useTodoStore = defineStore({
  id: 'main',
  state: () => ({
    taskList: [],
  }),

  getters: {
    getTaskList: (state) => state.taskList
  },

  actions: {
    async fetchTaskList() {
      const { data } = await api.get('/tasks')
      console.log('fetchTaskList from store', data)
      this.taskList = data
    },
  }
})
