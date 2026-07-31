import { IsDateString, IsNotEmpty, IsString } from 'class-validator';

export class CreateHabitLogDto {
  @IsString()
  @IsNotEmpty()
  habitId!: string;

  @IsDateString()
  @IsNotEmpty()
  logDate!: string;
}
