import { IsInt, IsString } from 'class-validator';

export class Auth {
  @IsString()
  id!: string;

  @IsString()
  username!: string;

  @IsString()
  name!: string;

  @IsInt()
  age?: number;

  @IsString()
  city?: string;

  @IsString()
  timezone?: string;

  @IsString()
  photoUrl?: string;

  @IsInt()
  totalScore!: number;
}
