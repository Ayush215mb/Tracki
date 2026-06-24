/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { prisma } from '../lib/prisma';
import { hash } from 'bcrypt';
@Injectable()
export class AuthService {
  async create_user(createAuthDto: CreateAuthDto) {
    console.log(createAuthDto);
    const hashedpassword = await this.hashPassword(createAuthDto.password);

    const user = await prisma.profile.create({
      data: {
        email: createAuthDto.email,
        phoneNumber: createAuthDto.phone_number,
        password: hashedpassword,
        username: createAuthDto.email?.split('@')[0] ?? crypto.randomUUID(),
      },
    });
    console.log(user);

    return { code: 201, message: 'user created successfully' };
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }

  async hashPassword(password: string) {
    const hashedpassword = await hash(password, 10);
    return hashedpassword;
  }
}
