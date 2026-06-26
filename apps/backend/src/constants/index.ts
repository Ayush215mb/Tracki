export const BACKEND_URL = 'http://localhost:8000';
export const FRONTEND_URL = 'http://localhost:8081';

export const OTP_EXPIRATION_TIME_IN_SECONDS = 600; // 10 minutes
export const OTP_CODE_LENGTH = 6;
export const OTP_CODE_MIN = 100000;
export const OTP_CODE_MAX = 999999;
export const EMAIL_MAX_LENGTH = 255;
export const EMAIL_MIN_LENGTH = 3;

export const PASSWORD_MIN_LENGTH = 7;
export const PASSWORD_MAX_LENGTH = 20;
export const PASSWORD_MIN_UPPER_CASE_LETTERS = 1;
export const PASSWORD_MIN_LOWER_CASE_LETTERS = 1;
export const PASSWORD_MIN_DIGITS = 1;
export const PASSWORD_MIN_SPECIAL_CHARACTERS = 1;
export const PASSWORD_SPECIAL_CHARACTERS_TEST_REGEX = /[!@#$%^&*]/;
export const PASSWORD_TEST_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{7,20}$/;

export default {
  BACKEND_URL,
  FRONTEND_URL,
  OTP_EXPIRATION_TIME_IN_SECONDS,
  OTP_CODE_LENGTH,
  OTP_CODE_MIN,
  OTP_CODE_MAX,
  EMAIL_MAX_LENGTH,
  EMAIL_MIN_LENGTH,
};

export enum HabitFrequency {
  DAILY = 'DAILY',
  WEEKLY = 'WEEKLY',
  CUSTOM = 'CUSTOM',
}
