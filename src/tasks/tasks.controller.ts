import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './interfaces/Task';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}
  @Get()
  getTasks(): Promise<Task[]> {
    return this.taskService.getTasks();
  }

  @Get(':id')
  getTask(@Param('id') id: string) {
    return this.taskService.getTask(id);
  }

  @Post()
  createTask(@Body() task: CreateTaskDto): Promise<Task> {
    return this.taskService.createTask(task);
  }

  @Put(':id')
  updateTask(@Body() task: CreateTaskDto, @Param('id') id): Promise<string> {
    return this.taskService.updateTask(id, task);
  }

  @Delete(':id')
  deleteTask(@Param('id') id): Promise<Task> {
    return this.taskService.deleteTask(id);
  }
}
