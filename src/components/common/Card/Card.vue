<template>
	<div class="card" style="width: 18rem">
		<div
			:class="['card-header bg-success text-white d-flex justify-content-end', {
				'bg-warning': !isCompleted
				}
			]"
		>
			<button type="button" class="btn btn-light btn-sm" @click="updateTaskCompletion">
				{{
					isCompleted ? 'Mark as not completed' : 'Mark as completed'
				}}
			</button>
		</div>

		<div class="card-body">
			<textarea
				v-model="inputText"
				placeholder="Write your task here"
				class="card-text w-100 border-0"
				style="resize: none"
				name=""
				id=""
				rows="10"
			/>
		</div>

		<div class="card-footer d-flex justify-content-between align-items-center text-align-center">
			<span class="text-muted align-self-center">{{ formattedCreatedAt }}</span>

			<div class="btn-group">
				<button type="button" class="btn btn-secondary" @click="resolveUpdateTask">Update</button>
				<button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
					<span class="visually-hidden">Toggle Dropdown</span>
				</button>
				<ul class="dropdown-menu">
					<li>
						<span
							class="dropdown-item text-primary"
							@click="resolveUpdateTask"
							style="cursor: pointer"
						>
							Update this task
						</span>
					</li>

					<li>
						<span
							class="dropdown-item text-danger"
							@click="deleteTask"
							style="cursor: pointer"
						>
							Delete this task
						</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { mapActions } from 'pinia';
import { useTodoStore } from '@/stores/index';

	export default {
		name: 'Card',
    props: {
    text: {
      type: String,
      default: ''
    },
    createdAt: {
      type: String,
      default: ''
    },
    isCompleted: {
      type: Boolean,
      default: false
    },
    id: {
      type: String,
      default: ''
    }
  },

    data(): {
      inputText: string
      completedTask: boolean
    } {
			return {
				inputText: this.text as string || '',
				completedTask: this.isCompleted as boolean || false
			}
		},

		computed: {
			completedText(): string {
				return this.isCompleted ? 'Mark as not completed' : 'Mark as completed'
			},

			formattedCreatedAt(): string {
        if (!this.createdAt)
          return ''

				return new Date(this.createdAt).toLocaleString()
			}
		},

		methods: {
			...mapActions(useTodoStore, ['removeTask', 'updateTask']),

			deleteTask(): void {
				let task = {
					description: this.inputText,
					completed: this.completedTask,
					id: this.id
				}
				this.removeTask(task)
			},

			updateTaskCompletion(): void {
				// Implement update task completion logic
				this.completedTask = !this.completedTask
				console.log('update task completion', this.completedTask)
			},

			resolveUpdateTask(): void {
        if(this.inputText === this.text)
          return

				let task = {
					description: this.inputText,
					completed: this.completedTask,
					id: this.id
				}
        this.updateTask(task)
				console.log('update task', this.inputText)
			}
		}
	};
</script>
