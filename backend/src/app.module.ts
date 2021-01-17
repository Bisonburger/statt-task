import { TaskModule } from './task/task.module';
import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import { Task } from './task/dto/task.entity';

@Module({
  imports: [TaskModule,
            TypeOrmModule.forRoot({
              type: 'postgres',
              host: 'localhost',
              port: 5432,
              username: 'postgres',
              password: 'postgres',
              database: 'task',
              synchronize: true,
              schema:   'public',
              entities: [Task],        
            })],
})
export class AppModule {}
