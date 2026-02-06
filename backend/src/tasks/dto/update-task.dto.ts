import {IsEnum, IsNumber, IsOptional, IsString} from "class-validator";
import {TaskPoints} from "../taskpoints.entity.js";


export class UpdateTaskDto {
    @IsString()
    @IsOptional()
    id?:string

    @IsString()
    @IsOptional()
    name?: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsNumber()
    @IsOptional()
    @IsEnum(TaskPoints)
    points?: number;
}