import {
  IsOptional,
  IsString,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsArray,
  ArrayMaxSize,
  Max,
  Min,
} from 'class-validator';

import { HabitFrequency } from '../../constants';

export class CreateHabitDto {
  @IsNotEmpty()
  @IsString()
  name!: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNotEmpty()
  @IsEnum(HabitFrequency, {
    message: `frequency must be one of: ${Object.values(HabitFrequency).join(', ')}`,
  })
  frequency!: HabitFrequency;

  @IsOptional()
  @IsArray()
  @ArrayMaxSize(7)
  @IsInt({ each: true })
  @Min(0, { each: true })
  @Max(6, { each: true })
  scheduledDays?: number[];

  @IsNotEmpty()
  @IsInt()
  score!: number;
}
