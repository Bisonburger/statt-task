import { Task } from './task.entity';

export type CreateTaskDto = Omit<Task, 'id'>;

export type UpdateTaskDto = Partial<Omit<Task, 'id'>>;
