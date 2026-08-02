import { IsOptional, IsString, IsDateString } from 'class-validator';

export class FindHabitLogsDto {
  @IsOptional()
  @IsString()
  habitId?: string;

  @IsOptional()
  @IsDateString()
  startDate?: string;

  @IsOptional()
  @IsDateString()
  endDate?: string;
}
