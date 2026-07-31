import { IsEmail, IsInt, IsOptional, IsString } from 'class-validator';

export class OnboardingDto {
  @IsEmail()
  @IsOptional()
  email?: string;

  @IsInt()
  @IsOptional()
  phoneNumber?: number;

  @IsString()
  username!: string;

  @IsString()
  @IsOptional()
  name?: string;

  @IsInt()
  @IsOptional()
  age?: number;

  @IsString()
  @IsOptional()
  city?: string;

  @IsString()
  @IsOptional()
  photoUrl?: string;
}
