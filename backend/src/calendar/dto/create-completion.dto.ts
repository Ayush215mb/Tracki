import {IsBoolean, IsNotEmpty, IsNumber, IsString} from "class-validator";


export class CreateCompletionDto {
    @IsString()
    @IsNotEmpty()
    TaskId: string

    @IsNumber()
    @IsNotEmpty()
    date: number

    @IsNumber()
    @IsNotEmpty()
    month: number

    @IsBoolean()
    completed: boolean
}