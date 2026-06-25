import {
  IsEmail,
  IsInt,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateAuthDto {
  @IsEmail()
  @IsOptional()
  email?: string;

  @IsInt()
  @IsOptional()
  phone_number?: number;

  @IsString()
  username!: string;

  @IsString()
  @MinLength(8)
  password!: string;
}
