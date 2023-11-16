<template>
  <div v-if="isOpen" id="myModal" class="modal">
    <div class="modal-content">
      <h5 class="text-dark">Create new task</h5>
			<textarea
				v-model="inputText"
				placeholder="Write your task here"
				class="card-text w-100 mb-3"
				style="resize: none"
				name=""
				id=""
				rows="10"
        :disabled="isLoading"
			/>

      <div class="d-flex justify-content-end gap-4 align-items-center w-100">
        <div class="text-danger text-start">
          <span v-if="inputText === ''" class="text-danger">You can't create an empty task</span>
        </div>
        <div class="d-flex gap-2">
          <button @click="closeModal" :disabled="isLoading" class="btn btn-outline-danger">Cancel</button>
          <button @click="resolveAddTask" :disabled="isLoading" class="btn btn-primary">Save task</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { mapState, mapActions } from 'pinia';
import { useTodoStore } from '@/stores/index';

export default {
	name: 'BaseModal',

  props: {
    isOpen: Boolean,
  },

  data() {
    return {
      inputText: '',
    }
  },

  computed: {
    ...mapState(useTodoStore, ['isLoading']),
  },

  methods: {
		...mapActions(useTodoStore, ['addTask']),

    closeModal() {
      this.$emit('closeModal')
    },

    resolveAddTask() {
      if(this.inputText === '')
        return

      this.addTask(this.inputText)
      this.inputText = ''
      this.closeModal()
    }
  },
};
</script>

<style>
.modal {
  display: block;
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}
</style>
