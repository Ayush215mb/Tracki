// modules/tasks/dto/create-task.dto.ts
import { IsString, IsNumber, Min, Max, IsNotEmpty } from 'class-validator';

export class CreateTaskDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    description: string;

    @IsNumber()
    @Min(1)
    @Max(10)
    points: number;
}