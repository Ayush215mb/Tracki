// modules/tasks/dto/create-task.dto.ts
import {IsString, IsNumber, IsNotEmpty, IsEnum} from 'class-validator';
import {TaskPoints} from "../taskpoints.entity.js";

export class CreateTaskDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    description: string;

    @IsNumber()
    @IsEnum(TaskPoints)
    points: number;
}