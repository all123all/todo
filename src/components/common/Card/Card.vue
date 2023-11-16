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
				<button type="button" class="btn btn-secondary" @click="updateTask">Update</button>
				<button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
					<span class="visually-hidden">Toggle Dropdown</span>
				</button>
				<ul class="dropdown-menu">
					<li>
						<span
							class="dropdown-item text-primary"
							@click="updateTask"
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
			}
		},

		data() {
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
				return new Date(this.createdAt).toLocaleString()
			}
		},

		methods: {
			deleteTask(): void {
				// Implement delete task logic
				console.log('delete task')
			},

			updateTaskCompletion(): void {
				// Implement update task completion logic
				this.completedTask = !this.completedTask
				console.log('update task completion', this.completedTask)
			},

			updateTask(): void {
				// Implement update task logic
				console.log('update task', this.inputText)
			}
		}
	};
</script>
