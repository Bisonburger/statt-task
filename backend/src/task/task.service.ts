import { Injectable } from '@nestjs/common';
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';
import { v4 as uuidv4 } from 'uuid';
import { Repository } from 'typeorm';
import { Task } from './dto/task.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TaskService {

  constructor(
    @InjectRepository(Task) private readonly taskRepository: Repository<Task>,
  ) {}

  findAll(): Promise<Task[]> {
    return this.taskRepository.find({order: { id: 'ASC' }});
  }

  findOne(id: string): Promise<Task> {
    return this.taskRepository.findOne(id);
  }

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    const task: Task = { id: uuidv4(), ...createTaskDto };
    return this.taskRepository.save<Task>( task )
  }

  update(id: string, updateTaskDto: UpdateTaskDto) {
    return this.taskRepository.update(id, updateTaskDto);
  }

  remove(id: string) {
    return this.taskRepository.delete(id);
  }
}
