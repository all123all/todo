<template>
  <div id="app">
    <nav>
      <div>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
      </div>

      <div>
        <button @click="addNewTask" class="btn btn-primary mx-2">Add new task</button>
      </div>
    </nav>

    <div class="task-container">
      <Card
        v-for="task in taskList"
        :key="task.id"
        :text="task.description"
        :isCompleted="task.completed"
        :createdAt="task.createdAt"
        :id="task.id"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Card from '@/components/common/Card/Card.vue'
import { mapState, mapActions } from 'pinia'
import { useTodoStore } from '@/stores/index'

export default {
  name: 'App',
  components: {
    Card,
  },

  created() {
    //@ts-ignore
    this.fetchTaskList();
  },

  methods: {
    ...mapActions(useTodoStore, ['fetchTaskList']),

    addNewTask() {
    }
  },

  computed: {
    ...mapState(useTodoStore, ['taskList']),
  }
}
</script>

<style>
#app {
  position: relative;
  width: 100%;
  height: 100vh;
}

.task-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  padding-bottom: 1rem;
}

nav {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1rem 0;
  margin: 1rem 0;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
