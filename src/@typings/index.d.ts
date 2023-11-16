interface TaskModel {
  id: string | '';
  description: string | '';
  completed: boolean | false;
  createdAt?: Date;
}
