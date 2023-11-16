<template>
  <div class="main-container">
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

    <div
      class="alert alert-primary position-absolute bottom-0 start-50 translate-middle-x"
      style="width: 350px;"
      role="alert"
    >
      A simple primary alert—check it out!
    </div>
  </div>
</template>

<script lang="ts">
import Card from '@/components/common/Card/Card.vue'
import BaseModal from '@/components/common/Modals/BaseModal.vue'
import { mapState, mapActions } from 'pinia'
import { useTodoStore } from '@/stores/index'

export default {
  name: 'HomeView',

  data() {
    return {
      isOpen: false
    }
  },

  components: {
    Card,
    BaseModal
  },

  created() {
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
  top: 0;
  right: 0;
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
