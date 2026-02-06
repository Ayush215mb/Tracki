import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor() {
    console.log('DATABASE_URL:', process.env.DATABASE_URL);

  }
  getHello(): string {
    return 'Hello World!';
  }
}
