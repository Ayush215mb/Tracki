import { Transform } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Length,
  Matches,
} from 'class-validator';
import sanitizeHtml from 'sanitize-html';
import {
  PASSWORD_MAX_LENGTH,
  PASSWORD_MIN_DIGITS,
  PASSWORD_MIN_LENGTH,
  PASSWORD_MIN_LOWER_CASE_LETTERS,
  PASSWORD_MIN_SPECIAL_CHARACTERS,
  PASSWORD_MIN_UPPER_CASE_LETTERS,
  PASSWORD_TEST_REGEX,
} from '../../constants';

const sanitizeAndNormalizeEmail = (value: unknown): string | undefined => {
  if (value === undefined || value === null) return undefined;
  if (typeof value !== 'string') return undefined;

  const sanitized = sanitizeHtml(value.trim().toLowerCase(), {
    allowedTags: [],
    allowedAttributes: {},
  });

  return sanitized === '' ? undefined : sanitized;
};
export const sanitizePassword = (value: unknown): string => {
  const password = typeof value === 'string' ? value : '';
  return password.trim().replace(/\s+/g, '').replace(/\r\n/g, '');
};

export class CreateAuthDto {
  @Transform(({ value }: { value: unknown }) =>
    sanitizeAndNormalizeEmail(value),
  )
  @IsNotEmpty()
  @IsEmail()
  email!: string;

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
