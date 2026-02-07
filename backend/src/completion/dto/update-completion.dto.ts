import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString} from "class-validator";


export class UpdateCompletionDto{
    @IsString()
    @IsOptional()
    TaskId: string

    @IsNumber()
    @IsOptional()
    date: number

    @IsNumber()
    @IsOptional()
    month: number

    @IsBoolean()
    @IsOptional()
    completed: boolean
}