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
      v-if="isLoading"
      class="alert alert-primary position-absolute bottom-0 start-50 translate-middle-x"
      style="width: 350px;"
    >
      Loading. Please wait...
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
    ...mapState(useTodoStore, ['taskList', 'isLoading']),
  }
}
</script>

<style>
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 80vh;
}

.task-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  padding-bottom: 1rem;
}
</style>
