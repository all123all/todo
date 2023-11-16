<template>
	<div class="card" style="width: 18rem;">
		<div
			:class="['card-header bg-success text-white d-flex justify-content-end', {
				'bg-warning': !isCompleted
				}
			]"
		>
			<button type="button" class="btn btn-light btn-sm" @click="completedTask = !completedTask">
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
			<span class="text-muted align-self-center">{{ createdAt }}</span>

			<div class="btn-group">
				<button type="button" class="btn btn-secondary" @click="updateTask">Update task</button>
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
			title: {
				type: String,
				default: ''
			},
			text: {
				type: String,
				default: ''
			},
			isDefined: {
				type: Boolean,
				default: true
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
				inputTitle: '' as string,
				inputText: '' as string,
				completedTask: this.isCompleted as boolean
			}
		},

		computed: {
			completedText(): string {
				return this.isCompleted ? 'Mark as not completed' : 'Mark as completed';
			},

		},

		watch: {
			completedTask(): void {
				this.updateTaskCompletion()
			}
		},

		methods: {
			deleteTask(): void {
				// Implement delete task logic
				this.inputText = ''
				this.inputTitle = ''
				console.log('delete task')
			},

			updateTaskCompletion(): void {
				// Implement update task completion logic
				console.log('update task completion')
			},

			updateTask(): void {
				// Implement update task logic
				console.log('update task')
			}
		}
	};
</script>
