import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { HabitLogsService } from './habit-logs.service';
import { CreateHabitLogDto } from './dto/create-habit-log.dto';
import { UpdateHabitLogDto } from './dto/update-habit-log.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth/jwt-auth.guard';
import { Profile } from '../../prisma/generated/prisma';

@Controller('habit-logs')
export class HabitLogsController {
  constructor(private readonly habitLogsService: HabitLogsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  createLog(
    @Req() req: Request & { user: Profile },
    @Body() createHabitLogDto: CreateHabitLogDto,
  ) {
    return this.habitLogsService.logHabitCompletion({
      createHabitLogDto: createHabitLogDto,
      user: req.user,
    });
  }
}
