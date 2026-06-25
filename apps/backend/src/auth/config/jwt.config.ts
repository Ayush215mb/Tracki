import { JwtModuleOptions, JwtSignOptions } from '@nestjs/jwt';
import 'dotenv/config';
import { registerAs } from '@nestjs/config';

export default registerAs(
  'jwt',
  (): JwtModuleOptions => ({
    secret: process.env.JWT_SECRET,
    signOptions: {
      expiresIn: process.env.EXPIRES_IN as JwtSignOptions['expiresIn'],
    },
  }),
);
