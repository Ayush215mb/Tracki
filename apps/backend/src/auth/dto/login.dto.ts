import { Transform } from 'class-transformer';
import { IsNotEmpty, IsString, Length, Matches } from 'class-validator';
import {
  PASSWORD_MAX_LENGTH,
  PASSWORD_MIN_DIGITS,
  PASSWORD_MIN_LENGTH,
  PASSWORD_MIN_LOWER_CASE_LETTERS,
  PASSWORD_MIN_SPECIAL_CHARACTERS,
  PASSWORD_MIN_UPPER_CASE_LETTERS,
  PASSWORD_TEST_REGEX,
} from '../../constants';
import { sanitizePassword } from './create-auth.dto';

export class LoginDto {
  @IsNotEmpty()
  @IsString()
  username!: string;

  @Transform(({ value }: { value: unknown }) => sanitizePassword(value))
  @IsNotEmpty()
  @IsString()
  @Length(PASSWORD_MIN_LENGTH, PASSWORD_MAX_LENGTH)
  @Matches(PASSWORD_TEST_REGEX, {
    message: `Password must contain at least ${PASSWORD_MIN_UPPER_CASE_LETTERS} uppercase letter, ${PASSWORD_MIN_LOWER_CASE_LETTERS} lowercase letter, ${PASSWORD_MIN_DIGITS} digit, and ${PASSWORD_MIN_SPECIAL_CHARACTERS} special character (!@#$%^&*), with a length of ${PASSWORD_MIN_LENGTH} to ${PASSWORD_MAX_LENGTH} characters`,
  })
  password!: string;
}
